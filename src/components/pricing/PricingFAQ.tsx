import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.',
  },
  {
    question: 'What happens after my trial ends?',
    answer: 'After your 30-day trial, your account will automatically switch to your selected plan. We will send reminders before the trial ends.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied, contact our support team for a full refund.',
  },
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto mt-24">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
        Frequently asked questions
      </h2>
      <dl className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="pt-6">
            <dt className="text-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="text-left w-full flex justify-between items-start text-gray-400"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 h-7 flex items-center">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6" />
                  ) : (
                    <Plus className="h-6 w-6" />
                  )}
                </span>
              </button>
            </dt>
            {openIndex === index && (
              <dd className="mt-2 pr-12">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
};

export default PricingFAQ;