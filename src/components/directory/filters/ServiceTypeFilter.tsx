import React from 'react';
import { serviceTypes } from '../../../data/constants';

interface ServiceTypeFilterProps {
  selected: string[];
  onChange: (types: string[]) => void;
}

const ServiceTypeFilter: React.FC<ServiceTypeFilterProps> = ({ selected, onChange }) => {
  const handleChange = (type: string) => {
    if (selected.includes(type)) {
      onChange(selected.filter(t => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Service Types</h3>
      <div className="space-y-2">
        {serviceTypes.map(type => (
          <label key={type} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(type)}
              onChange={() => handleChange(type)}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600">{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ServiceTypeFilter;