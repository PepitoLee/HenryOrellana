export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  image?: string; // URL or placeholder logic
}

export interface SpeakingTopic {
  id: string;
  title: string;
  description: string;
  audience: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image?: string;
}
