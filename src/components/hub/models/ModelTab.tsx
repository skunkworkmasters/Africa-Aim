import React, { useState } from 'react';
import ModelGrid from './ModelGrid';
import ModelFilters from './ModelFilters';
import ModelDetailsModal from './ModelDetailsModal';
import { Model, ModelFilters as ModelFiltersType } from '../../../types/hub';
import { useModels } from '../../../hooks/useModels';

const ModelTab = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [filters, setFilters] = useState<ModelFiltersType>({
    types: [],
    industry: '',
    language: '',
    country: '',
  });

  const { models, isLoading } = useModels(filters);

  return (
    <div className="flex gap-8">
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <ModelFilters filters={filters} onChange={setFilters} />
      </aside>
      
      <div className="flex-1">
        <ModelGrid
          models={models}
          isLoading={isLoading}
          onViewDetails={setSelectedModel}
        />
      </div>

      {selectedModel && (
        <ModelDetailsModal
          model={selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </div>
  );
};

export default ModelTab;