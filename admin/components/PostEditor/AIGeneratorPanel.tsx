import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw, Check, AlertCircle } from 'lucide-react';
import { blogService } from '../../../services/blogService';

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

interface AIGeneratorPanelProps {
  onContentGenerated: (content: GeneratedContent) => void;
  categories: { id: string; name: string }[];
}

export const AIGeneratorPanel: React.FC<AIGeneratorPanelProps> = ({
  onContentGenerated,
  categories,
}) => {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');
  const [tone, setTone] = useState<'formal' | 'conversational' | 'inspirational'>('inspirational');
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim() || !category) {
      setError('Por favor completa el tema y selecciona una categoría');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setSuccess(false);

    try {
      const content = await blogService.generateContent({
        topic,
        category,
        tone,
        targetLength: length,
      });

      onContentGenerated(content);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al generar contenido');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center">
          <Sparkles size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-display text-xl text-charcoal">Generar con IA</h3>
          <p className="text-sm text-warm-grey">Powered by Gemini</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Topic */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Tema o tópico del artículo
          </label>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ej: Cómo establecer límites saludables con la tecnología en familia sin generar conflictos"
            className="w-full p-3 border border-amber-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 bg-white resize-none"
            rows={3}
          />
          <p className="text-xs text-warm-grey mt-1">
            Sé específico para obtener mejores resultados
          </p>
        </div>

        {/* Category & Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Categoría
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-amber-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
            >
              <option value="">Seleccionar...</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Tono
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as any)}
              className="w-full p-3 border border-amber-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
            >
              <option value="formal">Formal</option>
              <option value="conversational">Conversacional</option>
              <option value="inspirational">Inspiracional</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Longitud
            </label>
            <select
              value={length}
              onChange={(e) => setLength(e.target.value as any)}
              className="w-full p-3 border border-amber-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
            >
              <option value="short">Corto (~5 min lectura)</option>
              <option value="medium">Medio (~8 min lectura)</option>
              <option value="long">Largo (~12 min lectura)</option>
            </select>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-sm text-emerald-700 text-sm">
            <Check size={16} />
            ¡Contenido generado exitosamente! Revisa y edita si es necesario.
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !topic.trim() || !category}
          className="w-full bg-amber-500 text-white py-4 rounded-sm font-sans text-sm uppercase tracking-wider hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Generando contenido...
            </>
          ) : (
            <>
              <Sparkles size={18} />
              Generar Artículo
            </>
          )}
        </button>

        {isGenerating && (
          <p className="text-center text-sm text-warm-grey">
            Esto puede tomar 15-30 segundos...
          </p>
        )}
      </div>
    </div>
  );
};
