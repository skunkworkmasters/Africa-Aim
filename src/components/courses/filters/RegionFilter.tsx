import React from 'react';

interface RegionFilterProps {
  selected: string[];
  onChange: (regions: string[]) => void;
}

const regions = [
  'East Africa',
  'West Africa',
  'North Africa',
  'Southern Africa',
  'Central Africa',
];

const RegionFilter: React.FC<RegionFilterProps> = ({ selected, onChange }) => {
  const handleChange = (region: string) => {
    if (selected.includes(region)) {
      onChange(selected.filter(r => r !== region));
    } else {
      onChange([...selected, region]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Region</h3>
      <div className="space-y-2">
        {regions.map(region => (
          <label key={region} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(region)}
              onChange={() => handleChange(region)}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              {region}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;