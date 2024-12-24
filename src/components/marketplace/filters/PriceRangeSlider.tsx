import React from 'react';

interface PriceRangeSliderProps {
  range: [number, number];
  onChange: (range: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ range, onChange }) => {
  const [min, max] = range;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="0"
          max="10000"
          value={min}
          onChange={(e) => onChange([parseInt(e.target.value), max])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="10000"
          value={max}
          onChange={(e) => onChange([min, parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>${min}</span>
        <span>${max}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;