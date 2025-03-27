import { useState, useEffect, useCallback } from 'react';
import { Post } from '../types/hub';
import { supabase } from '../lib/supabase';
import { posts as mockPosts } from '../data/posts'; // Fallback to mock data if needed

export const usePosts = (initialFilter: 'trending' | 'latest' | 'top' = 'latest') => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<'trending' | 'latest' | 'top'>(initialFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch posts from Supabase
      let query = supabase
        .from('posts')
        .select(`
          id,
          content,
          tags,
          image_url,
          created_at,
          likes,
          dislikes,
          user_id,
          profiles(id, username, avatar_url)
        `);

      // Apply search filter if provided
      if (searchQuery) {
        query = query.or(`content.ilike.%${searchQuery}%, tags.cs.{${searchQuery}}`);
      }

      // Apply sorting based on filter
      if (filter === 'latest') {
        query = query.order('created_at', { ascending: false });
      } else if (filter === 'top') {
        query = query.order('likes', { ascending: false });
      } else {
        // Trending - a combination of recency and engagement
        // This is a simplified approach - in a real app you might use a more complex algorithm
        query = query.order('created_at', { ascending: false });
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching posts:', error);
        // Fallback to mock data
        setPosts(mockPosts);
        return;
      }

      if (data) {
        // Transform the data to match our Post type
        const transformedPosts: Post[] = data.map(item => ({
          id: item.id,
          content: item.content,
          createdAt: item.created_at,
          likes: item.likes || 0,
          dislikes: item.dislikes || 0,
          tags: item.tags || [],
          image: item.image_url,
          author: {
            id: item.user_id,
            name: item.profiles ? item.profiles[0]?.username || 'Anonymous' : 'Anonymous',
            avatar: item.profiles ? item.profiles[0]?.avatar_url || '' : ''
          },
          comments: [] // We would fetch comments separately in a real app
        }));

        setPosts(transformedPosts);
      }
    } catch (error) {
      console.error('Error in fetchPosts:', error);
      // Fallback to mock data
      setPosts(mockPosts);
    } finally {
      setIsLoading(false);
    }
  }, [filter, searchQuery]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const updateFilter = (newFilter: 'trending' | 'latest' | 'top') => {
    setFilter(newFilter);
  };

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return { 
    posts, 
    isLoading, 
    filter,
    updateFilter,
    updateSearchQuery,
    refreshPosts: fetchPosts
  };
};

export default usePosts;
