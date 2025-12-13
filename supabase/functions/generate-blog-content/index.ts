// Supabase Edge Function for generating SEO-optimized blog content with Google Gemini AI
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
  short: { words: '1200-1500', readTime: '5-6 min' },
  medium: { words: '1800-2200', readTime: '8-10 min' },
  long: { words: '2800-3500', readTime: '12-15 min' },
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

GENERA UN ARTÍCULO DE BLOG 100% OPTIMIZADO PARA SEO sobre el siguiente tema.

TEMA: ${topic}
CATEGORÍA: ${category}
TONO: ${toneDesc}
LONGITUD: ${length.words} palabras (mínimo 1500 palabras para SEO)

═══════════════════════════════════════════════════════════════
                    OPTIMIZACIÓN SEO OBLIGATORIA
═══════════════════════════════════════════════════════════════

1. TÍTULO SEO (MUY IMPORTANTE):
   - Incluye la PALABRA CLAVE PRINCIPAL al inicio
   - Usa números cuando sea posible ("7 Estrategias...", "5 Claves...")
   - Incluye palabras de poder: "Guía", "Definitiva", "Probado", "Secretos", "Cómo"
   - Máximo 60 caracteres para que no se corte en Google
   - Debe generar curiosidad y clicks

2. META DESCRIPCIÓN SEO:
   - Exactamente 150-160 caracteres
   - Incluye la palabra clave principal
   - Incluye un CALL TO ACTION ("Descubre", "Aprende", "Conoce")
   - Debe convencer al usuario de hacer click

3. ESTRUCTURA DE CONTENIDO PARA POSICIONAMIENTO:

   A) INTRODUCCIÓN (150-200 palabras):
      - Primer párrafo con la PALABRA CLAVE en las primeras 100 palabras
      - Plantea el problema/necesidad del lector
      - Promete la solución
      - Usa pregunta retórica para enganchar

   B) TABLA DE CONTENIDOS implícita con H2 claros

   C) DESARROLLO con jerarquía H2 > H3:
      <h2>Subtítulo con Palabra Clave</h2>
      <p>Contenido relevante...</p>
      <h3>Subtema específico</h3>
      <p>Desarrollo del subtema...</p>

   D) LISTAS para Featured Snippets:
      <h2>X Beneficios/Pasos/Consejos de [Tema]</h2>
      <ul>
        <li><strong>Beneficio 1:</strong> Explicación</li>
        <li><strong>Beneficio 2:</strong> Explicación</li>
      </ul>

   E) SECCIÓN FAQ para Position Zero:
      <h2>Preguntas Frecuentes sobre [Tema]</h2>
      <h3>¿Pregunta con palabra clave?</h3>
      <p>Respuesta directa y concisa...</p>

   F) CONCLUSIÓN con CTA:
      - Resume puntos clave
      - Llamada a la acción clara
      - Invita a comentar/compartir

4. DENSIDAD DE PALABRAS CLAVE:
   - Palabra clave principal: 1-2% del contenido
   - Variaciones semánticas (LSI): distribuidas naturalmente
   - En H2 y H3: al menos 2-3 veces
   - En primer y último párrafo: obligatorio

5. ELEMENTOS HTML SEMÁNTICOS:
   <p> - Párrafos cortos (máx 3-4 líneas)
   <h2> - Subtítulos principales (4-6 en el artículo)
   <h3> - Subtítulos secundarios
   <ul>/<ol> - Listas para escaneabilidad
   <strong> - Palabras clave y conceptos importantes
   <em> - Énfasis en frases clave
   <blockquote> - Citas inspiracionales

6. LEGIBILIDAD Y UX:
   - Párrafos cortos (máximo 150 palabras)
   - Oraciones variadas (cortas y medianas)
   - Transiciones fluidas entre secciones
   - Bullet points para información importante
   - Negritas en conceptos clave

7. SLUG SEO:
   - 3-5 palabras máximo
   - Palabra clave principal incluida
   - Sin acentos, sin caracteres especiales
   - Separado por guiones
   - Ejemplo: "crianza-hijos-emprendedores"

═══════════════════════════════════════════════════════════════
                    ESTRUCTURA OBLIGATORIA
═══════════════════════════════════════════════════════════════

El contenido DEBE incluir:
1. Introducción con gancho + palabra clave
2. Mínimo 4-5 secciones H2
3. Al menos 2 listas (ul o ol)
4. Una sección de FAQ con 3-4 preguntas
5. Blockquote con cita inspiracional
6. Conclusión con CTA
7. Referencias a "CEO Junior" cuando sea natural

═══════════════════════════════════════════════════════════════
                    FORMATO DE RESPUESTA JSON
═══════════════════════════════════════════════════════════════

{
  "es": {
    "title": "Título SEO optimizado (máx 60 chars, con palabra clave)",
    "excerpt": "2-3 oraciones que resuman el valor del artículo con palabra clave",
    "content": "<p>Contenido HTML completo optimizado para SEO...</p>",
    "metaDescription": "Meta descripción 150-160 chars con palabra clave y CTA",
    "readTime": "${length.readTime}"
  },
  "en": {
    "title": "SEO optimized title in English (max 60 chars)",
    "excerpt": "2-3 sentences summarizing the article value",
    "content": "<p>Full SEO-optimized HTML content in English...</p>",
    "metaDescription": "Meta description 150-160 chars with keyword and CTA",
    "readTime": "${length.readTime}"
  },
  "suggestedSlug": "keyword-based-slug"
}

REGLAS FINALES:
- Responde SOLO con JSON válido, sin texto adicional
- El contenido en inglés es traducción profesional adaptada al mercado angloparlante
- NO uses <h1> (el título va separado)
- Mínimo 1500 palabras en el contenido
- El JSON debe ser válido y parseable`;
}

async function generateWithGemini(prompt: string): Promise<GeneratedContent> {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY not configured');
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
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
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 16384,
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
