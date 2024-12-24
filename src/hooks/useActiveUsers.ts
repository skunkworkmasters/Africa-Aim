import { useState, useEffect } from 'react';
import { ActiveUser } from '../types/hub';

export const useActiveUsers = () => {
  const [users, setUsers] = useState<ActiveUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActiveUsers = async () => {
      setIsLoading(true);
      try {
        // Simulate API call with mock data
        const mockUsers: ActiveUser[] = [
          {
            id: '1',
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
            activity: 'Browsing Models',
            lastActive: new Date().toISOString(),
          },
          {
            id: '2',
            name: 'Michael Okonjo',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
            activity: 'Viewing Datasets',
            lastActive: new Date().toISOString(),
          },
          {
            id: '3',
            name: 'Amara Diallo',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
            activity: 'Posted in Community',
            lastActive: new Date().toISOString(),
          },
          {
            id: '4',
            name: 'David Mensah',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
            activity: 'Browsing Models',
            lastActive: new Date().toISOString(),
          },
          {
            id: '5',
            name: 'Fatima Hassan',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop',
            activity: 'Viewing Datasets',
            lastActive: new Date().toISOString(),
          },
        ];

        setUsers(mockUsers);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActiveUsers();

    // Simulate real-time updates
    const interval = setInterval(fetchActiveUsers, 30000);
    return () => clearInterval(interval);
  }, []);

  return { users, isLoading };
};