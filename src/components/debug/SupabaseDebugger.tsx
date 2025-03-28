import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';

const SupabaseDebugger: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<'checking' | 'authenticated' | 'unauthenticated'>('checking');
  const [user, setUser] = useState<any>(null);
  const [dbStatus, setDbStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [dbError, setDbError] = useState<string | null>(null);
  const [insertStatus, setInsertStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [insertError, setInsertError] = useState<string | null>(null);
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [testTags, setTestTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const addLog = (message: string) => {
    setLogMessages(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  useEffect(() => {
    checkAuth();
    checkDbConnection();
  }, []);

  const checkAuth = async () => {
    try {
      addLog('Checking authentication status...');
      const { data, error } = await supabase.auth.getUser();
      
      if (error) {
        addLog(`Auth error: ${error.message}`);
        setAuthStatus('unauthenticated');
        return;
      }
      
      if (data.user) {
        addLog(`Authenticated as: ${data.user.email || data.user.id}`);
        setUser(data.user);
        setAuthStatus('authenticated');
      } else {
        addLog('Not authenticated');
        setAuthStatus('unauthenticated');
      }
    } catch (err: any) {
      addLog(`Auth check error: ${err.message}`);
      setAuthStatus('unauthenticated');
    }
  };

  const checkDbConnection = async () => {
    try {
      addLog('Testing database connection...');
      const { count, error } = await supabase
        .from('posts')
        .select('count', { count: 'exact', head: true });
      
      if (error) {
        addLog(`Database connection error: ${error.message}`);
        setDbStatus('error');
        setDbError(error.message);
        
        if (error.code === '42501') {
          addLog('This is a Row-Level Security (RLS) permission error.');
        }
        return;
      }
      
      addLog(`Database connected. Post count: ${count}`);
      setDbStatus('connected');
    } catch (err: any) {
      addLog(`Database connection error: ${err.message}`);
      setDbStatus('error');
      setDbError(err.message);
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      const tag = tagInput.trim().replace(/^#/, '');
      if (tag && !testTags.includes(tag)) {
        setTestTags([...testTags, tag]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTestTags(testTags.filter(tag => tag !== tagToRemove));
  };

  const testInsert = async () => {
    if (authStatus !== 'authenticated') {
      addLog('Cannot test insert: Not authenticated');
      return;
    }
    
    setInsertStatus('testing');
    try {
      addLog('Testing post insertion...');
      
      // Generate a random ID to avoid conflicts
      const testId = Math.floor(Math.random() * 1000000);
      
      const { error } = await supabase
        .from('posts')
        .insert({
          id: testId,
          content: 'Test post from debugger',
          user_id: user.id,
          inserted_at: new Date().toISOString(), // Changed from created_at to inserted_at
          tags: testTags.length > 0 ? testTags : null // Include tags if they exist
        });
      
      if (error) {
        addLog(`Insert error: ${error.message} (Code: ${error.code})`);
        setInsertStatus('error');
        setInsertError(error.message);
        
        if (error.code === '42501') {
          addLog('This is a Row-Level Security (RLS) permission error.');
          addLog('You need to update your Supabase RLS policies to allow inserts.');
        } else if (error.code === '23502') {
          addLog('Not Null Violation: A required field is missing.');
        } else if (error.code === '23505') {
          addLog('Unique Violation: A record with this ID already exists.');
        }
        return;
      }
      
      addLog('Test post inserted successfully!');
      setInsertStatus('success');
    } catch (err: any) {
      addLog(`Insert test error: ${err.message}`);
      setInsertStatus('error');
      setInsertError(err.message);
    }
  };

  const signInWithGitHub = async () => {
    try {
      addLog('Initiating GitHub sign-in...');
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });
      
      if (error) {
        addLog(`GitHub sign-in error: ${error.message}`);
      }
    } catch (err: any) {
      addLog(`GitHub sign-in error: ${err.message}`);
    }
  };

  const signOut = async () => {
    try {
      addLog('Signing out...');
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        addLog(`Sign-out error: ${error.message}`);
        return;
      }
      
      addLog('Signed out successfully');
      setAuthStatus('unauthenticated');
      setUser(null);
    } catch (err: any) {
      addLog(`Sign-out error: ${err.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Supabase Connection Debugger</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Authentication Status</h3>
          <div className="flex items-center mb-2">
            <span className="mr-2">Status:</span>
            {authStatus === 'checking' && <span className="text-yellow-500">Checking...</span>}
            {authStatus === 'authenticated' && <span className="text-green-500">Authenticated</span>}
            {authStatus === 'unauthenticated' && <span className="text-red-500">Not Authenticated</span>}
          </div>
          
          {user && (
            <div className="mb-2">
              <p><strong>User ID:</strong> {user.id}</p>
              <p><strong>Email:</strong> {user.email || 'N/A'}</p>
            </div>
          )}
          
          <div className="flex space-x-2">
            {authStatus === 'unauthenticated' && (
              <button 
                onClick={signInWithGitHub}
                className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded"
              >
                Sign in with GitHub
              </button>
            )}
            
            {authStatus === 'authenticated' && (
              <button 
                onClick={signOut}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Sign Out
              </button>
            )}
            
            <button 
              onClick={checkAuth}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Refresh Status
            </button>
          </div>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Database Connection</h3>
          <div className="flex items-center mb-2">
            <span className="mr-2">Status:</span>
            {dbStatus === 'checking' && <span className="text-yellow-500">Checking...</span>}
            {dbStatus === 'connected' && <span className="text-green-500">Connected</span>}
            {dbStatus === 'error' && <span className="text-red-500">Error</span>}
          </div>
          
          {dbError && (
            <div className="mb-2 text-red-500">
              <p><strong>Error:</strong> {dbError}</p>
            </div>
          )}
          
          <div className="flex space-x-2">
            <button 
              onClick={checkDbConnection}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Test Connection
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Insert Test</h3>
        <div className="flex items-center mb-2">
          <span className="mr-2">Status:</span>
          {insertStatus === 'idle' && <span className="text-gray-500">Not Tested</span>}
          {insertStatus === 'testing' && <span className="text-yellow-500">Testing...</span>}
          {insertStatus === 'success' && <span className="text-green-500">Success</span>}
          {insertStatus === 'error' && <span className="text-red-500">Error</span>}
        </div>
        
        {insertError && (
          <div className="mb-2 text-red-500">
            <p><strong>Error:</strong> {insertError}</p>
          </div>
        )}
        
        {/* Tags input for test post */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tags for Test Post:</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {testTags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center"
              >
                #{tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Add tags (press Enter)"
            className="w-full p-2 mb-3 text-gray-900 dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button 
          onClick={testInsert}
          disabled={authStatus !== 'authenticated'}
          className={`px-3 py-1 rounded ${
            authStatus === 'authenticated' 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Test Insert Post
        </button>
        {authStatus !== 'authenticated' && (
          <p className="text-sm text-red-500 mt-1">You must be authenticated to test insertion</p>
        )}
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Log</h3>
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded h-60 overflow-y-auto">
          {logMessages.map((msg, i) => (
            <div key={i} className="text-sm font-mono">{msg}</div>
          ))}
          {logMessages.length === 0 && (
            <div className="text-gray-500 italic">No log messages</div>
          )}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 rounded">
        <h3 className="text-lg font-semibold mb-2">Troubleshooting Tips</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>If you're not authenticated, sign in first.</li>
          <li>If you get a "42501" error code, you need to update your Supabase Row-Level Security (RLS) policies.</li>
          <li>Go to your Supabase dashboard, select your project, then "Authentication" → "Policies".</li>
          <li>Add a policy for the posts table that allows authenticated users to insert records.</li>
          <li>Example policy: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">CREATE POLICY "Allow authenticated users to insert posts" ON posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);</code></li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
        <h3 className="text-lg font-semibold mb-2">Database Schema Update</h3>
        <p className="mb-2">If you're getting a "tags column not found" error, you need to add the tags column to your posts table in Supabase:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Go to your Supabase dashboard and navigate to the SQL Editor</li>
          <li>Run the following SQL command to add a tags column to your posts table:</li>
          <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded mt-2 overflow-x-auto">
            <code>
              ALTER TABLE posts ADD COLUMN tags TEXT[];
            </code>
          </pre>
          <li>This adds a text array column that can store multiple tags for each post</li>
        </ol>
      </div>
    </div>
  );
};

export default SupabaseDebugger;
