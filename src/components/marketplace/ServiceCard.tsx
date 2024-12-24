import React from 'react';
import { MapPin } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    provider: string;
    description: string;
    image: string;
    categories: string[];
    type: string;
    region: string;
    country: string;
    city: string;
    tags: string[];
  };
  viewMode: 'grid' | 'list';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, viewMode }) => {
  return (
    <div className={`
      bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden
      ${viewMode === 'grid' ? 'flex flex-col h-full' : 'flex flex-col sm:flex-row sm:h-64'}
    `}>
      <div className={`
        ${viewMode === 'grid' ? 'w-full h-48' : 'w-full sm:w-64 h-48 sm:h-full'}
      `}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{service.provider}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
          <MapPin className="h-4 w-4" />
          <span>{service.city}, {service.country}</span>
          <span className="text-gray-400">•</span>
          <span>{service.region}</span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
          {service.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-purple-600 dark:bg-purple-500 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
              View Details
            </button>
            <button className="flex-1 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors">
              Contact Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;