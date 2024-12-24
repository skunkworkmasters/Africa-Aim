import React, { useState } from 'react';
import HubHeader from '../components/hub/HubHeader';
import ModelTab from '../components/hub/models/ModelTab';
import DatasetTab from '../components/hub/datasets/DatasetTab';
import CommunityTab from '../components/hub/community/CommunityTab';
import { TabType } from '../types/hub';

const Hub = () => {
  const [activeTab, setActiveTab] = useState<TabType>('models');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'models':
        return <ModelTab />;
      case 'datasets':
        return <DatasetTab />;
      case 'community':
        return <CommunityTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <HubHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Hub;