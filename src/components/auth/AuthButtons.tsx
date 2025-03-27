import React, { useState } from 'react';
import { signInWithGitHub, signInWithGoogle, signOut, getCurrentUser } from '../../lib/supabase';

const AuthButtons: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGitHubSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const { error } = await signInWithGitHub();
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const { error } = await signInWithGoogle();
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      setError(null);
      const { error } = await signOut();
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold">Authentication</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={handleGitHubSignIn}
          disabled={loading}
          className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Sign in with GitHub'}
        </button>
        
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Sign in with Google'}
        </button>
        
        <button
          onClick={handleSignOut}
          disabled={loading}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Sign Out'}
        </button>
      </div>
    </div>
  );
};

export default AuthButtons;
