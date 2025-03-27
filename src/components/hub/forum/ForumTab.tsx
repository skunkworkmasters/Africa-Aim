import React from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle, Share2 } from 'lucide-react';
import { usePosts } from '../../../hooks/usePosts';
import ForumFilters from './ForumFilters';
import LoadingState from '../../common/LoadingState';

const ForumTab = () => {
  const { 
    posts, 
    isLoading, 
    filter, 
    updateFilter, 
    updateSearchQuery,
    refreshPosts
  } = usePosts('latest');

  // Handle filter changes
  const handleFilterChange = (newFilter: 'trending' | 'latest' | 'top') => {
    updateFilter(newFilter);
  };

  // Handle search
  const handleSearch = (query: string) => {
    updateSearchQuery(query);
  };

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Forum</h2>
      </div>

      <ForumFilters 
        onFilterChange={handleFilterChange} 
        activeFilter={filter}
        onSearch={handleSearch}
      />

      <div className="space-y-4">
        {posts.map((post) => {
          // Extract title from content (first line or first 60 chars)
          const title = post.content.split('\n')[0].substring(0, 60) + 
                      (post.content.length > 60 ? '...' : '');
          
          return (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <button className="text-gray-400 hover:text-purple-500">
                      <ThumbsUp className="h-5 w-5" />
                    </button>
                    <span className="text-sm font-medium my-1">{post.likes - post.dislikes}</span>
                    <button className="text-gray-400 hover:text-red-500">
                      <ThumbsDown className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <img 
                        src={post.author.avatar || '/default-avatar.png'} 
                        alt={post.author.name} 
                        className="h-5 w-5 rounded-full mr-1"
                      />
                      <span>Posted by {post.author.name}</span>
                      <span className="mx-1">•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{post.content}</p>
                    {post.image && (
                      <div className="mb-3">
                        <img 
                          src={post.image} 
                          alt="Post attachment" 
                          className="rounded-lg max-h-96 w-auto"
                        />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                      <button className="flex items-center hover:text-purple-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{post.comments.length} Comments</span>
                      </button>
                      <button className="flex items-center hover:text-purple-500">
                        <Share2 className="h-4 w-4 mr-1" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForumTab;
