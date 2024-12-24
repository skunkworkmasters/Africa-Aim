import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseDetailsModal from './CourseDetailsModal';
import { Course } from '../../types/courses';
import LoadingState from '../common/LoadingState';

interface CourseGridProps {
  courses: Course[];
  isLoading: boolean;
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses, isLoading }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onViewDetails={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
};

export default CourseGrid;