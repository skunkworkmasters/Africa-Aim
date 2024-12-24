// src/hooks/useDatasets.ts
import { useState, useEffect } from 'react';
import { Dataset, DatasetFilters } from '../types/hub';
import { datasets as data_Datasets } from '../data/datasets'; // Corrected import

export const useDatasets = (filters: DatasetFilters) => {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDatasets = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Apply filters to the imported mock data
        let filtered = data_Datasets;

        // Ensure filters.types and filters.formats are arrays
        const { types = [], formats = [], industry, language, size } = filters;

        if (types.length > 0) {
          filtered = filtered.filter((dataset) => types.includes(dataset.type));
        }

        if (formats.length > 0) {
          filtered = filtered.filter((dataset) => formats.includes(dataset.format));
        }

        if (industry) {
          filtered = filtered.filter((dataset) => dataset.industry === industry);
        }

        if (language) {
          filtered = filtered.filter((dataset) => dataset.language === language);
        }

        if (size) {
          filtered = filtered.filter((dataset) => {
            const datasetSize = Number(dataset.size);
            if (isNaN(datasetSize)) return false; // Exclude datasets with invalid size

            switch (size) {
              case 'small':
                return datasetSize < 104857600; // < 100MB
              case 'medium':
                return datasetSize >= 104857600 && datasetSize < 1073741824; // 100MB - 1GB
              case 'large':
                return datasetSize >= 1073741824 && datasetSize < 10737418240; // 1GB - 10GB
              case 'xlarge':
                return datasetSize >= 10737418240; // > 10GB
              default:
                return true;
            }
          });
        }

        setDatasets(filtered);
      } catch (error) {
        console.error('Error fetching datasets:', error);
        setDatasets([]); // Optionally, set to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchDatasets();
  }, [filters]);

  return { datasets, isLoading };
};

export default useDatasets;
