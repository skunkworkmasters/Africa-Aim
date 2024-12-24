interface Coordinates {
  lat: number;
  lng: number;
}

const regionCoordinates: Record<string, Coordinates> = {
  'East Africa': { lat: 1.2921, lng: 36.8219 }, // Nairobi
  'West Africa': { lat: 6.5244, lng: 3.3792 }, // Lagos
  'North Africa': { lat: 30.0444, lng: 31.2357 }, // Cairo
  'Southern Africa': { lat: -26.2041, lng: 28.0473 }, // Johannesburg
  'Central Africa': { lat: -4.4419, lng: 15.2663 }, // Kinshasa
};

export const getProviderCoordinates = (location: string): Coordinates => {
  // Add some randomness to prevent markers from overlapping
  const jitter = () => (Math.random() - 0.5) * 2;
  const baseCoords = regionCoordinates[location] || regionCoordinates['East Africa'];
  
  return {
    lat: baseCoords.lat + jitter(),
    lng: baseCoords.lng + jitter(),
  };
};