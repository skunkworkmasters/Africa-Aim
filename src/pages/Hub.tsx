import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAuth as useSupabaseAuth } from '../contexts/SupabaseAuthContext';
import HubHeader from '../components/hub/HubHeader';
import ModelTab from '../components/hub/models/ModelTab';
import DatasetTab from '../components/hub/datasets/DatasetTab';
import CommunityTab from '../components/hub/community/CommunityTab';
import ForumTab from '../components/hub/forum/ForumTab';
import { TabType } from '../types/hub';

const Hub = () => {
  const [activeTab, setActiveTab] = useState<TabType>('models');
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { user: supabaseUser } = useSupabaseAuth();
  
  // Check if user is authenticated in either system
  const isAuthenticated = !!user || !!supabaseUser;

  useEffect(() => {
    // Get the tab from the URL query parameter
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab') as TabType | null;
    
    // If user is not authenticated and trying to access a tab other than forum,
    // redirect to login
    if (!isAuthenticated && tabParam && tabParam !== 'forum') {
      navigate('/login', { state: { from: location } });
      return;
    }
    
    // If user is not authenticated and no tab is specified,
    // default to forum tab
    if (!isAuthenticated && !tabParam) {
      navigate('/hub?tab=forum', { replace: true });
      return;
    }
    
    // Set the active tab if a valid tab is provided in the URL
    if (tabParam && ['models', 'datasets', 'community', 'forum'].includes(tabParam)) {
      setActiveTab(tabParam);
    } else if (isAuthenticated && !tabParam) {
      // If authenticated user and no tab specified, default to models
      navigate('/hub?tab=models', { replace: true });
    }
  }, [location, isAuthenticated, navigate]);
  
  // Custom tab change handler to check authentication
  const handleTabChange = (tab: TabType) => {
    if (!isAuthenticated && tab !== 'forum') {
      // If not authenticated and trying to access a protected tab,
      // redirect to login
      navigate('/login', { state: { from: { pathname: '/hub', search: `?tab=${tab}` } } });
    } else {
      // Otherwise, update the URL and the active tab
      navigate(`/hub?tab=${tab}`);
      setActiveTab(tab);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'models':
        return <ModelTab />;
      case 'datasets':
        return <DatasetTab />;
      case 'community':
        return <CommunityTab />;
      case 'forum':
        return <ForumTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <HubHeader activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Hub;
