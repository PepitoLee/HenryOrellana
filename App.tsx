import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { BlogProvider } from './context/BlogContext';
import { SEOProvider } from './components/SEO/SEOProvider';
import { HubPage } from './pages/HubPage';
import { UsalatinoPrime } from './pages/UsalatinoPrime';
import { StarbizAcademy } from './pages/StarbizAcademy';

// Admin imports
import { AdminAuthProvider } from './admin/context/AdminAuthContext';
import { AdminLayout } from './admin/components/AdminLayout';
import { AdminLogin } from './admin/pages/AdminLogin';
import { AdminDashboard } from './admin/pages/AdminDashboard';
import { AdminPostList } from './admin/pages/AdminPostList';
import { AdminPostNew } from './admin/pages/AdminPostNew';
import { AdminPostEdit } from './admin/pages/AdminPostEdit';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <SEOProvider>
      <LanguageProvider>
        <BlogProvider>
          <AdminAuthProvider>
            <Router>
              <ScrollToTop />
              <Routes>
                {/* Hub */}
                <Route path="/" element={<HubPage />} />

                {/* Brand Pages */}
                <Route path="/usalatino-prime" element={<UsalatinoPrime />} />
                <Route path="/starbiz-academy" element={<StarbizAcademy />} />

                {/* Redirects for old routes */}
                <Route path="/ceo-junior" element={<Navigate to="/starbiz-academy" replace />} />
                <Route path="/metodologia" element={<Navigate to="/starbiz-academy" replace />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="posts" element={<AdminPostList />} />
                  <Route path="posts/new" element={<AdminPostNew />} />
                  <Route path="posts/:id/edit" element={<AdminPostEdit />} />
                </Route>

                {/* Everything else → Hub */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </AdminAuthProvider>
        </BlogProvider>
      </LanguageProvider>
    </SEOProvider>
  );
};

export default App;
