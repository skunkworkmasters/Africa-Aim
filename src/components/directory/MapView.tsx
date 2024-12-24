import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Provider } from '../../types/provider';
import { CompanyLogo } from '../common/CompanyLogo';

// Fix Leaflet default icon path issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = Icon.Default.prototype;
DefaultIcon.imagePath = '';
Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

interface MapViewProps {
  providers: Provider[];
  className?: string;
}

// Define coordinates for African regions
const regionCoordinates: { [key: string]: [number, number] } = {
  'East Africa': [1.2921, 36.8219],
  'West Africa': [6.5244, 3.3792],
  'North Africa': [30.0444, 31.2357],
  'Southern Africa': [-26.2041, 28.0473],
  'Central Africa': [-4.4419, 15.2663],
};

const MapView: React.FC<MapViewProps> = ({ providers, className }) => {
  // Calculate center of Africa
  const center: [number, number] = [8.7832, 34.5085];

  return (
    <div className={`${className} h-[400px]`}>
      <MapContainer
        center={center}
        zoom={3}
        className="h-full w-full rounded-lg"
        minZoom={2}
        maxZoom={8}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {providers.map((provider) => {
          const coordinates = regionCoordinates[provider.location];
          if (!coordinates) return null;

          // Add small random offset to prevent overlapping markers
          const jitter = () => (Math.random() - 0.5) * 2;
          const position: [number, number] = [
            coordinates[0] + jitter(),
            coordinates[1] + jitter()
          ];

          return (
            <Marker key={provider.id} position={position}>
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <CompanyLogo companyName={provider.name} size={32} />
                    <div>
                      <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                      <p className="text-sm text-gray-600">{provider.location}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {provider.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;