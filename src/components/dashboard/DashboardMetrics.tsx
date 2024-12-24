import React from 'react';
import { TrendingUp, Users, Briefcase, Star } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

const metrics = [
  {
    id: 1,
    name: 'Total Revenue',
    value: 150000,
    change: '+12.5%',
    changeType: 'increase',
    icon: TrendingUp,
    formatter: (value: number) => formatCurrency(value),
  },
  {
    id: 2,
    name: 'Active Projects',
    value: 25,
    change: '+3',
    changeType: 'increase',
    icon: Briefcase,
    formatter: (value: number) => value.toString(),
  },
  {
    id: 3,
    name: 'New Leads',
    value: 48,
    change: '+7',
    changeType: 'increase',
    icon: Users,
    formatter: (value: number) => value.toString(),
  },
  {
    id: 4,
    name: 'Average Rating',
    value: 4.8,
    change: '+0.2',
    changeType: 'increase',
    icon: Star,
    formatter: (value: number) => value.toFixed(1),
  },
];

const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {metric.name}
                </p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {metric.formatter(metric.value)}
                  </p>
                  <p className={`ml-2 text-sm ${
                    metric.changeType === 'increase' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {metric.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardMetrics;