import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useAuth as useSupabaseAuth } from '../../contexts/SupabaseAuthContext';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import DashboardMetrics from '../../components/dashboard/DashboardMetrics';
import ActivityFeed from '../../components/dashboard/ActivityFeed';
import QuickActions from '../../components/dashboard/QuickActions';
import NotificationCenter from '../../components/dashboard/NotificationCenter';
import ProjectsOverview from '../../components/dashboard/ProjectsOverview';
import RevenueChart from '../../components/dashboard/RevenueChart';

const ProviderDashboard = () => {
  const { user } = useAuth();
  const { user: supabaseUser } = useSupabaseAuth();

  // If neither authentication system has a user, return null
  if (!user && !supabaseUser) return null;

  // Determine which user object to use
  const activeUser = user || supabaseUser;
  
  // Extract name from the appropriate user object
  const userName = user?.name || 
                  supabaseUser?.user_metadata?.name || 
                  supabaseUser?.email?.split('@')[0] || 
                  'User';

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome back, {userName}!
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Here's what's happening with your AI services today.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Add New Service
            </button>
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="mb-8">
          <DashboardMetrics />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Revenue Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <RevenueChart />
            </div>

            {/* Projects Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <ProjectsOverview />
            </div>

            {/* Activity Feed */}
            <ActivityFeed />
          </div>

          {/* Right Column - Secondary Content */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Actions */}
            <QuickActions />

            {/* Notifications */}
            <NotificationCenter />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProviderDashboard;
