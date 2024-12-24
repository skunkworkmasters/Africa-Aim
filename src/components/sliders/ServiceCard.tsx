import React from 'react';
import { ServiceData } from '../../types/marketplace';
import { CompanyLogo } from '../common/CompanyLogo';

interface ServiceCardProps {
  service: ServiceData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{service.provider}</p>
          </div>
          <CompanyLogo companyName={service.provider} />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 rounded-full">
            {service.categories[0]}
          </span>
          <button className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};