import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface Post {
  id: number;
  title: string;
  content: string;
  user_id: string;
  inserted_at: string;
  likes_count: number;
  dislikes_count: number;
  comments_count: number;
  is_forum: boolean;
}

interface Author {
  id: string;
  username: string;
  avatar_url: string;
}

interface PostWithAuthor extends Post {
  author: Author | null;
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isForum, setIsForum] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, [isForum]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Query posts with author information
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          author:user_id (
            id,
            username,
            avatar_url
          )
        `)
        .eq('is_forum', isForum)
        .order('inserted_at', { ascending: false })
        .limit(10);

      if (error) {
        throw error;
      }

      setPosts(data || []);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const togglePostType = () => {
    setIsForum(!isForum);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {isForum ? 'Forum Posts' : 'Community Posts'}
        </h2>
        <button
          onClick={togglePostType}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          Switch to {isForum ? 'Community' : 'Forum'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No posts found. Be the first to create a post!
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={post.author?.avatar_url || 'https://via.placeholder.com/40'}
                    alt={post.author?.username || 'User'}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{post.title || post.content.substring(0, 60)}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Posted by {post.author?.username || 'Anonymous'} on{' '}
                    {new Date(post.inserted_at).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">👍 {post.likes_count}</span>
                    <span className="mr-4">👎 {post.dislikes_count}</span>
                    <span>💬 {post.comments_count} comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsList;
