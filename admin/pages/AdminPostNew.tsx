import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Save,
  Eye,
  Image as ImageIcon,
  Globe,
  Loader2,
  ArrowLeft,
  X
} from 'lucide-react';
import { AIGeneratorPanel } from '../components/PostEditor/AIGeneratorPanel';
import { blogService } from '../../services/blogService';

interface PostFormData {
  slug: string;
  image: string;
  status: 'draft' | 'published';
  featured: boolean;
  categories: string[];
  translations: {
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
  };
}

const defaultFormData: PostFormData = {
  slug: '',
  image: '/images/blog-destacado.png',
  status: 'draft',
  featured: false,
  categories: [],
  translations: {
    es: { title: '', excerpt: '', content: '', metaDescription: '', readTime: '5 min' },
    en: { title: '', excerpt: '', content: '', metaDescription: '', readTime: '5 min' },
  },
};

const categoriesData = [
  { id: 'familia', name: 'Familia' },
  { id: 'genesis-i7', name: 'GÉNESIS i7' },
  { id: 'emprendimiento', name: 'Emprendimiento' },
  { id: 'herramientas', name: 'Herramientas' },
  { id: 'crianza', name: 'Crianza' },
  { id: 'tecnologia', name: 'Tecnología' },
  { id: 'tendencias', name: 'Tendencias' },
];

