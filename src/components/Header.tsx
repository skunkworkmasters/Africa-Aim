import React, { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardPath = () => {
    if (!user) return '/login';
    switch (user.category) {
      case 'provider':
        return '/provider/dashboard';
      case 'freelancer':
        return '/freelancer/dashboard';
      default:
        return '/consumer/dashboard';
    }
  };

  const menuItems = [
    { 
      label: 'Hub',
      path: '/hub',
    },
    { 
      label: 'Marketplace',
      path: '/marketplace',
    },
    { 
      label: 'Directory',
      path: '/directory',
    },
    { 
      label: 'Education',
      dropdown: [
        { label: 'Courses', path: '/courses' },
        { label: 'Certifications', path: '/certifications' },
        { label: 'Resources', path: '/resources' }
      ]
    },
    { 
      label: 'Pricing', 
      path: '/pricing' 
    },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-white text-xl font-bold">Africa AIM</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuItems.map((item) => (
                    <div key={item.label} className="relative group">
                      {item.path ? (
                        <Link
                          to={item.path}
                          className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div className="relative">
                          <button className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {item.label}
                          </button>
                          {item.dropdown && (
                            <div className="absolute hidden group-hover:block w-48 bg-gray-900 rounded-md shadow-lg py-1 z-50">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to={getDashboardPath()}
                    className="text-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white"
                    title="Sign out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label}>
                    <div className="text-gray-300 px-3 py-2 text-base font-medium">
                      {item.label}
                    </div>
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="text-gray-400 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}
              {user && (
                <Link
                  to={getDashboardPath()}
                  className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block w-full text-center text-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;