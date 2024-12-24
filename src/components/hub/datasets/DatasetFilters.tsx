import React from 'react';
import { Filter } from 'lucide-react';
import { DatasetFilters as DatasetFiltersType } from '../../../types/hub';

interface DatasetFiltersProps {
  filters: DatasetFiltersType;
  onChange: (filters: DatasetFiltersType) => void;
}

const DatasetFilters: React.FC<DatasetFiltersProps> = ({ filters, onChange }) => {
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
            {['3D', 'Audio', 'Geospatial', 'Image', 'Tabular', 'Text', 'Time-series', 'Video'].map((type) => (
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
                  className="h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Format Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Format</h3>
          <div className="space-y-2">
            {['CSV', 'JSON', 'Parquet', 'SQL', 'XML', 'ZIP'].map((format) => (
              <label key={format} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.formats.includes(format)}
                  onChange={(e) => {
                    const newFormats = e.target.checked
                      ? [...filters.formats, format]
                      : filters.formats.filter(f => f !== format);
                    onChange({ ...filters, formats: newFormats });
                  }}
                  className="h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{format}</span>
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
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

        {/* Size Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Size</h3>
          <select
            value={filters.size}
            onChange={(e) => onChange({ ...filters, size: e.target.value })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Any Size</option>
            <option value="small">Small (&lt; 100MB)</option>
            <option value="medium">Medium (100MB - 1GB)</option>
            <option value="large">Large (1GB - 10GB)</option>
            <option value="xlarge">Extra Large (&gt; 10GB)</option>
          </select>
        </div>

        {/* Language Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Language</h3>
          <select
            value={filters.language}
            onChange={(e) => onChange({ ...filters, language: e.target.value })}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
      </div>
    </div>
  );
};

export default DatasetFilters;