export const AdminPostNew: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PostFormData>(defaultFormData);
  const [activeTab, setActiveTab] = useState<'es' | 'en'>('es');
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-generate slug from Spanish title
  useEffect(() => {
    if (formData.translations.es.title && !formData.slug) {
      const slug = formData.translations.es.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.translations.es.title]);

  const handleAIContentGenerated = (content: any) => {
    setFormData((prev) => ({
      ...prev,
      slug: content.suggestedSlug || prev.slug,
      translations: {
        es: {
          title: content.es.title,
          excerpt: content.es.excerpt,
          content: content.es.content,
          metaDescription: content.es.metaDescription,
          readTime: content.es.readTime,
        },
        en: {
          title: content.en.title,
          excerpt: content.en.excerpt,
          content: content.en.content,
          metaDescription: content.en.metaDescription,
          readTime: content.en.readTime,
        },
      },
    }));
  };

  const handleTranslationChange = (
    lang: 'es' | 'en',
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: {
          ...prev.translations[lang],
          [field]: value,
        },
      },
    }));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((c) => c !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  const handleSave = async (publish: boolean = false) => {
    if (!formData.translations.es.title || !formData.translations.en.title) {
      setError('Por favor completa el título en ambos idiomas');
      return;
    }

    if (formData.categories.length === 0) {
      setError('Por favor selecciona al menos una categoría');
      return;
    }

    setSaving(true);
    setError(null);

    try {
      await blogService.createPost({
        ...formData,
        status: publish ? 'published' : 'draft',
      });

      navigate('/admin/posts');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar el artículo');
    } finally {
      setSaving(false);
    }
  };

  const currentTranslation = formData.translations[activeTab];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/admin/posts')}
            className="p-2 text-warm-grey hover:text-charcoal hover:bg-gray-100 rounded-sm transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="font-display text-3xl text-charcoal">Nuevo Artículo</h1>
            <p className="text-warm-grey mt-1">
              Crea un nuevo artículo para el blog
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Eye size={18} />
            {previewMode ? 'Editar' : 'Vista previa'}
          </button>
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 border border-forest text-forest rounded-sm hover:bg-forest/5 transition-colors disabled:opacity-50"
          >
            <Save size={18} />
            Guardar borrador
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2 bg-forest text-white rounded-sm hover:bg-charcoal transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Eye size={18} />}
            Publicar
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)}>
            <X size={18} />
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Generator */}
          <AIGeneratorPanel
            onContentGenerated={handleAIContentGenerated}
            categories={categoriesData}
          />

          {/* Language Tabs */}
          <div className="bg-white rounded-sm border border-gray-200">
            <div className="flex border-b border-gray-200">
              {(['es', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`flex items-center gap-2 px-6 py-4 font-sans text-sm uppercase tracking-wider transition-colors ${
                    activeTab === lang
                      ? 'text-forest border-b-2 border-forest bg-forest/5'
                      : 'text-warm-grey hover:text-charcoal'
                  }`}
                >
                  <Globe size={16} />
                  {lang === 'es' ? 'Español' : 'English'}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={currentTranslation.title}
                  onChange={(e) =>
                    handleTranslationChange(activeTab, 'title', e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                  placeholder={activeTab === 'es' ? 'Título del artículo' : 'Article title'}
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Extracto
                </label>
                <textarea
                  value={currentTranslation.excerpt}
                  onChange={(e) =>
                    handleTranslationChange(activeTab, 'excerpt', e.target.value)
                  }
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest resize-none"
                  placeholder={activeTab === 'es' ? 'Breve descripción del artículo...' : 'Brief article description...'}
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Contenido (HTML)
                </label>
                {previewMode ? (
                  <div
                    className="prose prose-charcoal max-w-none p-4 border border-gray-200 rounded-sm bg-gray-50 min-h-[300px]"
                    dangerouslySetInnerHTML={{ __html: currentTranslation.content }}
                  />
                ) : (
                  <textarea
                    value={currentTranslation.content}
                    onChange={(e) =>
                      handleTranslationChange(activeTab, 'content', e.target.value)
                    }
                    rows={15}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest font-mono text-sm"
                    placeholder="<p>Contenido del artículo en HTML...</p>"
                  />
                )}
              </div>

              {/* Meta Description */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Meta Descripción (SEO)
                </label>
                <textarea
                  value={currentTranslation.metaDescription}
                  onChange={(e) =>
                    handleTranslationChange(activeTab, 'metaDescription', e.target.value)
                  }
                  rows={2}
                  maxLength={160}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest resize-none"
                  placeholder="Descripción para motores de búsqueda (máx. 160 caracteres)"
                />
                <p className="text-xs text-warm-grey mt-1">
                  {currentTranslation.metaDescription.length}/160 caracteres
                </p>
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Tiempo de lectura
                </label>
                <input
                  type="text"
                  value={currentTranslation.readTime}
                  onChange={(e) =>
                    handleTranslationChange(activeTab, 'readTime', e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
                  placeholder="5 min"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Slug */}
          <div className="bg-white rounded-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-charcoal mb-2">
              URL (Slug)
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
              placeholder="url-del-articulo"
            />
            <p className="text-xs text-warm-grey mt-2">
              /blog/{formData.slug || 'url-del-articulo'}
            </p>
          </div>

          {/* Image */}
          <div className="bg-white rounded-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-charcoal mb-2">
              Imagen destacada
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-sm p-4 text-center">
              {formData.image ? (
                <div className="relative">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-sm"
                  />
                  <button
                    onClick={() => setFormData((prev) => ({ ...prev, image: '' }))}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="py-8">
                  <ImageIcon size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-warm-grey">Sube una imagen</p>
                </div>
              )}
            </div>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
              className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
              placeholder="/images/blog-imagen.png"
            />
          </div>

          {/* Categories */}
          <div className="bg-white rounded-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-charcoal mb-4">
              Categorías
            </label>
            <div className="space-y-2">
              {categoriesData.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.categories.includes(cat.id)}
                    onChange={() => handleCategoryToggle(cat.id)}
                    className="w-4 h-4 text-forest border-gray-300 rounded focus:ring-forest"
                  />
                  <span className="text-sm text-charcoal">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Featured */}
          <div className="bg-white rounded-sm border border-gray-200 p-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, featured: e.target.checked }))
                }
                className="w-4 h-4 text-forest border-gray-300 rounded focus:ring-forest"
              />
              <div>
                <span className="text-sm font-medium text-charcoal block">
                  Artículo destacado
                </span>
                <span className="text-xs text-warm-grey">
                  Aparecerá en la parte superior del blog
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
