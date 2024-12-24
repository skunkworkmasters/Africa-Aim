import React from 'react';
import { Download, ThumbsUp, ExternalLink } from 'lucide-react';
import { Model } from '../../../types/hub';
import { formatDistanceToNow } from '../../../utils/formatters';

interface ModelCardProps {
  model: Model;
  onViewDetails: (model: Model) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onViewDetails }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {model.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              by {model.owner}
            </p>
          </div>
          {model.huggingfaceUrl && (
            <a
              href={model.huggingfaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {model.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20 rounded-full">
            {model.type}
          </span>
          <span className="px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full">
            {model.industry}
          </span>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <span className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            {model.downloads}
          </span>
          <span className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {model.likes}
          </span>
          <span>
            Updated {formatDistanceToNow(new Date(model.updatedAt))}
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => onViewDetails(model)}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Details
          </button>
          <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            Contact Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;