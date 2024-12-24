import React from 'react';
import { Star, MapPin } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'AI-Powered Agriculture Solutions',
    provider: 'AgriTech Solutions',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400',
    category: 'Agriculture',
    rating: 4.8,
    reviews: 156,
    location: 'Kenya',
    description: 'Smart farming solutions using AI and IoT technologies.',
  },
  {
    id: 2,
    title: 'Healthcare Diagnostic AI',
    provider: 'MediTech Africa',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400',
    category: 'Healthcare',
    rating: 4.9,
    reviews: 203,
    location: 'Nigeria',
    description: 'AI-powered diagnostic tools for healthcare providers.',
  },
  {
    id: 3,
    title: 'Financial Analytics Platform',
    provider: 'FinAI Solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    category: 'Finance',
    rating: 4.7,
    reviews: 178,
    location: 'South Africa',
    description: 'Advanced financial analytics and prediction models.',
  },
  // Add more services as needed
];

const Marketplace = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured AI Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover innovative AI solutions from across Africa
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-600">
                    {service.category}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                    <div className="ml-6 flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {service.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;