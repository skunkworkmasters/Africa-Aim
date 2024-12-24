import { UserCategory } from './user';

export interface User {
  id: string;
  username: string;
  email: string;
  category: UserCategory;
  name: string;
  companyDetails?: CompanyDetails;
}

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
  category: UserCategory;
  companyDetails?: CompanyDetails;
}

export interface CompanyDetails {
  name: string;
  registrationNumber: string;
  industry: string;
  size: string;
  contactInfo: ContactInfo;
  address: Address;
  description: string;
  logo?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
}