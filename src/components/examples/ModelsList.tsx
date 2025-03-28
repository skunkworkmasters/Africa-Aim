import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

interface Model {
  id: number;
  name: string;
  description: string;
  model_type: string;
  industry: string;
  language: string;
  country: string;
  downloads: number;
  likes: number;
  inserted_at: string;
  updated_at: string;
  huggingface_url?: string;
  owner_id: string;
}

interface Owner {
  id: string;
  username: string;
}

interface ModelWithOwner extends Model {
  owner: Owner | null;
}

const ModelsList: React.FC = () => {
  const [models, setModels] = useState<ModelWithOwner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [modelTypes, setModelTypes] = useState<string[]>([]);

  useEffect(() => {
    fetchModels();
    fetchModelTypes();
  }, [selectedType]);

  const fetchModels = async () => {
    console.log('ModelsList: Starting to fetch models', { selectedType });
    try {
      setLoading(true);
      setError(null);

      console.log('ModelsList: Building query');
      let query = supabase
        .from('models')
        .select(`
          *,
          owner:owner_id (
            id,
            username
          )
        `)
        .order('likes', { ascending: false });

      if (selectedType) {
        console.log('ModelsList: Applying type filter', selectedType);
        query = query.eq('model_type', selectedType);
      }

      console.log('ModelsList: Executing query');
      const { data, error } = await query;

      console.log('ModelsList: Query result', 
        error ? `Error: ${error.message}` : `Success: ${data?.length || 0} models found`
      );

      if (error) {
        console.error('ModelsList: Error details:', error);
        
        if (error.code === '42501') {
          setError('Permission denied: Row-Level Security is preventing access to models. You may need to be authenticated.');
        } else {
          throw error;
        }
        return;
      }

      console.log('ModelsList: Setting models', data);
      setModels(data || []);
    } catch (err) {
      console.error('Error fetching models:', err);
      setError('Failed to fetch models');
    } finally {
      setLoading(false);
    }
  };

  const fetchModelTypes = async () => {
    console.log('ModelsList: Starting to fetch model types');
    try {
      console.log('ModelsList: Building types query');
      const { data, error } = await supabase
        .from('models')
        .select('model_type')
        .order('model_type');

      console.log('ModelsList: Types query result', 
        error ? `Error: ${error.message}` : `Success: ${data?.length || 0} types found`
      );

      if (error) {
        throw error;
      }

      // Extract unique model types
      const types = [...new Set(data?.map(item => item.model_type))];
      console.log('ModelsList: Setting model types', types);
      setModelTypes(types as string[]);
    } catch (err) {
      console.error('Error fetching model types:', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">AI Models</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Filter by type:</span>
          <select
            value={selectedType || ''}
            onChange={(e) => setSelectedType(e.target.value || null)}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="">All Types</option>
            {modelTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : models.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No models found. Be the first to add a model!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <div key={model.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{model.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    {model.model_type}
                  </span>
                  <span className="mx-2">•</span>
                  <span>By {model.owner?.username || 'Anonymous'}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {model.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <span className="mr-1">👍</span> {model.likes}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">⬇️</span> {model.downloads}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{model.language}</span>
                    <span>•</span>
                    <span>{model.country}</span>
                  </div>
                </div>
              </div>
              {model.huggingface_url && (
                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                  <a
                    href={model.huggingface_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    View on Hugging Face
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelsList;
