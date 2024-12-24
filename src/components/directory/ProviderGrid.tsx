import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import ProviderCard from './ProviderCard';
import { Provider } from '../../types/provider';
import LoadingState from '../common/LoadingState';

interface ProviderGridProps {
  providers: Provider[];
  isLoading: boolean;
}

const ProviderGrid: React.FC<ProviderGridProps> = ({ providers, isLoading }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid'
                  ? 'bg-white shadow text-purple-600'
                  : 'text-gray-500'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list'
                  ? 'bg-white shadow text-purple-600'
                  : 'text-gray-500'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="relevance">Most Relevant</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>
        <p className="text-sm text-gray-500">
          {providers.length} providers found
        </p>
      </div>

      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-6'
        }
      >
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default ProviderGrid;