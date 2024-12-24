import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import SearchBar from './SearchBar';

const MarketplaceHeader = () => {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">AI Services Marketplace</h1>
          <div className="flex items-center gap-6">
            <SearchBar />
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceHeader;