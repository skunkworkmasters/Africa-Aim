import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { enterprisePlans, professionalPlans } from '../../data/pricingPlans';
import type { Plan } from '../../types/pricing';

interface PricingTabsProps {
  currency: {
    code: string;
    symbol: string;
  };
}

const PricingTabs: React.FC<PricingTabsProps> = ({ currency }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState('enterprise');

  const formatPrice = (price: number) => {
    return `${currency.symbol}${price}`;
  };

  const plans = activeTab === 'enterprise' ? enterprisePlans : professionalPlans;

  return (
    <div className="space-y-12">
      {/* Billing Toggle */}
      <div className="flex justify-center">
        <div className="relative bg-gray-100 p-0.5 rounded-lg inline-flex">
          <button
            onClick={() => setIsAnnual(false)}
            className={`${
              !isAnnual ? 'bg-white shadow-sm' : ''
            } relative px-6 py-2 rounded-md text-sm font-medium transition-all`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`${
              isAnnual ? 'bg-white shadow-sm' : ''
            } relative px-6 py-2 rounded-md text-sm font-medium transition-all`}
          >
            Annual
            <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plan Type Tabs */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setActiveTab('enterprise')}
          className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
            activeTab === 'enterprise'
              ? 'bg-purple-100 text-purple-700'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Enterprise Solutions
        </button>
        <button
          onClick={() => setActiveTab('professional')}
          className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
            activeTab === 'professional'
              ? 'bg-purple-100 text-purple-700'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Professional Freelancer
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan: Plan) => (
          <div
            key={plan.name}
            className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
              plan.highlighted
                ? 'relative bg-white border-2 border-purple-500 scale-105'
                : 'bg-white'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-5 inset-x-0 flex justify-center">
                <span className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-600">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  {formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                </span>
                <span className="text-base font-medium text-gray-500">/month</span>
              </p>
              <button
                className={`mt-8 block w-full rounded-md px-4 py-2 text-sm font-semibold text-center transition-colors ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                {plan.cta}
              </button>
            </div>

            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900">What's included</h3>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex space-x-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-500">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTabs;