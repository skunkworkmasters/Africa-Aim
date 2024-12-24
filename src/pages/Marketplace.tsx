import React from 'react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader';
import FilterSidebar from '../components/marketplace/FilterSidebar';
import ServiceGrid from '../components/marketplace/ServiceGrid';
import { useMarketplaceFilters } from '../hooks/useMarketplaceFilters';

const Marketplace = () => {
  const { filters, setFilters, filteredServices } = useMarketplaceFilters();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <MarketplaceHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </aside>
          <main className="flex-1">
            <ServiceGrid services={filteredServices} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;