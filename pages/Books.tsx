import React from 'react';
import { Reveal } from '../components/Reveal';
import { ShoppingBag, BookOpen } from 'lucide-react';

export const Books: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 bg-cream">
      
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <Reveal>
          <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6">Mis Libros</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-body text-lg text-warm-grey max-w-2xl mx-auto">
            Herramientas escritas para acompañarte en el viaje de transformación personal y familiar.
          </p>
        </Reveal>
      </div>

      {/* Main Feature */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="bg-white p-8 md:p-16 shadow-sm flex flex-col md:flex-row gap-16 items-center">
           <Reveal className="w-full md:w-1/3 flex justify-center perspective-1000">
             {/* 3D Book Cover Simulator */}
              <div className="w-64 h-96 bg-gradient-to-br from-forest to-black relative shadow-2xl transform transition-transform duration-700 hover:rotate-y-12">
                 <div className="absolute inset-4 border border-white/30 flex flex-col justify-between p-6 text-center text-white">
                    <span className="font-sans text-xs tracking-[0.2em] uppercase">Bestseller</span>
                    <div>
                      <h2 className="font-display text-4xl mb-2">Padres 3.0</h2>
                      <p className="font-body text-sm opacity-80 italic">La guía definitiva</p>
                    </div>
                    <span className="font-sans text-sm font-bold">Henry Orellana D.</span>
                 </div>
              </div>
           </Reveal>

           <div className="w-full md:w-2/3 space-y-8">
             <Reveal delay={0.2}>
               <h2 className="font-display text-4xl text-charcoal">Padres 3.0: El Mapa de 60 Días</h2>
             </Reveal>
             <Reveal delay={0.3}>
               <p className="font-body text-lg text-warm-grey leading-relaxed">
                 Un sistema revolucionario que integra la sabiduría bíblica con la neurociencia moderna. Descubre cómo pasar de la frustración a la conexión profunda con tus hijos adolescentes.
               </p>
             </Reveal>
             <Reveal delay={0.4}>
               <div className="bg-cream-dark p-6 border-l-2 border-forest italic font-body text-charcoal">
                 "Una lectura obligatoria para cualquier padre que quiera sobrevivir y prosperar en la era digital."
                 <span className="block mt-2 text-xs font-sans font-bold uppercase not-italic text-warm-grey">— Revista Familia Moderna</span>
               </div>
             </Reveal>
             <Reveal delay={0.5} className="flex gap-4 pt-4">
                <button className="bg-forest text-white px-8 py-3 flex items-center gap-2 font-sans text-sm tracking-wider hover:bg-charcoal transition-colors">
                  <ShoppingBag size={16} /> Comprar en Amazon
                </button>
                <button className="border border-charcoal text-charcoal px-8 py-3 flex items-center gap-2 font-sans text-sm tracking-wider hover:bg-charcoal hover:text-white transition-colors">
                  <BookOpen size={16} /> Leer Extracto
                </button>
             </Reveal>
           </div>
        </div>
      </section>

      {/* Other Works Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-warm-grey mb-12 border-b border-gray-200 pb-4">
          Otras Publicaciones
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2].map((book) => (
             <Reveal key={book} delay={0.2} className="group cursor-pointer">
                <div className="w-full aspect-[2/3] bg-gray-200 mb-6 relative overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                   <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <span className="text-xs uppercase tracking-widest mb-1 block">202{book + 2}</span>
                      <h4 className="font-display text-2xl">Título del Libro {book}</h4>
                   </div>
                </div>
                <div className="flex justify-between items-center">
                   <span className="font-sans text-sm font-bold text-charcoal">Más información</span>
                   <span className="w-8 h-px bg-charcoal group-hover:w-16 transition-all duration-300"></span>
                </div>
             </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};