import React from 'react';
import CurrencySelector from './CurrencySelector';

interface PricingHeaderProps {
  onCurrencyChange: (currency: { code: string; symbol: string }) => void;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({ onCurrencyChange }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="mt-5 text-xl text-gray-500">
        Choose the perfect plan for your needs. All plans include a 30-day money-back guarantee.
      </p>
      <div className="mt-8 flex justify-center items-center gap-4">
        <CurrencySelector onCurrencyChange={onCurrencyChange} />
      </div>
    </div>
  );
};

export default PricingHeader;