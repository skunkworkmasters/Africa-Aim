import React from 'react';
import PostFeed from './PostFeed';
import CommunitySidebar from './CommunitySidebar';
import { usePosts } from '../../../hooks/usePosts';

const CommunityTab = () => {
  const { posts, isLoading } = usePosts();

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <PostFeed posts={posts} isLoading={isLoading} />
      </div>
      <aside className="hidden lg:block w-80">
        <CommunitySidebar />
      </aside>
    </div>
  );
};

export default CommunityTab;