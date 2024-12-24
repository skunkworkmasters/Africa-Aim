// src/hooks/useCourses.ts
import { useState, useEffect } from 'react';
import { Course, CourseFilters } from '../types/courses';
import { courses as mockCourses } from '../data/courses'; // Importing mock data from courses.ts

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<CourseFilters>({
    priceRange: [0, 1000],
    showFree: false,
    types: [],
    industries: [],
    regions: [],
    languages: [],
    countries: [],
    sortBy: 'relevance',
    search: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Apply filters to the imported mock data
        let filtered = mockCourses;

        // Destructure filters with default values to ensure they are defined
        const {
          search,
          types = [],
          industries = [],
          regions = [],
          languages = [],
          countries = [],
          showFree,
          priceRange,
          sortBy,
        } = filters;

        // Search Filter
        if (search) {
          const searchLower = search.toLowerCase();
          filtered = filtered.filter(
            (course) =>
              course.title.toLowerCase().includes(searchLower) ||
              course.description.toLowerCase().includes(searchLower)
          );
        }

        // Type Filter
        if (types.length > 0) {
          filtered = filtered.filter((course) => types.includes(course.type));
        }

        // Industry Filter
        if (industries.length > 0) {
          filtered = filtered.filter((course) =>
            industries.includes(course.industry)
          );
        }

        // Region Filter
        if (regions.length > 0) {
          // Assuming 'regions' correspond to parts of 'location'
          filtered = filtered.filter((course) =>
            regions.some((region) =>
              course.location.toLowerCase().includes(region.toLowerCase())
            )
          );
        }

        // Language Filter
        if (languages.length > 0) {
          filtered = filtered.filter((course) =>
            languages.includes(course.instructor.bio.split(' ')[0]) // Example logic
          );
        }

        // Country Filter
        if (countries.length > 0) {
          filtered = filtered.filter((course) =>
            countries.includes(course.country)
          );
        }

        // Price Filter
        if (showFree) {
          filtered = filtered.filter((course) => course.price === 0);
        } else {
          filtered = filtered.filter(
            (course) =>
              course.price >= priceRange[0] && course.price <= priceRange[1]
          );
        }

        // Sorting
        switch (sortBy) {
          case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
          case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
          case 'newest':
            filtered.sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            );
            break;
          case 'rating':
            filtered.sort((a, b) => b.reviews.rating - a.reviews.rating);
            break;
          default:
            // If 'relevance' or any other sortBy option, define default sorting logic
            break;
        }

        setCourses(filtered);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCourses([]); // Optionally, set to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [filters]);

  return { courses, filters, setFilters, isLoading };
};

export default useCourses;
