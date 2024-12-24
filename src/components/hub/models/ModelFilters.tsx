import React from 'react';
import { Filter } from 'lucide-react';
import { ModelFilters as ModelFiltersType } from '../../../types/hub';

interface ModelFiltersProps {
  filters: ModelFiltersType;
  onChange: (filters: ModelFiltersType) => void;
}

const ModelFilters: React.FC<ModelFiltersProps> = ({ filters, onChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
        <Filter className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {/* Type Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Type</h3>
          <div className="space-y-2">
            {['Multimodal', 'Computer Vision', 'NLP', 'Audio', 'Database'].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.types.includes(type)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...filters.types, type]
                      : filters.types.filter(t => t !== type);
                    onChange({ ...filters, types: newTypes });
                  }}
                  className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Industry</h3>
          <select
            value={filters.industry}
            onChange={(e) => onChange({ ...filters, industry: e.target.value })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Industries</option>
            {[
              'Agriculture',
              'Healthcare',
              'Finance',
              'Education',
              'Manufacturing',
              'Retail',
              'Transportation',
              'Telecom',
              'Energy',
              'Water',
              'Mining',
              'Infrastructure',
            ].map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Language Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Language</h3>
          <select
            value={filters.language}
            onChange={(e) => onChange({ ...filters, language: e.target.value })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Languages</option>
            {[
              'Swahili',
              'Amharic',
              'Yoruba',
              'Zulu',
              'Hausa',
              'Arabic',
              'English',
              'French',
              'Portuguese',
            ].map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        {/* Country Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Country</h3>
          <select
            value={filters.country}
            onChange={(e) => onChange({ ...filters, country: e.target.value })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Countries</option>
            {[
              'Kenya',
              'Nigeria',
              'South Africa',
              'Egypt',
              'Ethiopia',
              'Ghana',
              'Morocco',
              'Tanzania',
              'Uganda',
            ].map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ModelFilters;