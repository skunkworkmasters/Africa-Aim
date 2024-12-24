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
            onClick={() => onChange(rating === minimum ? 0 : rating)}
            className={`p-1 rounded-full transition-colors ${
              rating <= minimum ? 'text-yellow-400' : 'text-gray-300'
            } hover:scale-110`}
            aria-label={`${rating} stars`}
          >
            <Star className="h-5 w-5 fill-current" />
          </button>
        ))}
      </div>
      {minimum > 0 && (
        <p className="text-sm text-gray-600">
          Showing providers with {minimum}+ stars
        </p>
      )}
    </div>
  );
};

export default RatingFilter;