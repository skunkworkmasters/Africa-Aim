import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-emerald-900 pt-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?auto=format&fit=crop&q=80&w=2000")',
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-emerald-900/90 backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Empowering Africa's</span>
            <span className="block text-emerald-400">AI Innovation Ecosystem</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect with AI professionals, access cutting-edge resources, and drive innovation across the continent. Join Africa's fastest-growing AI community.
          </p>
          <div className="mt-5 max-w-md mx-auto md:mt-8">
            {/* Buttons removed as requested */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-current text-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
