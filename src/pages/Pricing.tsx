import React, { useState } from 'react';
import PricingHeader from '../components/pricing/PricingHeader';
import PricingTabs from '../components/pricing/PricingTabs';
import PricingFAQ from '../components/pricing/PricingFAQ';
import PricingTestimonials from '../components/pricing/PricingTestimonials';

const Pricing = () => {
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '$' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PricingHeader onCurrencyChange={setCurrency} />
        
        <div className="mt-16">
          <PricingTabs currency={currency} />
        </div>

        <div className="mt-24 border-t border-gray-200 pt-16">
          <PricingTestimonials />
        </div>

        <div className="mt-24">
          <PricingFAQ />
        </div>
      </div>
    </div>
  );
};

export default Pricing;