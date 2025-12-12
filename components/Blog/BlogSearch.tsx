import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useBlog } from '../../context/BlogContext';
import { useLanguage } from '../../context/LanguageContext';

export const BlogSearch: React.FC = () => {
  const { t } = useLanguage();
  const { searchQuery, setSearchQuery } = useBlog();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery]);

  // Sync with external changes
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleClear = () => {
    setLocalQuery('');
    setSearchQuery('');
  };

  return (
    <div className="relative w-full md:w-72">
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder={t('blog.search')}
        className="w-full bg-transparent border-b border-charcoal/20 py-3 pl-1 pr-10 focus:outline-none focus:border-forest font-sans text-sm text-charcoal placeholder:text-warm-grey transition-colors"
      />
      {localQuery ? (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-warm-grey hover:text-charcoal transition-colors"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      ) : (
        <Search
          size={18}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-warm-grey"
        />
      )}
    </div>
  );
};
