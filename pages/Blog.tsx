import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { useBlog } from '../context/BlogContext';
import { BlogSearch } from '../components/Blog/BlogSearch';
import { CategoryFilter } from '../components/Blog/CategoryFilter';
import { BlogCard } from '../components/Blog/BlogCard';
import { SEOHead } from '../components/SEO/SEOHead';
import { getFeaturedPost } from '../data/blogPosts';
import { categories } from '../data/categories';
import { formatDate } from '../utils/blogUtils';

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const { filteredPosts, searchQuery, selectedCategory } = useBlog();

  const featuredPost = getFeaturedPost();
  const featuredTranslation = featuredPost?.translations[language];
  const featuredCategory = featuredPost
    ? categories.find(c => c.id === featuredPost.categories[0])
    : null;

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'all';
  const noResults = filteredPosts.length === 0 && hasActiveFilters;

  return (
    <>
      <SEOHead
        title={t('blog.title')}
        description={t('blog.subtitle')}
        url="/blog"
      />

      <div className="w-full pt-32 pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-4">
              {t('blog.title')}
            </h1>
            <p className="font-body text-warm-grey max-w-2xl">
              {t('blog.subtitle')}
            </p>
          </Reveal>
        </div>

        {/* Search & Filters */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <Reveal delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-gray-200">
              <CategoryFilter />
              <BlogSearch />
            </div>
          </Reveal>
        </div>

        {/* Featured Article (only show when no filters active) */}
        {!hasActiveFilters && featuredPost && featuredTranslation && (
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <Reveal width="100%">
              <Link to={`/blog/${featuredPost.slug}`} className="block group">
                <div className="relative aspect-[21/9] w-full overflow-hidden mb-8">
                  <img
                    src={featuredPost.image}
                    alt={featuredTranslation.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 bg-burgundy text-white px-3 py-1 text-xs font-sans uppercase tracking-wider">
                    {language === 'es' ? 'Destacado' : 'Featured'}
                  </div>
                </div>
                <div className="max-w-3xl">
                  <div className="flex gap-4 text-xs font-sans uppercase tracking-widest text-forest mb-3">
                    <span>{featuredCategory?.translations[language]}</span>
                    <span>•</span>
                    <span>{formatDate(featuredPost.publishedAt, language)}</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4 group-hover:text-forest transition-colors">
                    {featuredTranslation.title}
                  </h2>
                  <p className="font-body text-lg text-warm-grey mb-6">
                    {featuredTranslation.excerpt}
                  </p>
                  <span className="font-sans text-sm font-bold uppercase tracking-wide border-b border-charcoal pb-1 group-hover:text-forest group-hover:border-forest transition-colors">
                    {t('blog.readMore')}
                  </span>
                </div>
              </Link>
            </Reveal>
          </section>
        )}

        {/* Results Count (when filtering) */}
        {hasActiveFilters && (
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <Reveal>
              <p className="font-sans text-sm text-warm-grey">
                {filteredPosts.length}{' '}
                {language === 'es'
                  ? filteredPosts.length === 1
                    ? 'articulo encontrado'
                    : 'articulos encontrados'
                  : filteredPosts.length === 1
                  ? 'article found'
                  : 'articles found'}
              </p>
            </Reveal>
          </div>
        )}

        {/* No Results Message */}
        {noResults && (
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <Reveal>
              <p className="font-display text-2xl text-charcoal mb-4">
                {language === 'es'
                  ? 'No se encontraron articulos'
                  : 'No articles found'}
              </p>
              <p className="font-body text-warm-grey">
                {language === 'es'
                  ? 'Intenta con otros terminos de busqueda o categorias'
                  : 'Try different search terms or categories'}
              </p>
            </Reveal>
          </div>
        )}

        {/* Article Grid */}
        {filteredPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.id} post={post} index={idx} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};
