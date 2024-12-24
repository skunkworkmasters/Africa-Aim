// src/hooks/usePosts.ts

import { useState, useEffect } from 'react';
import { Post } from '../types/hub';
import { posts as mockPosts } from '../data/posts'; // Importing mock data from posts.ts

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Here you can implement filtering, sorting, etc., if needed
        // For simplicity, we'll just set the posts directly
        setPosts(mockPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]); // Optionally, set to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading };
};

export default usePosts;
