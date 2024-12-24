import React from 'react';
import ModelCard from './ModelCard';
import { Model } from '../../../types/hub';
import LoadingState from '../../common/LoadingState';

interface ModelGridProps {
  models: Model[];
  isLoading: boolean;
  onViewDetails: (model: Model) => void;
}

const ModelGrid: React.FC<ModelGridProps> = ({ models, isLoading, onViewDetails }) => {
  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model) => (
        <ModelCard
          key={model.id}
          model={model}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ModelGrid;