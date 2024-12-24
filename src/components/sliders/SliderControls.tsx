import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export const SliderControls: React.FC<SliderControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onSelect,
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index 
                ? 'bg-purple-600 dark:bg-purple-400' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </>
  );
};