import React from 'react';

interface IndustryFilterProps {
  selected: string[];
  onChange: (industries: string[]) => void;
}

const industries = [
  'Agriculture',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Education',
  'Energy',
  'Transportation',
  'Retail',
  'Telecom',
];

const IndustryFilter: React.FC<IndustryFilterProps> = ({ selected, onChange }) => {
  const handleChange = (industry: string) => {
    if (selected.includes(industry)) {
      onChange(selected.filter(i => i !== industry));
    } else {
      onChange([...selected, industry]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Industry</h3>
      <div className="space-y-2">
        {industries.map(industry => (
          <label key={industry} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(industry)}
              onChange={() => handleChange(industry)}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              {industry}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default IndustryFilter;