import React from 'react';
import PostCard from './PostCard';
import PostFilters from './PostFilters';
import { Post } from '../../../types/hub';
import LoadingState from '../../common/LoadingState';

interface PostFeedProps {
  posts: Post[];
  isLoading: boolean;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, isLoading }) => {
  return (
    <div>
      <PostFilters />
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostFeed;