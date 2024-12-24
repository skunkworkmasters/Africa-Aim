import React from 'react';

interface LanguageFilterProps {
  selected: string[];
  onChange: (languages: string[]) => void;
}

const languages = [
  'English',
  'French',
  'Arabic',
  'Swahili',
  'Amharic',
  'Yoruba',
  'Zulu',
  'Portuguese',
];

const LanguageFilter: React.FC<LanguageFilterProps> = ({ selected, onChange }) => {
  const handleChange = (language: string) => {
    if (selected.includes(language)) {
      onChange(selected.filter(l => l !== language));
    } else {
      onChange([...selected, language]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Language</h3>
      <div className="space-y-2">
        {languages.map(language => (
          <label key={language} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(language)}
              onChange={() => handleChange(language)}
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              {language}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LanguageFilter;