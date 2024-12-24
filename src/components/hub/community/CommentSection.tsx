import React from 'react';
import { ThumbsUp, ThumbsDown, Reply } from 'lucide-react';
import { Comment } from '../../../types/hub';
import { formatDistanceToNow } from '../../../utils/formatters';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const renderComment = (comment: Comment) => (
    <div key={comment.id} className="flex gap-4">
      <img
        src={comment.author.avatar}
        alt={comment.author.name}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium text-gray-900 dark:text-white">
                {comment.author.name}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                {formatDistanceToNow(new Date(comment.createdAt))}
              </span>
            </div>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{comment.content}</p>
          <div className="mt-2 flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
              <ThumbsUp className="h-4 w-4" />
              <span className="text-sm">{comment.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-600">
              <ThumbsDown className="h-4 w-4" />
              <span className="text-sm">{comment.dislikes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
              <Reply className="h-4 w-4" />
              <span className="text-sm">Reply</span>
            </button>
          </div>
        </div>
        {comment.replies && (
          <div className="ml-8 mt-4 space-y-4">
            {comment.replies.map(renderComment)}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <div className="p-6 space-y-6">
        {comments.map(renderComment)}
      </div>
    </div>
  );
};

export default CommentSection;