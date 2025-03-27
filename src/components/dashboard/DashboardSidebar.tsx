import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  MessageSquare, 
  BarChart3, 
  Package, 
  Users,
  UserCircle
} from 'lucide-react';

const menuItems = [
  { 
    label: 'Dashboard', 
    icon: LayoutDashboard, 
    path: '/provider/dashboard' 
  },
  { 
    label: 'Solutions', 
    icon: Package, 
    path: '/provider/solutions' 
  },
  { 
    label: 'Analytics', 
    icon: BarChart3, 
    path: '/provider/analytics' 
  },
  { 
    label: 'Messages', 
    icon: MessageSquare, 
    path: '/provider/messages' 
  },
  { 
    label: 'Customers', 
    icon: Users, 
    path: '/provider/customers' 
  },
  { 
    label: 'Community', 
    icon: UserCircle, 
    path: '/provider/community' 
  },
  { 
    label: 'Settings', 
    icon: Settings, 
    path: '/provider/settings' 
  },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <nav className="flex-1 flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 pt-5 pb-4">
            <div className="flex-1 px-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`
                      flex items-center px-4 py-2 text-sm font-medium rounded-md
                      ${isActive 
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
