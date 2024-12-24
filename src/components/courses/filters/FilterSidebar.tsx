import React from 'react';
import { Filter } from 'lucide-react';
import PriceFilter from './PriceFilter';
import TypeFilter from './TypeFilter';
import IndustryFilter from './IndustryFilter';
import RegionFilter from './RegionFilter';
import LanguageFilter from './LanguageFilter';
import { CourseFilters } from '../../../types/courses';

interface FilterSidebarProps {
  filters: CourseFilters;
  onChange: (filters: CourseFilters) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
        <Filter className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-8">
        <PriceFilter
          range={filters.priceRange}
          showFree={filters.showFree}
          onChange={(range, showFree) => 
            onChange({ ...filters, priceRange: range, showFree })
          }
        />

        <TypeFilter
          selected={filters.types}
          onChange={(types) => onChange({ ...filters, types })}
        />

        <IndustryFilter
          selected={filters.industries}
          onChange={(industries) => onChange({ ...filters, industries })}
        />

        <RegionFilter
          selected={filters.regions}
          onChange={(regions) => onChange({ ...filters, regions })}
        />

        <LanguageFilter
          selected={filters.languages}
          onChange={(languages) => onChange({ ...filters, languages })}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;