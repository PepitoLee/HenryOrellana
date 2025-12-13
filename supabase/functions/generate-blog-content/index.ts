// Supabase Edge Function for generating blog content with Google Gemini AI
// Deploy: supabase functions deploy generate-blog-content --no-verify-jwt

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GenerateRequest {
  topic: string;
  category: string;
  tone: 'formal' | 'conversational' | 'inspirational';
  targetLength: 'short' | 'medium' | 'long';
}

interface GeneratedContent {
  es: {
    title: string;
    excerpt: string;
    content: string;
    metaDescription: string;
    readTime: string;
  };
  en: {
    title: string;
    excerpt: string;
    content: string;
    metaDescription: string;
    readTime: string;
  };
  suggestedSlug: string;
}

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

const lengthGuide = {
  short: { words: '800-1200', readTime: '4-5 min' },
  medium: { words: '1500-2000', readTime: '7-8 min' },
  long: { words: '2500-3500', readTime: '12-15 min' },
};

const toneDescriptions = {
  formal: 'profesional, académico, con datos y referencias, evita coloquialismos',
  conversational: 'cercano, amigable, como una conversación entre amigos, usa preguntas retóricas',
  inspirational: 'motivador, emotivo, con llamados a la acción, usa historias y metáforas',
};

function buildPrompt(request: GenerateRequest): string {
  const { topic, category, tone, targetLength } = request;
  const length = lengthGuide[targetLength];
  const toneDesc = toneDescriptions[tone];

  return `Eres Henry Orellana D., autor del libro "CEO Junior", speaker internacional, experto en emprendimiento familiar y crianza con propósito. Tu misión es transformar familias en equipos emprendedores.

IMPORTANTE: Genera un artículo de blog COMPLETO Y PROFESIONAL sobre el siguiente tema.

TEMA: ${topic}
CATEGORÍA: ${category}
TONO: ${toneDesc}
LONGITUD: ${length.words} palabras aproximadamente

INSTRUCCIONES ESTRICTAS:

1. CONTENIDO HTML:
- Usa etiquetas HTML semánticas: <p>, <h2>, <h3>, <ul>, <li>, <strong>, <em>, <blockquote>
- NO uses <h1> (el título va separado)
- Incluye al menos 3-4 secciones con subtítulos <h2>
- Usa listas para puntos clave
- Incluye una cita inspiracional en <blockquote>
- Termina con una llamada a la acción

2. ESTRUCTURA DEL CONTENIDO:
- Introducción enganchadora (conecta con el lector)
- Desarrollo con subtítulos claros
- Ejemplos prácticos o historias
- Consejos accionables
- Conclusión con reflexión y CTA

3. ESTILO DE ESCRITURA:
- Primera persona cuando compartas experiencias
- Segunda persona para hablar al lector
- Mezcla de datos con historias personales
- Referencias a tu libro "CEO Junior" cuando sea relevante
- Conecta con valores familiares y emprendimiento

4. SEO:
- Meta descripción de exactamente 150-160 caracteres
- Slug corto y descriptivo (máx 5 palabras, sin acentos, guiones)

FORMATO DE RESPUESTA (JSON ESTRICTO):
{
  "es": {
    "title": "Título atractivo y SEO-friendly en español",
    "excerpt": "Resumen de 2-3 oraciones que enganche al lector",
    "content": "<p>Contenido HTML completo...</p>",
    "metaDescription": "Meta descripción de 150-160 caracteres para SEO",
    "readTime": "${length.readTime}"
  },
  "en": {
    "title": "Attractive SEO-friendly title in English",
    "excerpt": "2-3 sentence summary that hooks the reader",
    "content": "<p>Full HTML content...</p>",
    "metaDescription": "Meta description 150-160 characters for SEO",
    "readTime": "${length.readTime}"
  },
  "suggestedSlug": "url-slug-sin-acentos"
}

IMPORTANTE:
- Responde SOLO con el JSON válido, sin explicaciones adicionales
- El contenido en inglés debe ser una traducción profesional, no literal
- Asegúrate de que el JSON sea válido y parseable`;
}

async function generateWithGemini(prompt: string): Promise<GeneratedContent> {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY not configured');
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-preview:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.text();
    console.error('Gemini API error:', errorData);
    throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.candidates || data.candidates.length === 0) {
    throw new Error('No content generated by Gemini');
  }

  const textContent = data.candidates[0].content.parts[0].text;

  // Extract JSON from the response (handle markdown code blocks)
  let jsonString = textContent;
  const jsonMatch = textContent.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    jsonString = jsonMatch[1];
  }

  // Clean up the string
  jsonString = jsonString.trim();

  try {
    const parsed = JSON.parse(jsonString);
    return parsed as GeneratedContent;
  } catch (parseError) {
    console.error('JSON parse error:', parseError);
    console.error('Raw content:', textContent);
    throw new Error('Failed to parse Gemini response as JSON');
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const request: GenerateRequest = await req.json();

    // Validate request
    if (!request.topic || !request.category) {
      throw new Error('Topic and category are required');
    }

    const prompt = buildPrompt(request);
    const content = await generateWithGemini(prompt);

    return new Response(JSON.stringify(content), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
