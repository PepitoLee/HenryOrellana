-- =====================================================
-- HENRY ORELLANA BLOG - SUPABASE SCHEMA
-- =====================================================
-- Ejecutar este script en el SQL Editor de Supabase
-- Dashboard > SQL Editor > New Query > Pegar y Run
-- =====================================================

-- 1. TABLA DE POSTS
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  image VARCHAR(500) NOT NULL,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  author VARCHAR(255) NOT NULL DEFAULT 'Henry Orellana D.',
  featured BOOLEAN DEFAULT FALSE,
  status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLA DE TRADUCCIONES DE POSTS
CREATE TABLE IF NOT EXISTS blog_post_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  language VARCHAR(2) NOT NULL CHECK (language IN ('es', 'en')),
  title VARCHAR(500) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  meta_description VARCHAR(500) NOT NULL,
  read_time VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, language)
);

-- 3. TABLA DE CATEGORÍAS
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(50) PRIMARY KEY,
  color VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLA DE TRADUCCIONES DE CATEGORÍAS
CREATE TABLE IF NOT EXISTS category_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id VARCHAR(50) REFERENCES categories(id) ON DELETE CASCADE,
  language VARCHAR(2) NOT NULL CHECK (language IN ('es', 'en')),
  name VARCHAR(100) NOT NULL,
  UNIQUE(category_id, language)
);

-- 5. TABLA DE RELACIÓN POSTS-CATEGORÍAS
CREATE TABLE IF NOT EXISTS blog_post_categories (
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id VARCHAR(50) REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- 6. TABLA DE PERFILES DE ADMIN
CREATE TABLE IF NOT EXISTS admin_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name VARCHAR(255),
  role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. TABLA DE LOGS DE GENERACIÓN IA
CREATE TABLE IF NOT EXISTS ai_generation_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES blog_posts(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id),
  prompt_used TEXT NOT NULL,
  model_used VARCHAR(100) DEFAULT 'gemini-2.0-flash',
  tokens_used INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- ÍNDICES PARA OPTIMIZACIÓN
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured) WHERE featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_translations_post_id ON blog_post_translations(post_id);
CREATE INDEX IF NOT EXISTS idx_translations_language ON blog_post_translations(language);
CREATE INDEX IF NOT EXISTS idx_post_categories_post ON blog_post_categories(post_id);
CREATE INDEX IF NOT EXISTS idx_post_categories_category ON blog_post_categories(category_id);

-- =====================================================
-- TRIGGERS PARA ACTUALIZAR updated_at
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_translations_updated_at ON blog_post_translations;
CREATE TRIGGER update_translations_updated_at
  BEFORE UPDATE ON blog_post_translations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Habilitar RLS en todas las tablas
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_generation_logs ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS PARA blog_posts

-- Lectura pública para posts publicados
CREATE POLICY "Public can view published posts"
  ON blog_posts FOR SELECT
  USING (status = 'published');

-- Admins pueden ver todos los posts
CREATE POLICY "Admins can view all posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- Admins pueden insertar posts
CREATE POLICY "Admins can insert posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- Admins pueden actualizar posts
CREATE POLICY "Admins can update posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- Admins pueden eliminar posts
CREATE POLICY "Admins can delete posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- POLÍTICAS PARA blog_post_translations

CREATE POLICY "Public can view translations of published posts"
  ON blog_post_translations FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE blog_posts.id = blog_post_translations.post_id
      AND blog_posts.status = 'published'
    )
  );

CREATE POLICY "Admins can view all translations"
  ON blog_post_translations FOR SELECT
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

CREATE POLICY "Admins can insert translations"
  ON blog_post_translations FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

CREATE POLICY "Admins can update translations"
  ON blog_post_translations FOR UPDATE
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

CREATE POLICY "Admins can delete translations"
  ON blog_post_translations FOR DELETE
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- POLÍTICAS PARA categories (lectura pública)

CREATE POLICY "Public can view categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage categories"
  ON categories FOR ALL
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- POLÍTICAS PARA category_translations

CREATE POLICY "Public can view category translations"
  ON category_translations FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage category translations"
  ON category_translations FOR ALL
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- POLÍTICAS PARA blog_post_categories

CREATE POLICY "Public can view post categories"
  ON blog_post_categories FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE blog_posts.id = blog_post_categories.post_id
      AND blog_posts.status = 'published'
    )
  );

CREATE POLICY "Admins can view all post categories"
  ON blog_post_categories FOR SELECT
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

CREATE POLICY "Admins can manage post categories"
  ON blog_post_categories FOR ALL
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- POLÍTICAS PARA admin_profiles

CREATE POLICY "Admins can view admin profiles"
  ON admin_profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid());

CREATE POLICY "Admins can update own profile"
  ON admin_profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid());

-- POLÍTICAS PARA ai_generation_logs

CREATE POLICY "Admins can view ai logs"
  ON ai_generation_logs FOR SELECT
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

CREATE POLICY "Admins can insert ai logs"
  ON ai_generation_logs FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid())
  );

-- =====================================================
-- DATOS INICIALES: CATEGORÍAS
-- =====================================================

INSERT INTO categories (id, color) VALUES
  ('familia', 'bg-rose-100 text-rose-700'),
  ('genesis-i7', 'bg-amber-100 text-amber-700'),
  ('emprendimiento', 'bg-emerald-100 text-emerald-700'),
  ('herramientas', 'bg-blue-100 text-blue-700'),
  ('crianza', 'bg-purple-100 text-purple-700'),
  ('tecnologia', 'bg-cyan-100 text-cyan-700'),
  ('tendencias', 'bg-indigo-100 text-indigo-700')
ON CONFLICT (id) DO NOTHING;

INSERT INTO category_translations (category_id, language, name) VALUES
  ('familia', 'es', 'Familia'),
  ('familia', 'en', 'Family'),
  ('genesis-i7', 'es', 'GÉNESIS i7'),
  ('genesis-i7', 'en', 'GENESIS i7'),
  ('emprendimiento', 'es', 'Emprendimiento'),
  ('emprendimiento', 'en', 'Entrepreneurship'),
  ('herramientas', 'es', 'Herramientas'),
  ('herramientas', 'en', 'Tools'),
  ('crianza', 'es', 'Crianza'),
  ('crianza', 'en', 'Parenting'),
  ('tecnologia', 'es', 'Tecnología'),
  ('tecnologia', 'en', 'Technology'),
  ('tendencias', 'es', 'Tendencias'),
  ('tendencias', 'en', 'Trends')
ON CONFLICT (category_id, language) DO NOTHING;

-- =====================================================
-- FIN DEL SCRIPT
-- =====================================================
-- Después de ejecutar este script:
-- 1. Ve a Authentication > Users y crea tu usuario admin
-- 2. Copia el UUID del usuario
-- 3. Ejecuta: INSERT INTO admin_profiles (id, full_name, role) VALUES ('TU-UUID', 'Tu Nombre', 'admin');
-- =====================================================
