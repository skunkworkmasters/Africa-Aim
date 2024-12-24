import { useState, useEffect } from 'react';
import { Provider } from '../types/provider';
import { ProviderLocation } from '../types/map';
import { getProviderCoordinates } from '../utils/mapUtils';
import { LatLngBounds, latLng } from 'leaflet';

export const useProviderLocations = (providers: Provider[]) => {
  const [locations, setLocations] = useState<ProviderLocation[]>([]);
  const [bounds, setBounds] = useState<LatLngBounds>(
    new LatLngBounds(
      [8.619543, 11.595547], // Center of Africa
      [8.619543, 11.595547]
    )
  );

  useEffect(() => {
    const providerLocations = providers.map(provider => ({
      id: provider.id,
      provider,
      ...getProviderCoordinates(provider.location),
      address: provider.location
    }));

    setLocations(providerLocations);

    // Calculate bounds
    const lats = providerLocations.map(loc => loc.lat);
    const lngs = providerLocations.map(loc => loc.lng);
    
    if (lats.length && lngs.length) {
      const southWest = latLng(
        Math.min(...lats) - 5,
        Math.min(...lngs) - 5
      );
      const northEast = latLng(
        Math.max(...lats) + 5,
        Math.max(...lngs) + 5
      );
      setBounds(new LatLngBounds(southWest, northEast));
    }
  }, [providers]);

  return { locations, bounds };
};