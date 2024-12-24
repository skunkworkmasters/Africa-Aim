import React from 'react';
import CourseGrid from '../../components/courses/CourseGrid';
import FilterSidebar from '../../components/courses/filters/FilterSidebar';
import CourseHeader from '../../components/courses/CourseHeader';
import { useCourses } from '../../hooks/useCourses';

const CoursesMarketplace = () => {
  const { courses, filters, setFilters, isLoading } = useCourses();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <CourseHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </aside>
          <main className="flex-1">
            <CourseGrid courses={courses} isLoading={isLoading} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CoursesMarketplace;