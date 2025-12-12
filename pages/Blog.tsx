import React from 'react';
import { Reveal } from '../components/Reveal';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Blog: React.FC = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: t('blog.posts.post1.title'),
      category: t('blog.posts.post1.category'),
      image: "/images/blog-crisis-familiar.png",
      excerpt: t('blog.posts.post1.excerpt'),
      readTime: t('blog.posts.post1.readTime')
    },
    {
      title: t('blog.posts.post2.title'),
      category: t('blog.posts.post2.category'),
      image: "/images/blog-inteligencia-espiritual.png",
      excerpt: t('blog.posts.post2.excerpt'),
      readTime: t('blog.posts.post2.readTime')
    },
    {
      title: t('blog.posts.post3.title'),
      category: t('blog.posts.post3.category'),
      image: "/images/blog-ceo-junior.png",
      excerpt: t('blog.posts.post3.excerpt'),
      readTime: t('blog.posts.post3.readTime')
    },
    {
      title: t('blog.posts.post4.title'),
      category: t('blog.posts.post4.category'),
      image: "/images/blog-eneagrama.png",
      excerpt: t('blog.posts.post4.excerpt'),
      readTime: t('blog.posts.post4.readTime')
    },
    {
      title: t('blog.posts.post5.title'),
      category: t('blog.posts.post5.category'),
      image: "/images/blog-limites.png",
      excerpt: t('blog.posts.post5.excerpt'),
      readTime: t('blog.posts.post5.readTime')
    },
    {
      title: t('blog.posts.post6.title'),
      category: t('blog.posts.post6.category'),
      image: "/images/blog-tecnologia.png",
      excerpt: t('blog.posts.post6.excerpt'),
      readTime: t('blog.posts.post6.readTime')
    }
  ];

  return (
    <div className="w-full pt-32 pb-20">

      {/* Header & Search */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-200 pb-8">
        <div>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-4">{t('blog.title')}</h1>
          <p className="font-body text-warm-grey">{t('blog.subtitle')}</p>
        </div>
        <div className="relative w-full md:w-64">
           <input
             type="text"
             placeholder={t('blog.search')}
             className="w-full bg-cream border-b border-gray-300 py-2 pl-2 pr-8 focus:outline-none focus:border-forest font-sans text-sm"
           />
           <Search size={16} className="absolute right-0 top-2 text-warm-grey" />
        </div>
      </div>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <Reveal width="100%">
          <div className="relative aspect-[21/9] w-full overflow-hidden mb-8 group cursor-pointer">
             <img
               src="/images/blog-destacado.png"
               alt={t('blog.featured.title')}
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          <div className="max-w-3xl">
             <div className="flex gap-4 text-xs font-sans uppercase tracking-widest text-forest mb-3">
               <span>{t('blog.featured.category')}</span>
               <span>•</span>
               <span>{t('blog.featured.date')}</span>
             </div>
             <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4 hover:text-forest transition-colors cursor-pointer">
               {t('blog.featured.title')}
             </h2>
             <p className="font-body text-lg text-warm-grey mb-6">
               {t('blog.featured.description')}
             </p>
             <button className="font-sans text-sm font-bold uppercase tracking-wide border-b border-charcoal pb-1 hover:text-forest hover:border-forest">
               {t('blog.featured.cta')}
             </button>
          </div>
        </Reveal>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post, idx) => (
          <Reveal key={idx} delay={idx * 0.05} className="flex flex-col h-full group cursor-pointer">
             <div className="aspect-[3/2] overflow-hidden mb-6">
               <img
                 src={post.image}
                 alt={post.title}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
             </div>
             <div className="flex-1">
               <span className="text-xs font-sans text-forest font-bold uppercase mb-2 block">{post.category}</span>
               <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-forest transition-colors">
                 {post.title}
               </h3>
               <p className="font-body text-sm text-warm-grey line-clamp-3 mb-4">
                 {post.excerpt}
               </p>
             </div>
             <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs font-sans text-gray-400">
                <span>{post.readTime} {t('blog.readTime')}</span>
                <span>{t('blog.readMore')}</span>
             </div>
          </Reveal>
        ))}
      </section>

    </div>
  );
};
