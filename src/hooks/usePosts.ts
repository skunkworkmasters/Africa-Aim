import { useState, useEffect, useCallback } from 'react';
import { Post } from '../types/hub';
import { supabase } from '../utils/supabase';
import { posts as mockPosts } from '../data/posts'; // Fallback to mock data if needed

export const usePosts = (initialFilter: 'trending' | 'latest' | 'top' = 'latest') => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<'trending' | 'latest' | 'top'>(initialFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchPosts = useCallback(async () => {
    console.log('usePosts: Starting to fetch posts', { filter, searchQuery });
    setIsLoading(true);
    try {
      // Fetch posts from Supabase
      console.log('usePosts: Building query');
      let query = supabase
        .from('posts')
        .select(`
          id,
          content,
          image_url,
          inserted_at,
          user_id,
          is_forum,
          profiles(id, username, avatar_url)
        `);

      // Apply search filter if provided
      if (searchQuery) {
        console.log('usePosts: Applying search filter', searchQuery);
        query = query.or(`content.ilike.%${searchQuery}%, tags.cs.{${searchQuery}}`);
      }

      // Apply sorting based on filter
      console.log('usePosts: Applying sort filter', filter);
      if (filter === 'latest') {
        query = query.order('inserted_at', { ascending: false });
      } else if (filter === 'top') {
        // Default to sorting by inserted_at if likes column doesn't exist
        query = query.order('inserted_at', { ascending: false });
      } else {
        // Trending - a combination of recency and engagement
        // This is a simplified approach - in a real app you might use a more complex algorithm
        query = query.order('inserted_at', { ascending: false });
      }

      console.log('usePosts: Executing query');
      const { data, error } = await query;

      console.log('usePosts: Query result', 
        error ? `Error: ${error.message}` : `Success: ${data?.length || 0} posts found`
      );

      if (error) {
        console.error('Error fetching posts:', error);
        
        if (error.code === '42501') {
          console.log('usePosts: Permission denied due to Row-Level Security. Falling back to mock data.');
        } else {
          console.log('usePosts: Falling back to mock data due to error:', error.message);
        }
        
        // Fallback to mock data
        setPosts(mockPosts);
        return;
      }

      if (data) {
        console.log('usePosts: Transforming data');
        // Transform the data to match our Post type
        const transformedPosts: Post[] = data.map(item => ({
          id: item.id,
          content: item.content,
          createdAt: item.inserted_at, // Changed from created_at to inserted_at
          likes: 0, // Default to 0 since the likes column doesn't exist
          dislikes: 0, // Default to 0 since the dislikes column doesn't exist
          tags: [], // Default to empty array since tags column doesn't exist
          image: item.image_url,
          author: {
            id: item.user_id,
            name: item.profiles ? item.profiles[0]?.username || 'Anonymous' : 'Anonymous',
            avatar: item.profiles ? item.profiles[0]?.avatar_url || '' : ''
          },
          comments: [] // We would fetch comments separately in a real app
        }));

        console.log('usePosts: Setting posts', transformedPosts.length);
        setPosts(transformedPosts);
      }
    } catch (error) {
      console.error('Error in fetchPosts:', error);
      console.log('usePosts: Falling back to mock data due to exception');
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
