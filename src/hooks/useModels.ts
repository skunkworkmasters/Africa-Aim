import { useState, useEffect } from 'react';
import { Model, ModelFilters } from '../types/hub';
import { models as dataModels } from '../data/models'; // Importing mock data

export const useModels = (filters: ModelFilters) => {
  const [models, setModels] = useState<Model[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchModels = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Apply filters to the imported mock data
        let filtered = dataModels;

        if (filters.types && filters.types.length > 0) {
          filtered = filtered.filter((model) => filters.types.includes(model.type));
        }

        if (filters.industry) {
          filtered = filtered.filter((model) => model.industry === filters.industry);
        }

        if (filters.language) {
          filtered = filtered.filter((model) => model.language === filters.language);
        }

        if (filters.country) {
          filtered = filtered.filter((model) => model.country === filters.country);
        }

        setModels(filtered);
      } catch (error) {
        console.error('Error fetching models:', error);
        setModels([]); // Optionally, set to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchModels();
  }, [filters]);

  return { models, isLoading };
};

export default useModels;



// import { useState, useEffect } from 'react';
// import { Model, ModelFilters } from '../types/hub';

// export const useModels = (filters: ModelFilters) => {
//   const [models, setModels] = useState<Model[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchModels = async () => {
//       setIsLoading(true);
//       try {
//         // Simulate API call with mock data
//         const mockModels: Model[] = [
//           {
//             id: '1',
//             name: 'AgriVision AI',
//             owner: 'TechFarm Solutions',
//             description: 'Computer vision model for crop disease detection and yield prediction',
//             type: 'Computer Vision',
//             industry: 'Agriculture',
//             language: 'English',
//             country: 'Kenya',
//             downloads: 1234,
//             likes: 89,
//             createdAt: '2024-01-15T10:00:00Z',
//             updatedAt: '2024-02-20T15:30:00Z',
//             huggingfaceUrl: 'https://huggingface.co/models/techfarm/agrivision',
//           },
//           // Add more mock models...
//         ];

//         // Apply filters
//         let filtered = mockModels;
        
//         if (filters.types.length > 0) {
//           filtered = filtered.filter(model => filters.types.includes(model.type));
//         }
        
//         if (filters.industry) {
//           filtered = filtered.filter(model => model.industry === filters.industry);
//         }
        
//         if (filters.language) {
//           filtered = filtered.filter(model => model.language === filters.language);
//         }
        
//         if (filters.country) {
//           filtered = filtered.filter(model => model.country === filters.country);
//         }

//         setModels(filtered);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchModels();
//   }, [filters]);

//   return { models, isLoading };
// };

// export default useModels;