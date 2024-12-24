export type UserCategory = 'consumer' | 'provider' | 'freelancer';

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  category: UserCategory;
  avatar?: string;
  createdAt: string;
  lastLogin: string;
}

export interface ProviderProfile extends UserProfile {
  companyDetails: {
    name: string;
    registrationNumber: string;
    industry: string;
    size: string;
    contactInfo: {
      phone: string;
      email: string;
    };
    address: {
      street: string;
      city: string;
      country: string;
      postalCode: string;
    };
    description: string;
    logo?: string;
  };
  metrics: {
    totalRevenue: number;
    activeProjects: number;
    newLeads: number;
    averageRating: number;
  };
}