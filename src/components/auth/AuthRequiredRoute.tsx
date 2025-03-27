import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useAuth as useSupabaseAuth } from '../../contexts/SupabaseAuthContext';
import { TabType } from '../../types/hub';

interface AuthRequiredRouteProps {
  children: React.ReactNode;
  allowForumOnly?: boolean;
}

const AuthRequiredRoute: React.FC<AuthRequiredRouteProps> = ({ 
  children, 
  allowForumOnly = false 
}) => {
  const { user } = useAuth();
  const { user: supabaseUser, loading: supabaseLoading } = useSupabaseAuth();
  const location = useLocation();
  
  // Check if user is authenticated in either system
  const isAuthenticated = !!user || !!supabaseUser;
  
  // If forum-only access is allowed, check if the current tab is 'forum'
  if (allowForumOnly && !isAuthenticated) {
    const searchParams = new URLSearchParams(location.search);
    const currentTab = searchParams.get('tab') as TabType | null;
    
    // If the current tab is 'forum', allow access
    if (currentTab === 'forum') {
      return <>{children}</>;
    }
    
    // If no tab is specified, redirect to forum tab
    if (!currentTab) {
      return <Navigate to="/hub?tab=forum" state={{ from: location }} replace />;
    }
    
    // Otherwise, redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // For non-forum pages or when forum-only access is not allowed,
  // check authentication as usual
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If authenticated, allow access to the requested page
  return <>{children}</>;
};

export default AuthRequiredRoute;
