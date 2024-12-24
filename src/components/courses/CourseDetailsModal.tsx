import React from 'react';
import { X, Calendar, Clock, Award, Book, Target, CheckCircle, Star, User } from 'lucide-react';
import { Course } from '../../types/courses';
import { formatDate } from '../../utils/formatters';

interface CourseDetailsModalProps {
  course: Course;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          {/* Header */}
          <div className="relative">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-gray-900/50 hover:bg-gray-900/75 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-8 py-6">
            {/* Title Section */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {course.title}
                </h2>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {course.instructor.name}
                    </span>
                  </div>
                  {course.verified && (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded-full">
                      Verified Instructor
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${course.price}
                </div>
                {course.discount && (
                  <div className="text-sm text-gray-500 line-through">
                    ${course.originalPrice}
                  </div>
                )}
              </div>
            </div>

            {/* Course Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Course Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {course.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    {course.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Prerequisites
                  </h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-300">{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Course Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          Duration
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {course.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          Start Date
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(new Date(course.schedule.startDate))}
                        </div>
                      </div>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Certificate
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Upon completion
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Course Curriculum
                  </h3>
                  <div className="space-y-2">
                    {course.curriculum.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      >
                        <Book className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Instructor Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                About the Instructor
              </h3>
              <div className="flex items-start gap-4">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {course.instructor.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {course.instructor.title}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Student Reviews
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.reviews.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    ({course.reviews.count} reviews)
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {course.reviews.items.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {review.user}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      {formatDate(new Date(review.date))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                Enroll Now
              </button>
              <button className="px-6 py-3 text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                Contact Instructor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;