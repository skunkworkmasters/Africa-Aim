import React from 'react';
import SupabaseDebugger from '../components/debug/SupabaseDebugger';
import PostCreationTest from '../components/debug/PostCreationTest';

const SupabaseDebugPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Supabase Connection Debugger</h1>
        <div className="space-y-8">
          <SupabaseDebugger />
          <PostCreationTest />
        </div>
      </div>
    </div>
  );
};

export default SupabaseDebugPage;
