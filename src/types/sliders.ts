// Types for slider components
export interface ServiceData {
  id: number;
  title: string;
  provider: string;
  description: string;
  categories: string[];
  type: string;
  region: string;
  country: string;
  city: string;
  tags: string[];
  image: string;
}

export interface ProviderData {
  id: string;
  name: string;
  logo: string;
  type: string;
  verified: boolean;
  sponsored: boolean;
  description: string;
  rating: number;
  reviewCount: number;
  services: string[];
  categories: string[];
  priceRange: [number, number];
  languages: string[];
  location: string;
}
