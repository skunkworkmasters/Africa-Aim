import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { Post } from '../../../types/hub';
import { formatDistanceToNow } from '../../../utils/formatters';
import CommentSection from './CommentSection';
import EditPostModal from './EditPostModal';
import DeletePostModal from './DeletePostModal';
import { useDeletePost } from '../../../hooks/useDeletePost';

interface PostCardProps {
  post: Post;
  onDelete?: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  const [showComments, setShowComments] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { deletePost, isLoading: isDeleting } = useDeletePost();

  const handleDeleteConfirm = async () => {
    try {
      await deletePost(post.id);
      setShowDeleteModal(false);
      onDelete?.(post.id);
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      {/* Post Header */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {post.author.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatDistanceToNow(new Date(post.createdAt))}
              </p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 text-gray-400 hover:text-gray-500 rounded-full"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10 py-1">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowEditModal(true);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Post
                </button>
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowDeleteModal(true);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Post
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Post Content */}
        <p className="mt-4 text-gray-600 dark:text-gray-300">{post.content}</p>

        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="mt-4 rounded-lg max-h-96 w-full object-cover"
          />
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex items-center gap-6">
          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
            <ThumbsUp className="w-5 h-5" />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:text-red-600">
            <ThumbsDown className="w-5 h-5" />
            <span className="text-sm">{post.dislikes}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">{post.comments.length} Comments</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && <CommentSection comments={post.comments} />}

      {/* Modals */}
      {showEditModal && (
        <EditPostModal
          post={post}
          onClose={() => setShowEditModal(false)}
          onSuccess={() => {
            setShowEditModal(false);
            // Optionally refresh the post data
          }}
        />
      )}

      <DeletePostModal
        isOpen={showDeleteModal}
        isLoading={isDeleting}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default PostCard;