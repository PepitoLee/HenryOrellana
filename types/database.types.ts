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
      booking_slots: {
        Row: {
          id: string
          mentor_id: string
          date: string
          start_time: string
          end_time: string
          status: 'available' | 'pending' | 'confirmed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          mentor_id?: string
          date: string
          start_time: string
          end_time: string
          status?: 'available' | 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          mentor_id?: string
          date?: string
          start_time?: string
          end_time?: string
          status?: 'available' | 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          slot_id: string | null
          client_name: string
          client_email: string
          client_phone: string
          client_country: string
          service_type: 'mentoria-usa' | 'mentoria-peru'
          price_amount: number
          price_currency: 'USD' | 'PEN'
          booking_date: string
          booking_start_time: string
          booking_end_time: string
          notes: string | null
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'
          whatsapp_sent_at: string | null
          confirmed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slot_id?: string | null
          client_name: string
          client_email: string
          client_phone: string
          client_country: string
          service_type: 'mentoria-usa' | 'mentoria-peru'
          price_amount: number
          price_currency: 'USD' | 'PEN'
          booking_date: string
          booking_start_time: string
          booking_end_time: string
          notes?: string | null
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'
          whatsapp_sent_at?: string | null
          confirmed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slot_id?: string | null
          client_name?: string
          client_email?: string
          client_phone?: string
          client_country?: string
          service_type?: 'mentoria-usa' | 'mentoria-peru'
          price_amount?: number
          price_currency?: 'USD' | 'PEN'
          booking_date?: string
          booking_start_time?: string
          booking_end_time?: string
          notes?: string | null
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'
          whatsapp_sent_at?: string | null
          confirmed_at?: string | null
          created_at?: string
          updated_at?: string
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

// Booking types
export type BookingSlotRow = Database['public']['Tables']['booking_slots']['Row']
export type BookingRow = Database['public']['Tables']['bookings']['Row']
export type BookingSlotInsert = Database['public']['Tables']['booking_slots']['Insert']
export type BookingInsert = Database['public']['Tables']['bookings']['Insert']
