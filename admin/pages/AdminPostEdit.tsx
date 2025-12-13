import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Save,
  Eye,
  Image as ImageIcon,
  Globe,
  Loader2,
  ArrowLeft,
  X,
  Trash2
} from 'lucide-react';
import { blogService } from '../../services/blogService';
import type { BlogPostWithTranslations } from '../../types/database.types';

export const AdminPostEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<BlogPostWithTranslations | null>(null);
  const [activeTab, setActiveTab] = useState<'es' | 'en'>('es');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categoriesData = [
    { id: 'familia', name: 'Familia' },
    { id: 'genesis-i7', name: 'GÉNESIS i7' },
    { id: 'emprendimiento', name: 'Emprendimiento' },
    { id: 'herramientas', name: 'Herramientas' },
    { id: 'crianza', name: 'Crianza' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'tendencias', name: 'Tendencias' },
  ];

  useEffect(() => {
    const loadPost = async () => {
      if (!id) return;

      try {
        const posts = await blogService.getAllPosts();
        const foundPost = posts.find(p => p.id === id);
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Artículo no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el artículo');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  const handleTranslationChange = (
    lang: 'es' | 'en',
    field: string,
    value: string
  ) => {
    if (!post) return;
    setPost({
      ...post,
      translations: {
        ...post.translations,
        [lang]: {
          ...post.translations[lang],
          [field]: value,
        },
      },
    });
  };

  const handleCategoryToggle = (categoryId: string) => {
    if (!post) return;
    setPost({
      ...post,
      categories: post.categories.includes(categoryId)
        ? post.categories.filter((c) => c !== categoryId)
        : [...post.categories, categoryId],
    });
  };

  const handleSave = async (publish: boolean = false) => {
    if (!post || !id) return;

    if (!post.translations.es.title || !post.translations.en.title) {
      setError('Por favor completa el título en ambos idiomas');
      return;
    }

    setSaving(true);
    setError(null);

    try {
      await blogService.updatePost(id, {
        slug: post.slug,
        image: post.image,
        featured: post.featured,
        status: publish ? 'published' : post.status,
        categories: post.categories,
        translations: {
          es: {
            title: post.translations.es.title,
            excerpt: post.translations.es.excerpt,
            content: post.translations.es.content,
            metaDescription: post.translations.es.metaDescription,
            readTime: post.translations.es.readTime,
          },
          en: {
            title: post.translations.en.title,
            excerpt: post.translations.en.excerpt,
            content: post.translations.en.content,
            metaDescription: post.translations.en.metaDescription,
            readTime: post.translations.en.readTime,
          },
        },
      });

      navigate('/admin/posts');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar el artículo');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!id || !confirm('¿Estás seguro de eliminar este artículo?')) return;

    try {
      await blogService.deletePost(id);
      navigate('/admin/posts');
    } catch (err) {
      setError('Error al eliminar el artículo');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-forest" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-warm-grey">Artículo no encontrado</p>
        <button
          onClick={() => navigate('/admin/posts')}
          className="mt-4 text-forest hover:underline"
        >
          Volver a artículos
        </button>
      </div>
    );
  }

  const currentTranslation = post.translations[activeTab];

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
            <h1 className="font-display text-3xl text-charcoal">Editar Artículo</h1>
            <p className="text-warm-grey mt-1">{post.translations.es.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-sm transition-colors"
          >
            <Trash2 size={18} />
          </button>
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
            Guardar
          </button>
          {post.status !== 'published' && (
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2 bg-forest text-white rounded-sm hover:bg-charcoal transition-colors disabled:opacity-50"
            >
              {saving ? <Loader2 size={18} className="animate-spin" /> : <Eye size={18} />}
              Publicar
            </button>
          )}
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
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-charcoal mb-2">
              Estado
            </label>
            <span
              className={`inline-block px-3 py-1 rounded-sm text-sm font-medium ${
                post.status === 'published'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}
            >
              {post.status === 'published' ? 'Publicado' : 'Borrador'}
            </span>
          </div>

          {/* Slug */}
          <div className="bg-white rounded-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-charcoal mb-2">
              URL (Slug)
            </label>
            <input
              type="text"
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
            />
            <p className="text-xs text-warm-grey mt-2">
              /blog/{post.slug}
            </p>
          </div>

          {/* Image */}
          <div className="bg-white rounded-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-charcoal mb-2">
              Imagen destacada
            </label>
            {post.image && (
              <img
                src={post.image}
                alt="Preview"
                className="w-full h-40 object-cover rounded-sm mb-3"
              />
            )}
            <input
              type="text"
              value={post.image}
              onChange={(e) => setPost({ ...post, image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
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
                    checked={post.categories.includes(cat.id)}
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
                checked={post.featured}
                onChange={(e) => setPost({ ...post, featured: e.target.checked })}
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
