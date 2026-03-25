// Type definitions for the application
export interface Listing {
  id: number;
  address: string;
  neighborhood: string;
  rent: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  furnished: boolean;
  type: 'apartment' | 'studio' | 'room';
  latitude: number;
  longitude: number;
  link: string;
  posted_date: string;
  availability_date: string;
  agency: string;
  condition: 'furnished' | 'upholstered' | 'unfurnished';
  description: string;
  isFavorite?: boolean;
}

export type ViewType = 'list' | 'map';
export type NavigationType = 'all' | 'favorites';
