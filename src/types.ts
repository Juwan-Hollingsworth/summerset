export type LotStatus = 'available' | 'sold' | 'reserved';

export interface Lot {
  id: string;
  number: string;
  price: number;
  sqft: number;
  status: LotStatus;
  path: string; // SVG path data
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
