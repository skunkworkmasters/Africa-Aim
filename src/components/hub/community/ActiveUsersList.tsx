import React from 'react';
import { useActiveUsers } from '../../../hooks/useActiveUsers';
import { Circle } from 'lucide-react';

const ActiveUsersList = () => {
  const { users, isLoading } = useActiveUsers();

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-3 animate-pulse">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-3">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <Circle className="absolute -bottom-0.5 -right-0.5 h-3 w-3 text-green-500 fill-current" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user.activity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveUsersList;