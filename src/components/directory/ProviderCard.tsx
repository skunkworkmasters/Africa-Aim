import React from 'react';
import { Star, MapPin, Shield, ExternalLink } from 'lucide-react';
import { Provider } from '../../types/provider';

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={provider.logo}
              alt={provider.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                {provider.verified && (
                  <Shield className="h-5 w-5 text-blue-500" />
                )}
              </div>
              <p className="text-sm text-gray-500">{provider.type}</p>
            </div>
          </div>
          {provider.sponsored && (
            <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
              Sponsored
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">
              {provider.rating} ({provider.reviewCount})
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{provider.location}</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600 line-clamp-2">
          {provider.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {provider.services.map((service) => (
            <span
              key={service}
              className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
            Contact Provider
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;