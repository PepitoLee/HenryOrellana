import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Eye,
  Edit3,
  PlusCircle,
  TrendingUp,
  Clock,
  Sparkles
} from 'lucide-react';
import { blogService } from '../../services/blogService';
import type { BlogPostWithTranslations } from '../../types/database.types';

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({ published: 0, drafts: 0, total: 0 });
  const [recentPosts, setRecentPosts] = useState<BlogPostWithTranslations[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsData, postsData] = await Promise.all([
          blogService.getStats(),
          blogService.getAllPosts(),
        ]);
        setStats(statsData);
        setRecentPosts(postsData.slice(0, 5));
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const statCards = [
    {
      label: 'Publicados',
      value: stats.published,
      icon: Eye,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Borradores',
      value: stats.drafts,
      icon: Edit3,
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50',
    },
    {
      label: 'Total Artículos',
      value: stats.total,
      icon: FileText,
      color: 'bg-forest',
      bgColor: 'bg-blue-50',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-charcoal">Dashboard</h1>
          <p className="text-warm-grey mt-1">Bienvenido al panel de administración</p>
        </div>
        <Link
          to="/admin/posts/new"
          className="flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-sm font-sans text-sm uppercase tracking-wider hover:bg-charcoal transition-colors"
        >
          <PlusCircle size={18} />
          Nuevo Artículo
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bgColor} p-6 rounded-sm border border-gray-100`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-warm-grey text-sm mb-1">{stat.label}</p>
                <p className="font-display text-4xl text-charcoal">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-12 h-12 rounded-sm flex items-center justify-center`}>
                <stat.icon size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/admin/posts/new"
          className="bg-white p-6 rounded-sm border border-gray-200 hover:border-forest hover:shadow-md transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-forest/10 rounded-sm flex items-center justify-center group-hover:bg-forest transition-colors">
              <Sparkles size={24} className="text-forest group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-1">
                Crear con IA
              </h3>
              <p className="text-warm-grey text-sm">
                Genera un nuevo artículo usando inteligencia artificial
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/admin/posts"
          className="bg-white p-6 rounded-sm border border-gray-200 hover:border-forest hover:shadow-md transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-forest/10 rounded-sm flex items-center justify-center group-hover:bg-forest transition-colors">
              <FileText size={24} className="text-forest group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal mb-1">
                Ver Artículos
              </h3>
              <p className="text-warm-grey text-sm">
                Gestiona todos tus artículos publicados y borradores
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-charcoal">Artículos Recientes</h2>
            <Link to="/admin/posts" className="text-forest text-sm hover:underline">
              Ver todos →
            </Link>
          </div>
        </div>

        {recentPosts.length === 0 ? (
          <div className="p-12 text-center">
            <FileText size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-warm-grey">No hay artículos aún</p>
            <Link
              to="/admin/posts/new"
              className="text-forest hover:underline text-sm mt-2 inline-block"
            >
              Crear tu primer artículo →
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {recentPosts.map((post) => (
              <div key={post.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <img
                    src={post.image}
                    alt={post.translations.es.title}
                    className="w-16 h-16 object-cover rounded-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-charcoal truncate">
                      {post.translations.es.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-warm-grey">
                      <span className={`px-2 py-0.5 rounded-sm text-xs ${
                        post.status === 'published'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {post.status === 'published' ? 'Publicado' : 'Borrador'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {new Date(post.publishedAt).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/admin/posts/${post.id}/edit`}
                    className="text-forest hover:text-charcoal transition-colors"
                  >
                    <Edit3 size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
