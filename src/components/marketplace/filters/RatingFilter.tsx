import React from 'react';
import { Star } from 'lucide-react';

interface RatingFilterProps {
  minimum: number;
  onChange: (rating: number) => void;
}

const RatingFilter: React.FC<RatingFilterProps> = ({ minimum, onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Minimum Rating</h3>
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(rating)}
            className={`p-1 rounded-full ${
              rating <= minimum ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            <Star className="h-5 w-5 fill-current" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;