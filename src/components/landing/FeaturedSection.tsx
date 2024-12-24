import React from 'react';
import ServiceSlider from '../sliders/ServiceSlider';
import ProviderSlider from '../sliders/ProviderSlider';
import TestimonialGrid from '../testimonials/TestimonialGrid';

const FeaturedSection = () => {
  return (
    <div className="space-y-0">
      <ServiceSlider />
      <ProviderSlider />
      <TestimonialGrid />
    </div>
  );
};

export default FeaturedSection;