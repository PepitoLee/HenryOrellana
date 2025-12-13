import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlusCircle,
  Search,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  Star,
  StarOff,
  MoreVertical,
  Clock,
  Filter
} from 'lucide-react';
import { blogService } from '../../services/blogService';
import type { BlogPostWithTranslations } from '../../types/database.types';

export const AdminPostList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostWithTranslations[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostWithTranslations[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    let result = posts;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.translations.es.title.toLowerCase().includes(query) ||
          post.translations.en.title.toLowerCase().includes(query)
      );
    }

    if (statusFilter !== 'all') {
      result = result.filter((post) => post.status === statusFilter);
    }

    setFilteredPosts(result);
  }, [posts, searchQuery, statusFilter]);

  const loadPosts = async () => {
    try {
      const data = await blogService.getAllPosts();
      setPosts(data);
      setFilteredPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este artículo? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      await blogService.deletePost(id);
      await loadPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error al eliminar el artículo');
    }
    setActiveMenu(null);
  };

  const handleTogglePublish = async (post: BlogPostWithTranslations) => {
    try {
      if (post.status === 'published') {
        await blogService.unpublishPost(post.id);
      } else {
        await blogService.publishPost(post.id);
      }
      await loadPosts();
    } catch (error) {
      console.error('Error toggling publish:', error);
      alert('Error al cambiar el estado del artículo');
    }
    setActiveMenu(null);
  };

  const handleToggleFeatured = async (post: BlogPostWithTranslations) => {
    try {
      await blogService.toggleFeatured(post.id, !post.featured);
      await loadPosts();
    } catch (error) {
      console.error('Error toggling featured:', error);
      alert('Error al cambiar el estado destacado');
    }
    setActiveMenu(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-charcoal">Artículos</h1>
          <p className="text-warm-grey mt-1">
            {posts.length} artículo{posts.length !== 1 ? 's' : ''} en total
          </p>
        </div>
        <Link
          to="/admin/posts/new"
          className="flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-sm font-sans text-sm uppercase tracking-wider hover:bg-charcoal transition-colors"
        >
          <PlusCircle size={18} />
          Nuevo Artículo
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest"
          >
            <option value="all">Todos</option>
            <option value="published">Publicados</option>
            <option value="draft">Borradores</option>
          </select>
        </div>
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white p-12 rounded-sm border border-gray-200 text-center">
          <p className="text-warm-grey">No se encontraron artículos</p>
        </div>
      ) : (
        <div className="bg-white rounded-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-medium text-warm-grey uppercase tracking-wider">
                  Artículo
                </th>
                <th className="text-left px-6 py-4 text-xs font-medium text-warm-grey uppercase tracking-wider">
                  Estado
                </th>
                <th className="text-left px-6 py-4 text-xs font-medium text-warm-grey uppercase tracking-wider">
                  Fecha
                </th>
                <th className="text-right px-6 py-4 text-xs font-medium text-warm-grey uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={post.image}
                        alt={post.translations.es.title}
                        className="w-16 h-12 object-cover rounded-sm"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-charcoal truncate max-w-md">
                            {post.translations.es.title}
                          </h3>
                          {post.featured && (
                            <Star size={14} className="text-amber-500 fill-amber-500 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-warm-grey truncate max-w-md">
                          {post.translations.es.excerpt}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-sm text-xs font-medium ${
                        post.status === 'published'
                          ? 'bg-emerald-100 text-emerald-700'
                          : post.status === 'draft'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {post.status === 'published'
                        ? 'Publicado'
                        : post.status === 'draft'
                        ? 'Borrador'
                        : 'Archivado'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-warm-grey">
                      <Clock size={14} />
                      {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 relative">
                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        className="p-2 text-warm-grey hover:text-forest hover:bg-forest/10 rounded-sm transition-colors"
                        title="Editar"
                      >
                        <Edit3 size={18} />
                      </Link>

                      <button
                        onClick={() => setActiveMenu(activeMenu === post.id ? null : post.id)}
                        className="p-2 text-warm-grey hover:text-forest hover:bg-forest/10 rounded-sm transition-colors"
                      >
                        <MoreVertical size={18} />
                      </button>

                      {activeMenu === post.id && (
                        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-sm shadow-lg z-10 min-w-[180px]">
                          <button
                            onClick={() => handleTogglePublish(post)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-50"
                          >
                            {post.status === 'published' ? (
                              <>
                                <EyeOff size={16} />
                                Despublicar
                              </>
                            ) : (
                              <>
                                <Eye size={16} />
                                Publicar
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleToggleFeatured(post)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-50"
                          >
                            {post.featured ? (
                              <>
                                <StarOff size={16} />
                                Quitar destacado
                              </>
                            ) : (
                              <>
                                <Star size={16} />
                                Destacar
                              </>
                            )}
                          </button>
                          <hr className="my-1" />
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                            Eliminar
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
