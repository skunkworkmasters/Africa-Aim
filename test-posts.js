// Test script to create forum and community posts
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

// Supabase configuration
const supabaseUrl = 'https://rfrbzxpuzsluzdrnvtyc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcmJ6eHB1enNsdXpkcm52dHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMDcwNzcsImV4cCI6MjA1ODU4MzA3N30.NBEEQtcRHXv31XN11TPRzjM02boVzXmQn_KTTTYdUX4';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to create a post
async function createPost(content, isForum) {
  const postType = isForum ? 'Forum' : 'Community';
  console.log(`Creating ${postType} post: "${content}"`);
  
  try {
    // First, get the current user (or sign in anonymously if needed)
    const { data: userData, error: userError } = await supabase.auth.getUser();
    
    if (userError) {
      console.error('User error:', userError.message);
      return;
    }
    
    if (!userData.user) {
      console.log('No authenticated user. Attempting anonymous sign-in...');
      const { error: signInError } = await supabase.auth.signInAnonymously();
      
      if (signInError) {
        console.error('Anonymous sign-in error:', signInError.message);
        return;
      }
      
      // Get the user again after sign-in
      const { data: newUserData, error: newUserError } = await supabase.auth.getUser();
      
      if (newUserError || !newUserData.user) {
        console.error('Failed to get user after sign-in:', newUserError?.message);
        return;
      }
      
      console.log('Anonymous sign-in successful');
      userData.user = newUserData.user;
    }
    
    // Create post data
    const postData = {
      id: uuidv4(),
      content: content,
      tags: [`${postType.toLowerCase()}-test`],
      image_url: null,
      user_id: userData.user.id,
      inserted_at: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      is_forum: isForum
    };
    
    // Insert the post
    const { error: insertError } = await supabase
      .from('posts')
      .insert(postData);
    
    if (insertError) {
      console.error(`Error creating ${postType} post:`, insertError);
      
      if (insertError.code === '42501') {
        console.error('This is a Row-Level Security (RLS) permission error.');
        console.error('You need to update your Supabase RLS policies to allow inserts.');
      }
    } else {
      console.log(`${postType} post created successfully!`);
    }
  } catch (error) {
    console.error(`Error in createPost (${postType}):`, error.message);
  }
}

// Test creating both types of posts
async function runTests() {
  console.log('Starting post creation tests...');
  
  // Sign in anonymously first
  console.log('Signing in anonymously...');
  const { data, error } = await supabase.auth.signInAnonymously();
  
  if (error) {
    console.error('Failed to sign in anonymously:', error.message);
    return;
  }
  
  console.log('Signed in successfully as:', data.user.id);
  
  // Create a forum post
  await createPost('This is a test forum post', true);
  
  // Create a community post
  await createPost('This is a test community post', false);
  
  console.log('Tests completed!');
}

// Run the tests
runTests();
