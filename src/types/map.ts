import { Provider } from './provider';

export interface ProviderLocation {
  id: string;
  provider: Provider;
  lat: number;
  lng: number;
  address: string;
}