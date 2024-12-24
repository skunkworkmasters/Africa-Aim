import React from 'react';
import ProviderSearch from '../components/directory/ProviderSearch';
import ProviderGrid from '../components/directory/ProviderGrid';
import FilterSidebar from '../components/directory/FilterSidebar';
import { useProviderFilters } from '../hooks/useProviderFilters';

const ProviderDirectory = () => {
  const { filters, setFilters, filteredProviders, isLoading } = useProviderFilters();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Service Providers</h1>
          <p className="mt-2 text-lg text-gray-600">
            Building Africa’s Future with Local AI Innovations
          </p>
        </div>

        <ProviderSearch onSearch={(query) => setFilters({ ...filters, search: query })} />

        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </aside>

          <main className="flex-1">
            <ProviderGrid 
              providers={filteredProviders} 
              isLoading={isLoading} 
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProviderDirectory;