import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, RegistrationData } from '../types/auth';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegistrationData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      username: email.split('@')[0],
      email,
      category: 'provider',
      name: email.split('@')[0],
      companyDetails: {
        name: 'Test Company',
        registrationNumber: 'REG123',
        industry: 'Technology',
        size: '11-50',
        contactInfo: {
          phone: '+1234567890',
          email: email
        },
        address: {
          street: '123 Tech Street',
          city: 'Tech City',
          country: 'Techland',
          postalCode: '12345'
        },
        description: 'A leading technology company'
      }
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (data: RegistrationData) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      username: data.username,
      email: data.email,
      category: data.category,
      name: data.username,
      companyDetails: data.companyDetails
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};