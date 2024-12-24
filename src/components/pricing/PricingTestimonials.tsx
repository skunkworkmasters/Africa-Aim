import React from 'react';

const testimonials = [
  {
    content: "Africa AIM's enterprise solution has transformed how we implement AI across our organization. The support team is exceptional.",
    author: "Sarah Johnson",
    role: "CTO at TechAfrica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
  },
  {
    content: "As a freelance AI developer, the Professional plan gives me all the tools I need to deliver high-quality solutions to my clients.",
    author: "Michael Okonjo",
    role: "AI Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
  },
];

const PricingTestimonials = () => {
  return (
    <div className="max-w-5xl mx-auto mt-24">
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
            <div className="mt-4 flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.author}
              />
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTestimonials;