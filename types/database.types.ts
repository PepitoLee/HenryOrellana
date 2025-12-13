export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string
          slug: string
          image: string
          published_at: string
          author: string
          featured: boolean
          status: 'draft' | 'published' | 'archived'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          image: string
          published_at?: string
          author?: string
          featured?: boolean
          status?: 'draft' | 'published' | 'archived'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          image?: string
          published_at?: string
          author?: string
          featured?: boolean
          status?: 'draft' | 'published' | 'archived'
          created_at?: string
          updated_at?: string
        }
      }
      blog_post_translations: {
        Row: {
          id: string
          post_id: string
          language: 'es' | 'en'
          title: string
          excerpt: string
          content: string
          meta_description: string
          read_time: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          post_id: string
          language: 'es' | 'en'
          title: string
          excerpt: string
          content: string
          meta_description: string
          read_time: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          language?: 'es' | 'en'
          title?: string
          excerpt?: string
          content?: string
          meta_description?: string
          read_time?: string
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          color: string
          created_at: string
        }
        Insert: {
          id: string
          color: string
          created_at?: string
        }
        Update: {
          id?: string
          color?: string
          created_at?: string
        }
      }
      category_translations: {
        Row: {
          id: string
          category_id: string
          language: 'es' | 'en'
          name: string
        }
        Insert: {
          id?: string
          category_id: string
          language: 'es' | 'en'
          name: string
        }
        Update: {
          id?: string
          category_id?: string
          language?: 'es' | 'en'
          name?: string
        }
      }
      blog_post_categories: {
        Row: {
          post_id: string
          category_id: string
        }
        Insert: {
          post_id: string
          category_id: string
        }
        Update: {
          post_id?: string
          category_id?: string
        }
      }
      admin_profiles: {
        Row: {
          id: string
          full_name: string | null
          role: 'admin' | 'editor'
          created_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          role?: 'admin' | 'editor'
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          role?: 'admin' | 'editor'
          created_at?: string
        }
      }
      ai_generation_logs: {
        Row: {
          id: string
          post_id: string | null
          user_id: string | null
          prompt_used: string
          model_used: string
          tokens_used: number | null
          created_at: string
        }
        Insert: {
          id?: string
          post_id?: string | null
          user_id?: string | null
          prompt_used: string
          model_used?: string
          tokens_used?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string | null
          user_id?: string | null
          prompt_used?: string
          model_used?: string
          tokens_used?: number | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_post_with_translations: {
        Args: { post_slug: string }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types for the application
export type BlogPostRow = Database['public']['Tables']['blog_posts']['Row']
export type BlogPostTranslationRow = Database['public']['Tables']['blog_post_translations']['Row']
export type CategoryRow = Database['public']['Tables']['categories']['Row']
export type CategoryTranslationRow = Database['public']['Tables']['category_translations']['Row']

// Combined type that matches the current BlogPost interface
export interface BlogPostWithTranslations {
  id: string
  slug: string
  image: string
  publishedAt: string
  author: string
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  categories: string[]
  translations: {
    es: {
      title: string
      excerpt: string
      content: string
      metaDescription: string
      readTime: string
    }
    en: {
      title: string
      excerpt: string
      content: string
      metaDescription: string
      readTime: string
    }
  }
}
