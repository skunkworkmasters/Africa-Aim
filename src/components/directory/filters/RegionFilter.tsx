import React from 'react';
import { regions } from '../../../data/constants';

interface RegionFilterProps {
  selected: string[];
  onChange: (regions: string[]) => void;
}

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
      <h3 className="text-sm font-medium text-gray-900">Regions</h3>
      <div className="space-y-2">
        {regions.map(region => (
          <label key={region} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(region)}
              onChange={() => handleChange(region)}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600">{region}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;