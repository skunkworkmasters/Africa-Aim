import { useState, useEffect } from 'react';
import { Provider } from '../types/provider';
import { providerData } from '../data/providers';

interface Filters {
  search: string;
  categories: string[];
  regions: string[];
  types: string[];
  languages: string[];
  minRating: number;
}

export const useProviderFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    categories: [],
    regions: [],
    types: [],
    languages: [],
    minRating: 0,
  });

  const [filteredProviders, setFilteredProviders] = useState<Provider[]>(providerData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const applyFilters = async () => {
      setIsLoading(true);
      try {
        let results = providerData;

        if (filters.search) {
          const searchLower = filters.search.toLowerCase();
          results = results.filter(
            provider =>
              provider.name.toLowerCase().includes(searchLower) ||
              provider.description.toLowerCase().includes(searchLower)
          );
        }

        if (filters.categories.length) {
          results = results.filter(provider =>
            filters.categories.some(cat => provider.categories.includes(cat))
          );
        }

        if (filters.regions.length) {
          results = results.filter(provider =>
            filters.regions.includes(provider.location)
          );
        }

        if (filters.types.length) {
          results = results.filter(provider =>
            filters.types.includes(provider.type)
          );
        }

        results = results.filter(
          provider => provider.rating >= filters.minRating
        );

        if (filters.languages.length) {
          results = results.filter(provider =>
            filters.languages.some(lang => provider.languages.includes(lang))
          );
        }

        setFilteredProviders(results);
      } finally {
        setIsLoading(false);
      }
    };

    applyFilters();
  }, [filters]);

  return { filters, setFilters, filteredProviders, isLoading };
};

export default useProviderFilters;