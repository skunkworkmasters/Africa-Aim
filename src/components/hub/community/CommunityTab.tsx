import React from 'react';
import PostFeed from './PostFeed';
import CommunitySidebar from './CommunitySidebar';
import PostFilters from './PostFilters';
import { usePosts } from '../../../hooks/usePosts';
import LoadingState from '../../common/LoadingState';

const CommunityTab = () => {
  const { 
    posts, 
    isLoading, 
    filter, 
    updateFilter, 
    updateSearchQuery,
    refreshPosts
  } = usePosts('trending');

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
    <div className="flex gap-8">
      <div className="flex-1">
        <PostFilters 
          onFilterChange={handleFilterChange} 
          activeFilter={filter}
          onSearch={handleSearch}
        />
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden p-4">
              <div className="flex items-center mb-4">
                <img 
                  src={post.author.avatar || '/default-avatar.png'} 
                  alt={post.author.name} 
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{post.author.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
              {post.image && (
                <div className="mb-4">
                  <img 
                    src={post.image} 
                    alt="Post attachment" 
                    className="rounded-lg max-h-96 w-auto"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1">
                    <span>👍</span>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <span>👎</span>
                    <span>{post.dislikes}</span>
                  </button>
                </div>
                <button className="flex items-center space-x-1">
                  <span>💬</span>
                  <span>{post.comments.length} comments</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="hidden lg:block w-80">
        <CommunitySidebar />
      </aside>
    </div>
  );
};

export default CommunityTab;
