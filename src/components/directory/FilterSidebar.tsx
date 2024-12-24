import React from 'react';
import { Filter } from 'lucide-react';
import CategoryFilter from './filters/CategoryFilter';
import RegionFilter from './filters/RegionFilter';
import ServiceTypeFilter from './filters/ServiceTypeFilter';
import LanguageFilter from './filters/LanguageFilter';
import RatingFilter from './filters/RatingFilter';

interface FilterSidebarProps {
  filters: {
    categories: string[];
    regions: string[];
    types: string[];
    languages: string[];
    minRating: number;
  };
  onChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
        <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
      
      <div className="space-y-8">
        <CategoryFilter 
          selected={filters.categories} 
          onChange={(categories) => onChange({ ...filters, categories })} 
        />
        <RegionFilter 
          selected={filters.regions} 
          onChange={(regions) => onChange({ ...filters, regions })} 
        />
        <ServiceTypeFilter 
          selected={filters.types} 
          onChange={(types) => onChange({ ...filters, types })} 
        />
        <LanguageFilter 
          selected={filters.languages} 
          onChange={(languages) => onChange({ ...filters, languages })} 
        />
        <RatingFilter 
          minimum={filters.minRating} 
          onChange={(minRating) => onChange({ ...filters, minRating })} 
        />
      </div>
    </div>
  );
};

export default FilterSidebar;