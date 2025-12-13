import { supabase } from '../lib/supabase';
import type { BlogPostWithTranslations } from '../types/database.types';

// Transform database response to application format
function transformPost(data: any): BlogPostWithTranslations {
  const esTranslation = data.translations?.find((t: any) => t.language === 'es') || {};
  const enTranslation = data.translations?.find((t: any) => t.language === 'en') || {};

  return {
    id: data.id,
    slug: data.slug,
    image: data.image,
    publishedAt: data.published_at,
    author: data.author,
    featured: data.featured,
    status: data.status,
    categories: data.categories?.map((c: any) => c.category_id) || [],
    translations: {
      es: {
        title: esTranslation.title || '',
        excerpt: esTranslation.excerpt || '',
        content: esTranslation.content || '',
        metaDescription: esTranslation.meta_description || '',
        readTime: esTranslation.read_time || '',
      },
      en: {
        title: enTranslation.title || '',
        excerpt: enTranslation.excerpt || '',
        content: enTranslation.content || '',
        metaDescription: enTranslation.meta_description || '',
        readTime: enTranslation.read_time || '',
      },
    },
  };
}

export const blogService = {
  // ==========================================
  // PUBLIC METHODS (for blog readers)
  // ==========================================

  /**
   * Get all published posts
   */
  async getPublishedPosts(): Promise<BlogPostWithTranslations[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        translations:blog_post_translations(*),
        categories:blog_post_categories(category_id)
      `)
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) throw error;
    return (data || []).map(transformPost);
  },

  /**
   * Get a single post by slug
   */
  async getPostBySlug(slug: string): Promise<BlogPostWithTranslations | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        translations:blog_post_translations(*),
        categories:blog_post_categories(category_id)
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }
    return data ? transformPost(data) : null;
  },

  /**
   * Get the featured post
   */
  async getFeaturedPost(): Promise<BlogPostWithTranslations | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        translations:blog_post_translations(*),
        categories:blog_post_categories(category_id)
      `)
      .eq('status', 'published')
      .eq('featured', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return data ? transformPost(data) : null;
  },

  /**
   * Get all categories
   */
  async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select(`
        *,
        translations:category_translations(*)
      `);

    if (error) throw error;
    return data || [];
  },

  // ==========================================
  // ADMIN METHODS (require authentication)
  // ==========================================

  /**
   * Get all posts (including drafts) - Admin only
   */
  async getAllPosts(): Promise<BlogPostWithTranslations[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        translations:blog_post_translations(*),
        categories:blog_post_categories(category_id)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data || []).map(transformPost);
  },

  /**
   * Create a new post - Admin only
   */
  async createPost(post: {
    slug: string;
    image: string;
    author?: string;
    featured?: boolean;
    status?: 'draft' | 'published' | 'archived';
    categories: string[];
    translations: {
      es: { title: string; excerpt: string; content: string; metaDescription: string; readTime: string };
      en: { title: string; excerpt: string; content: string; metaDescription: string; readTime: string };
    };
  }): Promise<BlogPostWithTranslations> {
    // 1. Create the post
    const { data: newPost, error: postError } = await supabase
      .from('blog_posts')
      .insert({
        slug: post.slug,
        image: post.image,
        author: post.author || 'Henry Orellana D.',
        featured: post.featured || false,
        status: post.status || 'draft',
      })
      .select()
      .single();

    if (postError) throw postError;

    // 2. Create translations
    const { error: transError } = await supabase
      .from('blog_post_translations')
      .insert([
        {
          post_id: newPost.id,
          language: 'es',
          title: post.translations.es.title,
          excerpt: post.translations.es.excerpt,
          content: post.translations.es.content,
          meta_description: post.translations.es.metaDescription,
          read_time: post.translations.es.readTime,
        },
        {
          post_id: newPost.id,
          language: 'en',
          title: post.translations.en.title,
          excerpt: post.translations.en.excerpt,
          content: post.translations.en.content,
          meta_description: post.translations.en.metaDescription,
          read_time: post.translations.en.readTime,
        },
      ]);

    if (transError) throw transError;

    // 3. Create category relations
    if (post.categories.length > 0) {
      const { error: catError } = await supabase
        .from('blog_post_categories')
        .insert(
          post.categories.map((catId) => ({
            post_id: newPost.id,
            category_id: catId,
          }))
        );

      if (catError) throw catError;
    }

    // 4. Return the complete post
    const createdPost = await this.getPostBySlug(newPost.slug);
    if (!createdPost) throw new Error('Failed to fetch created post');
    return createdPost;
  },

  /**
   * Update an existing post - Admin only
   */
  async updatePost(
    id: string,
    updates: Partial<{
      slug: string;
      image: string;
      author: string;
      featured: boolean;
      status: 'draft' | 'published' | 'archived';
      published_at: string;
      categories: string[];
      translations: {
        es?: Partial<{ title: string; excerpt: string; content: string; metaDescription: string; readTime: string }>;
        en?: Partial<{ title: string; excerpt: string; content: string; metaDescription: string; readTime: string }>;
      };
    }>
  ): Promise<BlogPostWithTranslations> {
    // 1. Update post metadata
    const postUpdates: any = {};
    if (updates.slug) postUpdates.slug = updates.slug;
    if (updates.image) postUpdates.image = updates.image;
    if (updates.author) postUpdates.author = updates.author;
    if (updates.featured !== undefined) postUpdates.featured = updates.featured;
    if (updates.status) postUpdates.status = updates.status;
    if (updates.published_at) postUpdates.published_at = updates.published_at;

    if (Object.keys(postUpdates).length > 0) {
      const { error: postError } = await supabase
        .from('blog_posts')
        .update(postUpdates)
        .eq('id', id);

      if (postError) throw postError;
    }

    // 2. Update translations
    if (updates.translations) {
      for (const lang of ['es', 'en'] as const) {
        const trans = updates.translations[lang];
        if (trans) {
          const transUpdates: any = {};
          if (trans.title) transUpdates.title = trans.title;
          if (trans.excerpt) transUpdates.excerpt = trans.excerpt;
          if (trans.content) transUpdates.content = trans.content;
          if (trans.metaDescription) transUpdates.meta_description = trans.metaDescription;
          if (trans.readTime) transUpdates.read_time = trans.readTime;

          if (Object.keys(transUpdates).length > 0) {
            const { error: transError } = await supabase
              .from('blog_post_translations')
              .update(transUpdates)
              .eq('post_id', id)
              .eq('language', lang);

            if (transError) throw transError;
          }
        }
      }
    }

    // 3. Update categories if provided
    if (updates.categories) {
      // Delete existing relations
      await supabase.from('blog_post_categories').delete().eq('post_id', id);

      // Insert new relations
      if (updates.categories.length > 0) {
        const { error: catError } = await supabase
          .from('blog_post_categories')
          .insert(
            updates.categories.map((catId) => ({
              post_id: id,
              category_id: catId,
            }))
          );

        if (catError) throw catError;
      }
    }

    // 4. Get and return updated post
    const { data: post } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('id', id)
      .single();

    const updatedPost = await this.getPostBySlug(post?.slug || '');
    if (!updatedPost) throw new Error('Failed to fetch updated post');
    return updatedPost;
  },

  /**
   * Delete a post - Admin only
   */
  async deletePost(id: string): Promise<void> {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) throw error;
  },

  /**
   * Toggle featured status - Admin only
   */
  async toggleFeatured(id: string, featured: boolean): Promise<void> {
    // If setting as featured, first unset any other featured post
    if (featured) {
      await supabase
        .from('blog_posts')
        .update({ featured: false })
        .eq('featured', true);
    }

    const { error } = await supabase
      .from('blog_posts')
      .update({ featured })
      .eq('id', id);

    if (error) throw error;
  },

  /**
   * Publish a draft post - Admin only
   */
  async publishPost(id: string): Promise<void> {
    const { error } = await supabase
      .from('blog_posts')
      .update({
        status: 'published',
        published_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) throw error;
  },

  /**
   * Unpublish a post (set to draft) - Admin only
   */
  async unpublishPost(id: string): Promise<void> {
    const { error } = await supabase
      .from('blog_posts')
      .update({ status: 'draft' })
      .eq('id', id);

    if (error) throw error;
  },

  // ==========================================
  // AI GENERATION (calls Edge Function)
  // ==========================================

  /**
   * Generate blog content using AI
   */
  async generateContent(params: {
    topic: string;
    category: string;
    tone?: 'formal' | 'conversational' | 'inspirational';
    targetLength?: 'short' | 'medium' | 'long';
  }) {
    const { data, error } = await supabase.functions.invoke('generate-blog-content', {
      body: params,
    });

    if (error) throw error;
    return data;
  },

  // ==========================================
  // STATS (for dashboard)
  // ==========================================

  async getStats() {
    const [publishedResult, draftResult, totalResult] = await Promise.all([
      supabase.from('blog_posts').select('id', { count: 'exact' }).eq('status', 'published'),
      supabase.from('blog_posts').select('id', { count: 'exact' }).eq('status', 'draft'),
      supabase.from('blog_posts').select('id', { count: 'exact' }),
    ]);

    return {
      published: publishedResult.count || 0,
      drafts: draftResult.count || 0,
      total: totalResult.count || 0,
    };
  },
};
