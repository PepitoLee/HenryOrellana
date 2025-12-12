import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPostBySlug, formatDate } from '../utils/blogUtils';
import { categories } from '../data/categories';
import { SEOHead } from '../components/SEO/SEOHead';
import { ArticleSchema } from '../components/SEO/ArticleSchema';
import { Reveal } from '../components/Reveal';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const translation = post.translations[language];
  const category = categories.find(c => c.id === post.categories[0]);

  return (
    <>
      <SEOHead
        title={translation.title}
        description={translation.metaDescription}
        image={post.image}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedAt}
        author={post.author}
        section={category?.translations[language]}
      />
      <ArticleSchema
        title={translation.title}
        description={translation.metaDescription}
        image={post.image}
        url={`/blog/${post.slug}`}
        publishedDate={post.publishedAt}
        authorName={post.author}
      />

      <article className="w-full pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-warm-grey hover:text-forest mb-8 font-sans text-sm transition-colors"
            >
              <ArrowLeft size={16} />
              {language === 'es' ? 'Volver al Blog' : 'Back to Blog'}
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal delay={0.1}>
            <header className="mb-10">
              {/* Category */}
              <span className={`inline-block text-xs font-sans font-semibold uppercase tracking-wider mb-4 ${category?.color || 'bg-forest/10 text-forest'} px-3 py-1 rounded-sm`}>
                {category?.translations[language]}
              </span>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                {translation.title}
              </h1>

              {/* Excerpt */}
              <p className="font-body text-xl text-warm-grey leading-relaxed mb-6">
                {translation.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-sm font-sans text-warm-grey">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{formatDate(post.publishedAt, language)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{translation.readTime} {t('blog.readTime')}</span>
                </div>
              </div>
            </header>
          </Reveal>

          {/* Featured Image */}
          <Reveal delay={0.2}>
            <div className="aspect-[16/9] overflow-hidden rounded-sm mb-12">
              <img
                src={post.image}
                alt={translation.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.3}>
            <div
              className="prose prose-lg max-w-none font-body
                prose-headings:font-display prose-headings:text-charcoal
                prose-p:text-warm-grey prose-p:leading-relaxed
                prose-a:text-forest prose-a:no-underline hover:prose-a:underline
                prose-strong:text-charcoal
                prose-blockquote:border-l-forest prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:text-warm-grey prose-blockquote:italic prose-blockquote:not-italic
                prose-ul:text-warm-grey prose-li:text-warm-grey
                prose-img:rounded-sm"
              dangerouslySetInnerHTML={{ __html: translation.content }}
            />
          </Reveal>

          {/* Author Card */}
          <Reveal delay={0.4}>
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
                  <User size={28} className="text-forest" />
                </div>
                <div>
                  <p className="font-sans text-xs text-warm-grey uppercase tracking-wider mb-1">
                    {language === 'es' ? 'Escrito por' : 'Written by'}
                  </p>
                  <p className="font-display text-xl text-charcoal">{post.author}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Back to Blog CTA */}
          <Reveal delay={0.5}>
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-sm font-sans text-sm uppercase tracking-wider hover:bg-charcoal transition-colors"
              >
                <ArrowLeft size={16} />
                {language === 'es' ? 'Ver mas articulos' : 'View more articles'}
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
};
