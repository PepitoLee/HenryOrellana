import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { blogPosts, BlogPost, getRegularPosts } from '../data/blogPosts';
import { useLanguage } from './LanguageContext';
import { searchPosts, filterByCategory, sortPostsByDate } from '../utils/blogUtils';

interface BlogContextType {
  allPosts: BlogPost[];
  filteredPosts: BlogPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  resetFilters: () => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allPosts = useMemo(() => sortPostsByDate(getRegularPosts()), []);

  const filteredPosts = useMemo(() => {
    let result = allPosts;

    if (searchQuery.trim()) {
      result = searchPosts(result, searchQuery, language);
    }

    if (selectedCategory && selectedCategory !== 'all') {
      result = filterByCategory(result, selectedCategory);
    }

    return result;
  }, [allPosts, searchQuery, selectedCategory, language]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <BlogContext.Provider
      value={{
        allPosts,
        filteredPosts,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        resetFilters,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
