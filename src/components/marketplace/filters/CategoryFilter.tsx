import React from 'react';
import { categories } from '../../../data/constants';

interface CategoryFilterProps {
  selected: string[];
  onChange: (categories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selected, onChange }) => {
  const handleChange = (category: string) => {
    if (selected.includes(category)) {
      onChange(selected.filter(c => c !== category));
    } else {
      onChange([...selected, category]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Categories</h3>
      <div className="space-y-2">
        {categories.map(category => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => handleChange(category)}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;