import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { mockProviderData } from '../../data/mockData';

const ProviderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(mockProviderData.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="relative py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Providers</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mockProviderData.map((provider) => (
                <div 
                  key={provider.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-6 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {provider.name}
                        </h3>
                        <p className="text-sm text-gray-500">{provider.type}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < provider.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({provider.reviewCount} reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {provider.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {provider.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <button className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:text-purple-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:text-purple-600"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderSlider;
