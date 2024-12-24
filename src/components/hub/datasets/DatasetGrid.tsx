import React from 'react';
import DatasetCard from './DatasetCard';
import { Dataset } from '../../../types/hub';
import LoadingState from '../../common/LoadingState';

interface DatasetGridProps {
  datasets: Dataset[];
  isLoading: boolean;
  onViewDetails: (dataset: Dataset) => void;
}

const DatasetGrid: React.FC<DatasetGridProps> = ({ datasets, isLoading, onViewDetails }) => {
  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {datasets.map((dataset) => (
        <DatasetCard
          key={dataset.id}
          dataset={dataset}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default DatasetGrid;