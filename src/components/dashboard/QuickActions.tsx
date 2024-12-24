import React from 'react';
import { Plus, MessageSquare, FileText, Settings } from 'lucide-react';

const actions = [
  {
    name: 'Add New Solution',
    description: 'Create a new AI service listing',
    icon: Plus,
    href: '/provider/solutions/new',
  },
  {
    name: 'View Messages',
    description: 'Check your inbox',
    icon: MessageSquare,
    href: '/provider/messages',
  },
  {
    name: 'Generate Report',
    description: 'Create performance report',
    icon: FileText,
    href: '/provider/analytics/reports',
  },
  {
    name: 'Update Profile',
    description: 'Manage your settings',
    icon: Settings,
    href: '/provider/settings',
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Quick Actions
      </h2>
      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.name}
              href={action.href}
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    {action.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {action.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;