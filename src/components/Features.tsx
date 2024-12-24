import React from 'react';
import { Store, Users, BookOpen, Code } from 'lucide-react';

const features = [
  {
    title: 'AI Marketplace',
    description: 'Connect with top AI service providers and access innovative solutions tailored for African markets.',
    icon: Store,
  },
  {
    title: 'Professional Directory',
    description: 'Discover AI experts, researchers, and companies driving innovation across Africa.',
    icon: Users,
  },
  {
    title: 'Education Hub',
    description: 'Access world-class AI education resources and certification programs.',
    icon: BookOpen,
  },
  {
    title: 'API Services',
    description: 'Integrate powerful AI capabilities into your applications with our API marketplace.',
    icon: Code,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Accelerate Your AI Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to succeed in Africa's growing AI ecosystem
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity" />
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;