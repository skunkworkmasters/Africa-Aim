import React from 'react';
import { Calendar, MapPin, Flag, Briefcase, Clock, Award } from 'lucide-react';
import { Course } from '../../types/courses';
import { formatDate } from '../../utils/formatters';

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onViewDetails }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            course.type === 'Remote' 
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
              : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
          }`}>
            {course.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
              {course.title}
            </h3>
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {course.provider}
              </span>
              {course.verified && (
                <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded">
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
          {course.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="flex items-center">
              <img 
                src={`https://flagcdn.com/w20/${course.countryCode.toLowerCase()}.png`}
                alt={course.country}
                className="w-4 h-3 mr-2"
              />
              {course.location}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Briefcase className="w-4 h-4 mr-2" />
            {course.industry}
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            {course.duration}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Updated {formatDate(new Date(course.updatedAt))}
            </span>
          </div>
          {course.certificate && (
            <div className="flex items-center text-green-600 dark:text-green-400">
              <Award className="w-4 h-4 mr-1" />
              <span className="text-sm">Certificate</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${course.price}
            </span>
            {course.discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(course)}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;