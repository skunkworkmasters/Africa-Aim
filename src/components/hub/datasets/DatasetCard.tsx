import React from 'react';
import { Download, ThumbsUp, Database } from 'lucide-react';
import { Dataset } from '../../../types/hub';
import { formatDistanceToNow } from '../../../utils/formatters';
import { formatFileSize } from '../../../utils/fileUtils';

interface DatasetCardProps {
  dataset: Dataset;
  onViewDetails: (dataset: Dataset) => void;
}

const DatasetCard: React.FC<DatasetCardProps> = ({ dataset, onViewDetails }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {dataset.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              by {dataset.owner}
            </p>
          </div>
          <Database className="h-5 w-5 text-gray-400" />
        </div>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {dataset.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/20 rounded-full">
            {dataset.type}
          </span>
          <span className="px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full">
            {dataset.format}
          </span>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <span className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            {dataset.downloads}
          </span>
          <span className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {dataset.likes}
          </span>
          <span>{formatFileSize(dataset.size)}</span>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => onViewDetails(dataset)}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            View Details
          </button>
          <button className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatasetCard;