import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import CommunityTab from '../../components/hub/community/CommunityTab';

const CommunityPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Community</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Connect with other users, share insights, and join discussions.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <CommunityTab />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CommunityPage;
