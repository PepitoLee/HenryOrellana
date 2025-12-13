import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Sparkles, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';

export const AdminLogin: React.FC = () => {
  const { user, isAdmin, isLoading, signIn } = useAdminAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // If already logged in and is admin, redirect to dashboard
  if (!isLoading && user && isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-forest" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-charcoal text-white flex-col justify-between p-12">
        <div>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-12 bg-forest rounded-sm flex items-center justify-center">
              <Sparkles size={24} />
            </div>
            <div>
              <span className="font-display text-2xl block">Henry Orellana</span>
              <span className="text-xs text-white/50 uppercase tracking-wider">Panel de Administración</span>
            </div>
          </div>

          <h1 className="font-display text-5xl leading-tight mb-6">
            Gestiona tu contenido con <span className="text-forest italic">inteligencia</span>
          </h1>

          <p className="text-white/70 text-lg max-w-md">
            Crea artículos de blog con asistencia de IA, gestiona publicaciones
            y mantén tu audiencia conectada.
          </p>
        </div>

        <div className="text-white/40 text-sm">
          © {new Date().getFullYear()} Henry Orellana D. Todos los derechos reservados.
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-12 justify-center">
            <div className="w-10 h-10 bg-forest rounded-sm flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="font-display text-xl text-charcoal">Henry Orellana</span>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-lg">
            <h2 className="font-display text-3xl text-charcoal mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-warm-grey mb-8">
              Ingresa tus credenciales para acceder al panel
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors"
                  placeholder="admin@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-grey hover:text-charcoal transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-forest text-white py-4 rounded-sm font-sans text-sm uppercase tracking-wider hover:bg-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Ingresando...
                  </>
                ) : (
                  'Ingresar'
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-warm-grey text-sm mt-8">
            <a href="/" className="text-forest hover:underline">
              ← Volver al sitio principal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
