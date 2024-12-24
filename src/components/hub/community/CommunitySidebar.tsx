import React from 'react';
import { Users } from 'lucide-react';
import ActiveUsersList from './ActiveUsersList';
import FollowedUsersList from './FollowedUsersList';

const CommunitySidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-purple-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Active Users
          </h2>
        </div>
        <ActiveUsersList />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Following
        </h2>
        <FollowedUsersList />
      </div>
    </div>
  );
};

export default CommunitySidebar;