import React from 'react';
import { useBlog } from '../../context/BlogContext';
import { useLanguage } from '../../context/LanguageContext';
import { categories } from '../../data/categories';

export const CategoryFilter: React.FC = () => {
  const { language } = useLanguage();
  const { selectedCategory, setSelectedCategory, filteredPosts } = useBlog();

  // Get categories that have posts
  const activeCategories = categories.filter(cat =>
    filteredPosts.some(post => post.categories.includes(cat.id)) ||
    selectedCategory === 'all'
  );

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`px-4 py-2 text-xs font-sans uppercase tracking-wider rounded-sm border transition-all duration-300 ${
          selectedCategory === 'all'
            ? 'bg-forest text-white border-forest'
            : 'bg-transparent text-charcoal border-charcoal/20 hover:border-forest hover:text-forest'
        }`}
      >
        {language === 'es' ? 'Todos' : 'All'}
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 text-xs font-sans uppercase tracking-wider rounded-sm border transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-forest text-white border-forest'
              : 'bg-transparent text-charcoal border-charcoal/20 hover:border-forest hover:text-forest'
          }`}
        >
          {category.translations[language]}
        </button>
      ))}
    </div>
  );
};
