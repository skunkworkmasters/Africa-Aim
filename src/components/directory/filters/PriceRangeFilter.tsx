import React from 'react';

interface PriceRangeFilterProps {
  range: [number, number];
  onChange: (range: [number, number]) => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ range, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={range[0]}
            onChange={(e) => onChange([Number(e.target.value), range[1]])}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            placeholder="Min"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            value={range[1]}
            onChange={(e) => onChange([range[0], Number(e.target.value)])}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;