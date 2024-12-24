import React, { useState } from 'react';
import DatasetGrid from './DatasetGrid';
import DatasetFilters from './DatasetFilters';
import DatasetDetailsModal from './DatasetDetailsModal';
import { Dataset, DatasetFilters as DatasetFiltersType } from '../../../types/hub';
import { useDatasets } from '../../../hooks/useDatasets';

const DatasetTab = () => {
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);
  const [filters, setFilters] = useState<DatasetFiltersType>({
    types: [],
    formats: [],
    industry: '',
    size: '',
    language: '',
  });

  const { datasets, isLoading } = useDatasets(filters);

  return (
    <div className="flex gap-8">
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <DatasetFilters filters={filters} onChange={setFilters} />
      </aside>
      
      <div className="flex-1">
        <DatasetGrid
          datasets={datasets}
          isLoading={isLoading}
          onViewDetails={setSelectedDataset}
        />
      </div>

      {selectedDataset && (
        <DatasetDetailsModal
          dataset={selectedDataset}
          onClose={() => setSelectedDataset(null)}
        />
      )}
    </div>
  );
};

export default DatasetTab;