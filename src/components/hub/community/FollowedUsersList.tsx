import React from 'react';
import { useFollowedUsers } from '../../../hooks/useFollowedUsers';
import { UserMinus } from 'lucide-react';

const FollowedUsersList = () => {
  const { users, isLoading, unfollowUser } = useFollowedUsers();

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-3 animate-pulse">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-1" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You're not following anyone yet
        </p>
        <button className="mt-2 text-sm text-purple-600 hover:text-purple-700">
          Discover users to follow
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-3 group">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user.title}
            </p>
          </div>
          <button
            onClick={() => unfollowUser(user.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-red-500"
            title="Unfollow"
          >
            <UserMinus className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowedUsersList;