import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { BlogProvider } from './context/BlogContext';
import { SEOProvider } from './components/SEO/SEOProvider';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Books } from './pages/Books';
import { Speaking } from './pages/Speaking';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { CEOJunior } from './pages/CEOJunior';
import { Metodologia } from './pages/Metodologia';
import { UsalatinoPrime } from './pages/UsalatinoPrime';
import LandingPage from './src/landing/LandingPage';

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

// Public layout wrapper
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-cream font-sans text-charcoal selection:bg-forest selection:text-white flex flex-col">
    <Navigation />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <SEOProvider>
      <LanguageProvider>
        <BlogProvider>
          <AdminAuthProvider>
            <Router>
              <ScrollToTop />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
                <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
                <Route path="/books" element={<PublicLayout><Books /></PublicLayout>} />
                <Route path="/speaking" element={<PublicLayout><Speaking /></PublicLayout>} />
                <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
                <Route path="/blog/:slug" element={<PublicLayout><BlogPost /></PublicLayout>} />
                <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
                <Route path="/ceo-junior" element={<PublicLayout><CEOJunior /></PublicLayout>} />
                <Route path="/metodologia" element={<PublicLayout><Metodologia /></PublicLayout>} />
                <Route path="/usalatino-prime" element={<PublicLayout><UsalatinoPrime /></PublicLayout>} />

                {/* Landing Page - Independent (no PublicLayout) */}
                <Route path="/landingpage" element={<LandingPage />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="posts" element={<AdminPostList />} />
                  <Route path="posts/new" element={<AdminPostNew />} />
                  <Route path="posts/:id/edit" element={<AdminPostEdit />} />
                </Route>
              </Routes>
            </Router>
          </AdminAuthProvider>
        </BlogProvider>
      </LanguageProvider>
    </SEOProvider>
  );
};

export default App;
