import { supabase } from './supabase';
import { AuthError } from '@supabase/supabase-js';

// Test auth status
const checkAuthStatus = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    console.log('Auth status check:', data.session ? 'User is logged in' : 'No active session');
    if (error) {
      console.error('Auth status check error:', error);
    }
  } catch (err) {
    console.error('Error checking auth status:', err);
  }
};

// Run auth status check
checkAuthStatus();

export const signInWithGitHub = async () => {
  try {
    console.log('Attempting to sign in with GitHub...');
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    console.log('GitHub sign in result:', error ? 'Error' : 'Success');
    return { data, error };
  } catch (error) {
    console.error('Error signing in with GitHub:', error);
    return { data: null, error: error as AuthError };
  }
};

export const signInWithGoogle = async () => {
  try {
    console.log('Attempting to sign in with Google...');
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    console.log('Google sign in result:', error ? 'Error' : 'Success');
    return { data, error };
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return { data: null, error: error as AuthError };
  }
};

export const signOut = async () => {
  try {
    console.log('Attempting to sign out...');
    const { error } = await supabase.auth.signOut();
    console.log('Sign out result:', error ? 'Error' : 'Success');
    return { error };
  } catch (error) {
    console.error('Error signing out:', error);
    return { error: error as AuthError };
  }
};

export const getCurrentUser = async () => {
  try {
    console.log('Attempting to get current user...');
    const { data, error } = await supabase.auth.getUser();
    console.log('Get current user result:', error ? 'Error' : (data.user ? 'User found' : 'No user'));
    return { user: data.user, error };
  } catch (error) {
    console.error('Error getting current user:', error);
    return { user: null, error: error as AuthError };
  }
};
