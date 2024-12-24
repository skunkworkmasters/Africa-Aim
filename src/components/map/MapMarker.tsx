import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { ProviderLocation } from '../../types/map';
import { CompanyLogo } from '../common/CompanyLogo';

interface MapMarkerProps {
  location: ProviderLocation;
}

const customIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const MapMarker: React.FC<MapMarkerProps> = ({ location }) => {
  return (
    <Marker position={[location.lat, location.lng]} icon={customIcon}>
      <Popup>
        <div className="flex items-start gap-3 p-1">
          <CompanyLogo companyName={location.provider.name} size={40} />
          <div>
            <h3 className="font-semibold text-gray-900">{location.provider.name}</h3>
            <p className="text-sm text-gray-600">{location.address}</p>
            <div className="mt-2 flex gap-2">
              {location.provider.services.slice(0, 2).map((service) => (
                <span
                  key={service}
                  className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full"
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
};