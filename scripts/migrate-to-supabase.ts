/**
 * Migration Script: Migrate existing blog posts to Supabase
 *
 * Usage:
 * 1. First, run the SQL schema in Supabase (supabase/schema.sql)
 * 2. Make sure .env.local has your Supabase credentials
 * 3. Run: npx tsx scripts/migrate-to-supabase.ts
 *
 * This script will:
 * - Migrate all categories
 * - Migrate all blog posts with translations
 * - Create the category-post relations
 */

import { createClient } from '@supabase/supabase-js';

// Import blog data
import { blogPosts } from '../data/blogPosts';
import { categories } from '../data/categories';

// Load environment variables (for Node.js)
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Check your .env.local file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateCategories() {
  console.log('\n📁 Migrating categories...');

  for (const category of categories) {
    // Insert category
    const { data: catData, error: catError } = await supabase
      .from('categories')
      .upsert({ id: category.id, color: category.color })
      .select()
      .single();

    if (catError) {
      console.error(`  ❌ Error inserting category ${category.id}:`, catError.message);
      continue;
    }

    // Insert translations
    const translations = [
      { category_id: category.id, language: 'es', name: category.translations.es },
      { category_id: category.id, language: 'en', name: category.translations.en },
    ];

    const { error: transError } = await supabase
      .from('category_translations')
      .upsert(translations, { onConflict: 'category_id,language' });

    if (transError) {
      console.error(`  ❌ Error inserting translations for ${category.id}:`, transError.message);
      continue;
    }

    console.log(`  ✅ Category: ${category.id}`);
  }

  console.log(`\n✅ Migrated ${categories.length} categories`);
}

async function migratePosts() {
  console.log('\n📝 Migrating blog posts...');

  for (const post of blogPosts) {
    // 1. Insert the post
    const { data: postData, error: postError } = await supabase
      .from('blog_posts')
      .upsert({
        id: post.id,
        slug: post.slug,
        image: post.image,
        published_at: post.publishedAt,
        author: post.author,
        featured: post.featured || false,
        status: 'published',
      })
      .select()
      .single();

    if (postError) {
      console.error(`  ❌ Error inserting post ${post.slug}:`, postError.message);
      continue;
    }

    // 2. Insert translations
    const translations = [
      {
        post_id: post.id,
        language: 'es',
        title: post.translations.es.title,
        excerpt: post.translations.es.excerpt,
        content: post.translations.es.content,
        meta_description: post.translations.es.metaDescription,
        read_time: post.translations.es.readTime,
      },
      {
        post_id: post.id,
        language: 'en',
        title: post.translations.en.title,
        excerpt: post.translations.en.excerpt,
        content: post.translations.en.content,
        meta_description: post.translations.en.metaDescription,
        read_time: post.translations.en.readTime,
      },
    ];

    const { error: transError } = await supabase
      .from('blog_post_translations')
      .upsert(translations, { onConflict: 'post_id,language' });

    if (transError) {
      console.error(`  ❌ Error inserting translations for ${post.slug}:`, transError.message);
      continue;
    }

    // 3. Insert category relations
    if (post.categories && post.categories.length > 0) {
      // First, delete existing relations
      await supabase
        .from('blog_post_categories')
        .delete()
        .eq('post_id', post.id);

      // Then insert new ones
      const categoryRelations = post.categories.map((catId) => ({
        post_id: post.id,
        category_id: catId,
      }));

      const { error: catError } = await supabase
        .from('blog_post_categories')
        .insert(categoryRelations);

      if (catError) {
        console.error(`  ❌ Error inserting categories for ${post.slug}:`, catError.message);
      }
    }

    console.log(`  ✅ Post: ${post.slug}`);
  }

  console.log(`\n✅ Migrated ${blogPosts.length} posts`);
}

async function main() {
  console.log('🚀 Starting migration to Supabase...');
  console.log(`📍 Supabase URL: ${supabaseUrl}`);

  try {
    // Test connection
    const { data, error } = await supabase.from('categories').select('count');
    if (error && error.code !== 'PGRST116') {
      throw new Error(`Connection test failed: ${error.message}`);
    }
    console.log('✅ Connected to Supabase');

    // Run migrations
    await migrateCategories();
    await migratePosts();

    console.log('\n🎉 Migration completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Verify data in Supabase Dashboard');
    console.log('2. Create an admin user and add to admin_profiles table');
    console.log('3. Deploy the Edge Function for AI generation');
    console.log('4. Test the admin panel at /admin');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

main();
