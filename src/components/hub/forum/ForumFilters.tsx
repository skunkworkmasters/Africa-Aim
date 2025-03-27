import React, { useState } from 'react';
import { Filter, TrendingUp, Clock, Star, Search } from 'lucide-react';
import CreateForumPostModal from './CreateForumPostModal';

interface ForumFiltersProps {
  onFilterChange: (filter: 'trending' | 'latest' | 'top') => void;
  activeFilter: 'trending' | 'latest' | 'top';
  onSearch: (query: string) => void;
}

const ForumFilters: React.FC<ForumFiltersProps> = ({ 
  onFilterChange, 
  activeFilter,
  onSearch
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <div className="flex bg-white rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <button 
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium border-r border-gray-300 dark:border-gray-700 ${
                activeFilter === 'trending' 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => onFilterChange('trending')}
            >
              <TrendingUp className="h-4 w-4" />
              Trending
            </button>
            <button 
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium border-r border-gray-300 dark:border-gray-700 ${
                activeFilter === 'latest' 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => onFilterChange('latest')}
            >
              <Clock className="h-4 w-4" />
              Latest
            </button>
            <button 
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium ${
                activeFilter === 'top' 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => onFilterChange('top')}
            >
              <Star className="h-4 w-4" />
              Top
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Create Post
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {showCreateModal && (
        <CreateForumPostModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={() => {
            // Refresh posts after creation
            setShowCreateModal(false);
          }}
        />
      )}
    </>
  );
};

export default ForumFilters;
