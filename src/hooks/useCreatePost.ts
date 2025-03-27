import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

interface CreatePostData {
  content: string;
  tags: string[];
  image: File | null;
}

export const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async (data: CreatePostData) => {
    setIsLoading(true);
    try {
      // Get current user
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError || !userData.user) {
        throw new Error('User not authenticated');
      }

      let imageUrl = null;

      // Upload image to storage if present
      if (data.image) {
        const fileExt = data.image.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `posts/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('images')
          .upload(filePath, data.image);

        if (uploadError) {
          throw new Error('Error uploading image');
        }

        // Get public URL for the uploaded image
        const { data: urlData } = supabase.storage
          .from('images')
          .getPublicUrl(filePath);

        imageUrl = urlData.publicUrl;
      }

      // Create post in database
      const { error: insertError } = await supabase
        .from('posts')
        .insert({
          id: uuidv4(),
          content: data.content,
          tags: data.tags,
          image_url: imageUrl,
          user_id: userData.user.id,
          created_at: new Date().toISOString(),
          likes: 0,
          dislikes: 0
        });

      if (insertError) {
        throw new Error('Error creating post');
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
