export interface Course {
  id: string;
  title: string;
  provider: string;
  verified: boolean;
  description: string;
  thumbnail: string;
  type: 'Remote' | 'Onsite';
  location: string;
  country: string;
  countryCode: string;
  industry: string;
  technologies: string[];
  duration: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  certificate: boolean;
  createdAt: string;
  updatedAt: string;
  curriculum: string[];
  objectives: string[];
  prerequisites: string[];
  instructor: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
  };
  reviews: {
    rating: number;
    count: number;
    items: {
      id: string;
      user: string;
      rating: number;
      comment: string;
      date: string;
    }[];
  };
  schedule: {
    startDate: string;
    endDate: string;
    sessions: {
      day: string;
      time: string;
    }[];
  };
}

export interface CourseFilters {
  priceRange: [number, number];
  showFree: boolean;
  types: string[];
  industries: string[];
  regions: string[];
  languages: string[];
  countries: string[];
  sortBy: string;
  search: string;
}