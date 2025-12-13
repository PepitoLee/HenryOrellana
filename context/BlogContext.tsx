import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { BlogPost } from '../data/blogPosts';
import { useLanguage } from './LanguageContext';
import { searchPosts, filterByCategory, sortPostsByDate } from '../utils/blogUtils';
import { blogService } from '../services/blogService';
import type { BlogPostWithTranslations } from '../types/database.types';

interface BlogContextType {
  allPosts: BlogPost[];
  filteredPosts: BlogPost[];
  featuredPost: BlogPost | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  resetFilters: () => void;
  loading: boolean;
  error: string | null;
  refreshPosts: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Transform database format to application format
function transformToAppFormat(post: BlogPostWithTranslations): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    image: post.image,
    publishedAt: post.publishedAt,
    author: post.author || 'Henry Orellana D.',
    categories: post.categories,
    featured: post.featured,
    translations: post.translations,
  };
}

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const [publishedPosts, featured] = await Promise.all([
        blogService.getPublishedPosts(),
        blogService.getFeaturedPost(),
      ]);

      // Transform and set regular posts (non-featured)
      const transformedPosts = publishedPosts
        .filter(p => !p.featured)
        .map(transformToAppFormat);

      setPosts(sortPostsByDate(transformedPosts));

      // Set featured post
      if (featured) {
        setFeaturedPost(transformToAppFormat(featured));
      } else {
        setFeaturedPost(null);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err instanceof Error ? err.message : 'Error al cargar los artículos');

      // Fallback to static data if Supabase fails
      const { blogPosts, getRegularPosts, getFeaturedPost } = await import('../data/blogPosts');
      setPosts(sortPostsByDate(getRegularPosts()));
      setFeaturedPost(getFeaturedPost());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const allPosts = useMemo(() => posts, [posts]);

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

  const refreshPosts = async () => {
    await fetchPosts();
  };

  return (
    <BlogContext.Provider
      value={{
        allPosts,
        filteredPosts,
        featuredPost,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        resetFilters,
        loading,
        error,
        refreshPosts,
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
