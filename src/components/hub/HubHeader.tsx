import React from 'react';
import { Search } from 'lucide-react';
import { TabType } from '../../types/hub';

interface HubHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const HubHeader: React.FC<HubHeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resource Center</h1>
          </div>
          
          <div className="relative max-w-xs md:max-w-sm w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <button
            onClick={() => onTabChange('models')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'models'
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Models
          </button>
          <button
            onClick={() => onTabChange('datasets')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'datasets'
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Datasets
          </button>
          <button
            onClick={() => onTabChange('community')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'community'
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Community
          </button>
          <button
            onClick={() => onTabChange('forum')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'forum'
                ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Forum
          </button>
        </div>
      </div>
    </div>
  );
};

export default HubHeader;
