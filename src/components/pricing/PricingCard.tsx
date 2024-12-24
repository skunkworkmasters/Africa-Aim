import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import Tooltip from './Tooltip';

interface Feature {
  name: string;
  description?: string;
}

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Feature[];
  highlighted?: boolean;
  cta: string;
}

interface PricingCardProps {
  plan: Plan;
  isAnnual: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isAnnual }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
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
          <span className="text-4xl font-extrabold text-gray-900">${price}</span>
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
              <span className="text-sm text-gray-500 flex items-center">
                {feature.name}
                {feature.description && (
                  <Tooltip content={feature.description}>
                    <HelpCircle className="ml-1 h-4 w-4 text-gray-400" />
                  </Tooltip>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;