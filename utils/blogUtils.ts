import { blogPosts, BlogPost } from '../data/blogPosts';

export type Language = 'es' | 'en';

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostTranslation = (post: BlogPost, language: Language) => {
  return post.translations[language];
};

export const searchPosts = (
  posts: BlogPost[],
  query: string,
  language: Language
): BlogPost[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return posts;

  return posts.filter(post => {
    const translation = post.translations[language];
    return (
      translation.title.toLowerCase().includes(normalizedQuery) ||
      translation.excerpt.toLowerCase().includes(normalizedQuery) ||
      translation.content.toLowerCase().includes(normalizedQuery)
    );
  });
};

export const filterByCategory = (
  posts: BlogPost[],
  categoryId: string
): BlogPost[] => {
  if (!categoryId || categoryId === 'all') return posts;
  return posts.filter(post => post.categories.includes(categoryId));
};

export const getAllCategories = (posts: BlogPost[]): string[] => {
  const categorySet = new Set<string>();
  posts.forEach(post => post.categories.forEach(cat => categorySet.add(cat)));
  return Array.from(categorySet);
};

export const sortPostsByDate = (posts: BlogPost[], order: 'asc' | 'desc' = 'desc'): BlogPost[] => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};

export const formatDate = (dateString: string, language: Language): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
};
