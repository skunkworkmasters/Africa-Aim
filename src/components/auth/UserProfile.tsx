import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../contexts/SupabaseAuthContext';

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getDashboardPath = () => {
    // This would be based on user type in a real implementation
    return '/provider/dashboard';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
          {user.email ? user.email.charAt(0).toUpperCase() : <User className="h-5 w-5" />}
        </div>
        <span className="hidden md:inline-block">{user.email?.split('@')[0] || 'User'}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user.email || 'User'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user.user_metadata?.name || 'Account'}
            </p>
          </div>
          
          <Link
            to={getDashboardPath()}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
          
          <Link
            to="/provider/community"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-4 w-4 mr-2" />
            Community
          </Link>
          
          <Link
            to="/provider/settings"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
          
          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
