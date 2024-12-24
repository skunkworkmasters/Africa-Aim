import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound' },
  { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi' },
  { code: 'MAD', symbol: 'MAD', name: 'Moroccan Dirham' },
];

interface CurrencySelectorProps {
  onCurrencyChange: (currency: { code: string; symbol: string }) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ onCurrencyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(currencies[0]);

  const handleSelect = (currency: typeof currencies[0]) => {
    setSelected(currency);
    onCurrencyChange({ code: currency.code, symbol: currency.symbol });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        <span className="mr-2">{selected.symbol}</span>
        {selected.code}
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 max-h-96 overflow-auto">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleSelect(currency)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>{currency.name}</span>
                <span className="text-gray-500">{currency.symbol} {currency.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;