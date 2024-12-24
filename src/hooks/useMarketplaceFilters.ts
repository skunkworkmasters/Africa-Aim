import { useState, useEffect } from 'react';
import { marketplaceData } from '../data/marketplace';
import { ServiceData } from '../types/marketplace';

interface MarketplaceFilters {
  categories: string[];
  regions: string[];
  serviceTypes: string[];
  minRating: number;
  search: string;
}

export const useMarketplaceFilters = () => {
  const [filters, setFilters] = useState<MarketplaceFilters>({
    categories: [],
    regions: [],
    serviceTypes: [],
    minRating: 0,
    search: '',
  });

  const [filteredServices, setFilteredServices] = useState<ServiceData[]>(marketplaceData);

  useEffect(() => {
    let results = marketplaceData;

    if (filters.categories.length) {
      results = results.filter(service => 
        filters.categories.some(cat => service.categories.includes(cat))
      );
    }

    if (filters.regions.length) {
      results = results.filter(service => 
        filters.regions.includes(service.region)
      );
    }

    if (filters.serviceTypes.length) {
      results = results.filter(service => 
        filters.serviceTypes.includes(service.type)
      );
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      results = results.filter(service => 
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.provider.toLowerCase().includes(searchLower)
      );
    }

    setFilteredServices(results);
  }, [filters]);

  return { filters, setFilters, filteredServices };
};

export default useMarketplaceFilters;