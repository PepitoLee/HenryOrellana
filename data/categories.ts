export interface Category {
  id: string;
  translations: {
    es: string;
    en: string;
  };
  color: string;
}

export const categories: Category[] = [
  { id: 'familia', translations: { es: 'Familia', en: 'Family' }, color: 'bg-rose-100 text-rose-700' },
  { id: 'genesis-i7', translations: { es: 'GENESIS i7', en: 'GENESIS i7' }, color: 'bg-amber-100 text-amber-700' },
  { id: 'emprendimiento', translations: { es: 'Emprendimiento', en: 'Entrepreneurship' }, color: 'bg-emerald-100 text-emerald-700' },
  { id: 'herramientas', translations: { es: 'Herramientas', en: 'Tools' }, color: 'bg-blue-100 text-blue-700' },
  { id: 'crianza', translations: { es: 'Crianza', en: 'Parenting' }, color: 'bg-purple-100 text-purple-700' },
  { id: 'tecnologia', translations: { es: 'Tecnologia', en: 'Technology' }, color: 'bg-cyan-100 text-cyan-700' },
  { id: 'tendencias', translations: { es: 'Tendencias', en: 'Trends' }, color: 'bg-indigo-100 text-indigo-700' },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};
