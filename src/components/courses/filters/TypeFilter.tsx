import React from 'react';

interface TypeFilterProps {
  selected: string[];
  onChange: (types: string[]) => void;
}

const courseTypes = [
  { id: 'models', label: 'Models & Algorithms' },
  { id: 'datasets', label: 'Data & Datasets' },
  { id: 'tools', label: 'Tools & Frameworks' },
];

const TypeFilter: React.FC<TypeFilterProps> = ({ selected, onChange }) => {
  const handleChange = (type: string) => {
    if (selected.includes(type)) {
      onChange(selected.filter(t => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Course Type</h3>
      <div className="space-y-2">
        {courseTypes.map(type => (
          <label key={type.id} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(type.id)}
              onChange={() => handleChange(type.id)}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              {type.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;