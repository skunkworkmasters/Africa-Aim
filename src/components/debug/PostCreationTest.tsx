import React, { useState, KeyboardEvent } from 'react';
import { useCreatePost } from '../../hooks/useCreatePost';
import { usePosts } from '../../hooks/usePosts';

const PostCreationTest: React.FC = () => {
  const [forumContent, setForumContent] = useState('');
  const [communityContent, setCommunityContent] = useState('');
  const [forumTags, setForumTags] = useState<string[]>([]);
  const [communityTags, setCommunityTags] = useState<string[]>([]);
  const [forumTagInput, setForumTagInput] = useState('');
  const [communityTagInput, setCommunityTagInput] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { createPost, isLoading } = useCreatePost();
  const { refreshPosts } = usePosts();

  const handleForumTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && forumTagInput.trim()) {
      e.preventDefault();
      const tag = forumTagInput.trim().replace(/^#/, '');
      if (tag && !forumTags.includes(tag)) {
        setForumTags([...forumTags, tag]);
      }
      setForumTagInput('');
    }
  };

  const handleCommunityTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && communityTagInput.trim()) {
      e.preventDefault();
      const tag = communityTagInput.trim().replace(/^#/, '');
      if (tag && !communityTags.includes(tag)) {
        setCommunityTags([...communityTags, tag]);
      }
      setCommunityTagInput('');
    }
  };

  const removeForumTag = (tagToRemove: string) => {
    setForumTags(forumTags.filter(tag => tag !== tagToRemove));
  };

  const removeCommunityTag = (tagToRemove: string) => {
    setCommunityTags(communityTags.filter(tag => tag !== tagToRemove));
  };

  const handleCreateForumPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forumContent.trim()) return;

    setMessage('');
    setError('');
    
    try {
      await createPost({
        content: forumContent,
        tags: forumTags.length > 0 ? forumTags : undefined,
        image: null,
        isForum: true // This is a forum post
      });
      
      setMessage('Forum post created successfully!');
      setForumContent('');
      setForumTags([]);
      refreshPosts(); // Refresh the posts list
    } catch (err: any) {
      setError(`Failed to create forum post: ${err.message}`);
    }
  };

  const handleCreateCommunityPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!communityContent.trim()) return;

    setMessage('');
    setError('');
    
    try {
      await createPost({
        content: communityContent,
        tags: communityTags.length > 0 ? communityTags : undefined,
        image: null,
        isForum: false // This is a community post
      });
      
      setMessage('Community post created successfully!');
      setCommunityContent('');
      setCommunityTags([]);
      refreshPosts(); // Refresh the posts list
    } catch (err: any) {
      setError(`Failed to create community post: ${err.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Post Creation Test</h2>
      
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Forum Post Creation */}
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Create Forum Post</h3>
          <form onSubmit={handleCreateForumPost}>
            <textarea
              value={forumContent}
              onChange={(e) => setForumContent(e.target.value)}
              placeholder="Enter forum post content..."
              className="w-full h-32 p-3 text-gray-900 dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none mb-4"
            />
            
            {/* Tags input for forum posts */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {forumTags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeForumTag(tag)}
                      className="ml-1 text-purple-600 dark:text-purple-400 hover:text-purple-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={forumTagInput}
                onChange={(e) => setForumTagInput(e.target.value)}
                onKeyDown={handleForumTagKeyDown}
                placeholder="Add tags (press Enter)"
                className="w-full p-2 text-gray-900 dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !forumContent.trim()}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating...' : 'Create Forum Post'}
            </button>
          </form>
        </div>
        
        {/* Community Post Creation */}
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Create Community Post</h3>
          <form onSubmit={handleCreateCommunityPost}>
            <textarea
              value={communityContent}
              onChange={(e) => setCommunityContent(e.target.value)}
              placeholder="Enter community post content..."
              className="w-full h-32 p-3 text-gray-900 dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none mb-4"
            />
            
            {/* Tags input for community posts */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {communityTags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeCommunityTag(tag)}
                      className="ml-1 text-purple-600 dark:text-purple-400 hover:text-purple-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={communityTagInput}
                onChange={(e) => setCommunityTagInput(e.target.value)}
                onKeyDown={handleCommunityTagKeyDown}
                placeholder="Add tags (press Enter)"
                className="w-full p-2 text-gray-900 dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !communityContent.trim()}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating...' : 'Create Community Post'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCreationTest;
