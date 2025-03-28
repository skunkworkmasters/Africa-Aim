import { useState } from 'react';
import { supabase } from '../utils/supabase';
import { v4 as uuidv4 } from 'uuid';

interface CreatePostData {
  content: string;
  tags?: string[]; // Make tags optional
  image: File | null;
  isForum?: boolean; // Add isForum field to distinguish between forum and community posts
}

export const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async (data: CreatePostData) => {
    console.log('useCreatePost: Starting post creation', data);
    setIsLoading(true);
    try {
      // Get current user
      console.log('useCreatePost: Getting current user');
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      console.log('useCreatePost: User check result', 
        userData?.user ? 'User found' : 'No user', 
        userError ? `Error: ${userError.message}` : 'No error'
      );
      
      if (userError || !userData.user) {
        throw new Error('User not authenticated');
      }

      let imageUrl = null;

      // Upload image to storage if present
      if (data.image) {
        console.log('useCreatePost: Uploading image', data.image.name);
        const fileExt = data.image.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `posts/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, data.image);

        console.log('useCreatePost: Image upload result', 
          uploadError ? `Error: ${uploadError.message}` : 'Success'
        );

        if (uploadError) {
          throw new Error('Error uploading image');
        }

        // Get public URL for the uploaded image
        const { data: urlData } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);

        imageUrl = urlData.publicUrl;
        console.log('useCreatePost: Image URL', imageUrl);
      }

      // Create post in database
      console.log('useCreatePost: Creating post in database');
      // Generate a numeric ID instead of UUID
      const numericId = Math.floor(Math.random() * 1000000000); // Large random number for ID
      const postData = {
          id: numericId,
          content: data.content,
          image_url: imageUrl,
          user_id: userData.user.id,
          inserted_at: new Date().toISOString(), // Changed from created_at to inserted_at
          is_forum: data.isForum ?? false, // Default to community post (false) if not specified
          tags: data.tags && data.tags.length > 0 ? data.tags : null // Include tags if they exist
      };
      console.log('useCreatePost: Post data', postData);
      
      const { error: insertError } = await supabase
        .from('posts')
        .insert(postData);

      console.log('useCreatePost: Insert result', 
        insertError ? `Error: ${insertError.message}` : 'Success'
      );

      if (insertError) {
        console.error('Insert error details:', insertError);
        
        if (insertError.code === '42501') {
          console.error('Row-Level Security Policy Error: Your Supabase database has RLS policies that are preventing this operation.');
          console.error('To fix this, you need to go to your Supabase dashboard and update the RLS policies for the posts table.');
          console.error('Add a policy that allows authenticated users to insert records, such as:');
          console.error(`
CREATE POLICY "Allow authenticated users to insert posts"
ON posts
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);
          `);
          
          throw new Error('Permission denied: You need to be authenticated to create posts, and your Supabase RLS policies must allow the operation.');
        } else if (insertError.code === '23502') {
          console.error('Not Null Violation: A required field is missing.');
          console.error('Check if your posts table schema matches the data you\'re trying to insert.');
          console.error('Current post data:', postData);
          
          throw new Error(`Error creating post: A required field is missing - ${insertError.message}`);
        } else if (insertError.code === '23505') {
          console.error('Unique Violation: A record with this ID already exists.');
          console.error('Try using a different ID or let Supabase generate one automatically.');
          
          throw new Error(`Error creating post: A record with this ID already exists - ${insertError.message}`);
        } else {
          console.error('Unknown error code:', insertError.code);
          throw new Error(`Error creating post: ${insertError.message}`);
        }
      }

      console.log('Post created successfully');
    } catch (error) {
      console.error('Error in createPost:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createPost, isLoading };
};
