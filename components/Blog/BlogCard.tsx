import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../Reveal';
import { BlogPost } from '../../data/blogPosts';
import { useLanguage } from '../../context/LanguageContext';
import { categories } from '../../data/categories';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  const { language, t } = useLanguage();
  const translation = post.translations[language];
  const category = categories.find(c => c.id === post.categories[0]);

  return (
    <Reveal delay={index * 0.05}>
      <Link
        to={`/blog/${post.slug}`}
        className="group flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        {/* Image */}
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={post.image}
            alt={translation.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Category */}
          <span className={`text-xs font-sans font-semibold uppercase tracking-wider mb-3 ${category?.color || 'text-forest'} px-2 py-1 rounded-sm w-fit`}>
            {category?.translations[language] || post.categories[0]}
          </span>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-charcoal mb-3 group-hover:text-forest transition-colors line-clamp-2">
            {translation.title}
          </h3>

          {/* Excerpt */}
          <p className="font-body text-sm text-warm-grey line-clamp-3 mb-4 flex-1">
            {translation.excerpt}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-xs font-sans text-warm-grey">
            <span>{translation.readTime} {t('blog.readTime')}</span>
            <span className="text-forest group-hover:translate-x-1 transition-transform">
              {t('blog.readMore')}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};
