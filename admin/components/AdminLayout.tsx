import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  LogOut,
  Settings,
  ChevronRight,
  Sparkles,
  Loader2
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';

const navItems = [
  { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { path: '/admin/posts', icon: FileText, label: 'Artículos', exact: false },
  { path: '/admin/posts/new', icon: PlusCircle, label: 'Nuevo Artículo', exact: true },
];

export const AdminLayout: React.FC = () => {
  const { user, adminProfile, isLoading, signOut } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/admin/login');
    }
  }, [user, isLoading, navigate]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-forest" />
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const isActive = (path: string, exact: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-72 bg-charcoal text-white flex flex-col fixed h-full">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-forest rounded-sm flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <span className="font-display text-lg block leading-tight">Henry Orellana</span>
              <span className="text-[10px] text-white/50 uppercase tracking-wider">Panel Admin</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.path, item.exact);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-sm transition-all
                      ${active
                        ? 'bg-forest text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    <item.icon size={18} />
                    <span className="font-sans text-sm">{item.label}</span>
                    {active && <ChevronRight size={16} className="ml-auto" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">
                {adminProfile?.full_name?.charAt(0) || 'A'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {adminProfile?.full_name || 'Admin'}
              </p>
              <p className="text-[10px] text-white/50 uppercase tracking-wider">
                {adminProfile?.role || 'admin'}
              </p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-white/70 hover:bg-white/5 hover:text-white transition-all"
          >
            <LogOut size={18} />
            <span className="font-sans text-sm">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-warm-grey">
              <Link to="/admin" className="hover:text-forest transition-colors">
                Admin
              </Link>
              {location.pathname !== '/admin' && (
                <>
                  <ChevronRight size={14} />
                  <span className="text-charcoal">
                    {location.pathname.includes('/posts/new')
                      ? 'Nuevo Artículo'
                      : location.pathname.includes('/posts/')
                        ? 'Editar Artículo'
                        : location.pathname.includes('/posts')
                          ? 'Artículos'
                          : 'Página'
                    }
                  </span>
                </>
              )}
            </div>

            <Link
              to="/"
              target="_blank"
              className="text-sm text-forest hover:text-charcoal transition-colors flex items-center gap-1"
            >
              Ver sitio →
            </Link>
          </div>
        </header>

        {/* Page content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
