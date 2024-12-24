import React from 'react';
import { Bell, MessageSquare, Star, AlertCircle } from 'lucide-react';
import { formatDistanceToNow } from '../../utils/formatters';

const notifications = [
  {
    id: 1,
    type: 'message',
    title: 'New message from DataTech',
    description: 'Regarding the ML implementation project',
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    icon: MessageSquare,
    read: false,
  },
  {
    id: 2,
    type: 'review',
    title: 'New 5-star review',
    description: 'AgriTech left a new review',
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
    icon: Star,
    read: true,
  },
  {
    id: 3,
    type: 'alert',
    title: 'System Update',
    description: 'New features available',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    icon: AlertCircle,
    read: true,
  },
];

const NotificationCenter = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Notifications
        </h2>
        <Bell className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`flex p-4 rounded-lg ${
                notification.read
                  ? 'bg-white dark:bg-gray-800'
                  : 'bg-purple-50 dark:bg-purple-900/20'
              }`}
            >
              <div className="flex-shrink-0">
                <Icon className={`h-6 w-6 ${
                  notification.read
                    ? 'text-gray-400 dark:text-gray-500'
                    : 'text-purple-600 dark:text-purple-400'
                }`} />
              </div>
              <div className="ml-4 flex-1">
                <p className={`text-sm font-medium ${
                  notification.read
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-purple-900 dark:text-purple-100'
                }`}>
                  {notification.title}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {notification.description}
                </p>
                <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                  {formatDistanceToNow(notification.timestamp)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationCenter;