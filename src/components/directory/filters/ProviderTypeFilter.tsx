import React from 'react';

const providerTypes = [
  'Enterprise',
  'Startup',
  'Freelancer',
  'Research Lab',
  'Academic Institution',
];

interface ProviderTypeFilterProps {
  selected: string[];
  onChange: (types: string[]) => void;
}

const ProviderTypeFilter: React.FC<ProviderTypeFilterProps> = ({ selected, onChange }) => {
  const handleChange = (type: string) => {
    if (selected.includes(type)) {
      onChange(selected.filter(t => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Provider Type</h3>
      <div className="space-y-2">
        {providerTypes.map(type => (
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

export default ProviderTypeFilter;