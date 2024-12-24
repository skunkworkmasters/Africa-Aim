export interface Provider {
  id: string;
  name: string;
  logo: string;
  type: 'Enterprise' | 'Startup' | 'Freelancer';
  verified: boolean;
  sponsored: boolean;
  rating: number;
  reviewCount: number;
  location: string;
  description: string;
  services: string[];
  categories: string[];
  priceRange: [number, number];
  languages: string[];
}