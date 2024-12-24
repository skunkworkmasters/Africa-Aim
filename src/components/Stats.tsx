import React from 'react';

const stats = [
  { id: 1, name: 'AI Professionals', value: '10,000+' },
  { id: 2, name: 'Companies', value: '500+' },
  { id: 3, name: 'Countries', value: '54' },
  { id: 4, name: 'Projects Completed', value: '25,000+' },
];

const Stats = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Africa's Leading AI Community
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Join thousands of professionals and organizations driving AI innovation across the continent
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8 hover:bg-white/10 transition-colors">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-emerald-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;