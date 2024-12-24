import React from 'react';
import { formatDistanceToNow } from '../../utils/formatters';

const activities = [
  {
    id: 1,
    type: 'project',
    title: 'New project started',
    description: 'AI-Powered Agriculture Solution for TechFarm Ltd.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
  {
    id: 2,
    type: 'message',
    title: 'New client message',
    description: 'DataTech Solutions inquired about ML services',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: 3,
    type: 'review',
    title: 'New review received',
    description: '5-star review from AgriTech Solutions',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h2>
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, index) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {index !== activities.length - 1 && (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
                        {activity.type[0].toUpperCase()}
                      </span>
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {activity.title}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                        {activity.description}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {formatDistanceToNow(activity.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityFeed;