import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ProviderSearchProps {
  onSearch: (query: string) => void;
}

const ProviderSearch: React.FC<ProviderSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI service providers..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <button
          type="button"
          className="px-4 py-2 flex items-center gap-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span className="hidden sm:inline">Advanced Filters</span>
        </button>
      </div>
    </form>
  );
};

export default ProviderSearch;