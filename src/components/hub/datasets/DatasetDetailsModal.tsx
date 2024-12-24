import React from 'react';
import { X, Download, ThumbsUp, Database, Calendar, FileText } from 'lucide-react';
import { Dataset } from '../../../types/hub';
import { formatDate } from '../../../utils/formatters';
import { formatFileSize } from '../../../utils/fileUtils';

interface DatasetDetailsModalProps {
  dataset: Dataset;
  onClose: () => void;
}

const DatasetDetailsModal: React.FC<DatasetDetailsModalProps> = ({ dataset, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 pt-6 pb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dataset.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  by {dataset.owner}
                </p>
              </div>
              <Database className="w-6 h-6 text-emerald-500" />
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p>{dataset.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Dataset Details
                </h4>
                <dl className="mt-2 space-y-3">
                  <div className="flex items-center">
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Type</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{dataset.type}</dd>
                  </div>
                  <div className="flex items-center">
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Format</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{dataset.format}</dd>
                  </div>
                  <div className="flex items-center">
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Size</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {formatFileSize(dataset.size)}
                    </dd>
                  </div>
                  <div className="flex items-center">
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Industry</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{dataset.industry}</dd>
                  </div>
                  <div className="flex items-center">
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Language</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{dataset.language}</dd>
                  </div>
                  <div className="flex items-center">
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Country</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{dataset.country}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Usage Statistics
                </h4>
                <dl className="mt-2 space-y-3">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 text-gray-400 mr-2" />
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Downloads</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{dataset.downloads}</dd>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 text-gray-400 mr-2" />
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Likes</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{dataset.likes}</dd>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Created</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {formatDate(new Date(dataset.createdAt))}
                    </dd>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <dt className="text-sm text-gray-500 dark:text-gray-400 w-24">Updated</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {formatDate(new Date(dataset.updatedAt))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                Dataset Documentation
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <FileText className="w-4 h-4 mr-2" />
                  README.md
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  View the documentation for data structure, schema, and usage guidelines.
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
                Download Dataset
              </button>
              <button className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                Contact Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetDetailsModal;