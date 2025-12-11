import React from 'react';
import { Reveal } from '../components/Reveal';
import { Search } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      
      {/* Header & Search */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-200 pb-8">
        <div>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-4">Ideas & Reflexiones</h1>
          <p className="font-body text-warm-grey">Pensamientos sobre educación, liderazgo y fe.</p>
        </div>
        <div className="relative w-full md:w-64">
           <input 
             type="text" 
             placeholder="Buscar artículo..." 
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
               src="https://picsum.photos/seed/blogfeature/1600/900" 
               alt="Featured" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          <div className="max-w-3xl">
             <div className="flex gap-4 text-xs font-sans uppercase tracking-widest text-forest mb-3">
               <span>Tendencias</span>
               <span>•</span>
               <span>Octubre 12, 2023</span>
             </div>
             <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4 hover:text-forest transition-colors cursor-pointer">
               La intersección entre la IA y la Ética Cristiana
             </h2>
             <p className="font-body text-lg text-warm-grey mb-6">
               ¿Cómo preparamos a nuestros hijos para un mundo dominado por algoritmos sin perder su humanidad? Un análisis profundo sobre el futuro de CEO Junior.
             </p>
             <button className="font-sans text-sm font-bold uppercase tracking-wide border-b border-charcoal pb-1 hover:text-forest hover:border-forest">
               Leer artículo completo
             </button>
          </div>
        </Reveal>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <Reveal key={post} delay={post * 0.05} className="flex flex-col h-full group cursor-pointer">
             <div className="aspect-[3/2] overflow-hidden mb-6">
               <img 
                 src={`https://picsum.photos/seed/post${post}/600/400`} 
                 alt="Post thumbnail" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
               />
             </div>
             <div className="flex-1">
               <span className="text-xs font-sans text-forest font-bold uppercase mb-2 block">Categoría {post}</span>
               <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-forest transition-colors">
                 Título del artículo editorial sofisticado número {post}
               </h3>
               <p className="font-body text-sm text-warm-grey line-clamp-3 mb-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
             </div>
             <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs font-sans text-gray-400">
                <span>5 min de lectura</span>
                <span>Leer más →</span>
             </div>
          </Reveal>
        ))}
      </section>

    </div>
  );
};