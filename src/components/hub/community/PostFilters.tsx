import React, { useState } from 'react';
import { Filter, TrendingUp, Clock, Star } from 'lucide-react';
import CreatePostModal from './CreatePostModal';

const PostFilters = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <div className="flex bg-white rounded-lg border border-gray-300">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-purple-600 border-r border-gray-300">
              <TrendingUp className="h-4 w-4" />
              Trending
            </button>
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 border-r border-gray-300">
              <Clock className="h-4 w-4" />
              Latest
            </button>
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700">
              <Star className="h-4 w-4" />
              Top
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Create Post
        </button>
      </div>

      {showCreateModal && (
        <CreatePostModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={() => {
            // Optionally refresh the posts list
          }}
        />
      )}
    </>
  );
};

export default PostFilters;