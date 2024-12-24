import React from 'react';

interface PriceFilterProps {
  range: [number, number];
  showFree: boolean;
  onChange: (range: [number, number], showFree: boolean) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ range, showFree, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Price Range</h3>
      
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={showFree}
          onChange={(e) => onChange(range, e.target.checked)}
          className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
        />
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
          Free Courses
        </span>
      </label>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={range[0]}
            onChange={(e) => onChange([Number(e.target.value), range[1]], showFree)}
            className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
            placeholder="Min"
          />
          <span className="text-gray-500 dark:text-gray-400">to</span>
          <input
            type="number"
            value={range[1]}
            onChange={(e) => onChange([range[0], Number(e.target.value)], showFree)}
            className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
            placeholder="Max"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {[100, 200, 500, 1000].map((price) => (
            <button
              key={price}
              onClick={() => onChange([0, price], showFree)}
              className={`px-3 py-1 text-sm rounded-full border ${
                range[1] === price
                  ? 'border-purple-600 text-purple-600 bg-purple-50 dark:bg-purple-900/20'
                  : 'border-gray-300 text-gray-600 hover:border-purple-600 hover:text-purple-600'
              }`}
            >
              Under ${price}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;