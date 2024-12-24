import { useState, useEffect, useCallback } from 'react';
import { FollowedUser } from '../types/hub';

export const useFollowedUsers = () => {
  const [users, setUsers] = useState<FollowedUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFollowedUsers = async () => {
    setIsLoading(true);
    try {
      // Simulate API call with mock data
      const mockUsers: FollowedUser[] = [
        {
          id: '1',
          name: 'Dr. Amina Kone',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
          title: 'AI Research Lead',
          lastPost: '2024-03-09T15:00:00Z',
        },
        {
          id: '2',
          name: 'John Mbeki',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
          title: 'ML Engineer',
          lastPost: '2024-03-10T09:30:00Z',
        },
        {
          id: '3',
          name: 'Grace Osei',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop',
          title: 'Data Scientist',
          lastPost: '2024-03-10T11:15:00Z',
        },
      ];

      setUsers(mockUsers);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowedUsers();
  }, []);

  const unfollowUser = useCallback(async (userId: string) => {
    // Simulate API call
    setUsers(users => users.filter(user => user.id !== userId));
  }, []);

  return { users, isLoading, unfollowUser };
};