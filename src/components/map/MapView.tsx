import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Provider } from '../../types/provider';
import { MapMarker } from './MapMarker';
import { useProviderLocations } from '../../hooks/useProviderLocations';

interface MapViewProps {
  providers: Provider[];
  className?: string;
}

const MapView: React.FC<MapViewProps> = ({ providers, className }) => {
  const { locations, bounds } = useProviderLocations(providers);

  return (
    <div className={`${className} relative`}>
      <MapContainer
        bounds={bounds}
        className="w-full h-full rounded-lg"
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <MapMarker key={location.id} location={location} />
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;