export type reviewType = {
  id: number;
  user: {
    id: number;
    name: string;
    avatarUrl: string;
  };
  rating: number;
  comment: string[];
  date: string;
}

export type hotelsType = {
  bedrooms: number;
  city: {
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  name: string;
  };
  description: string[];
  goods: string[];
  host: {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
  };
  id: number;
  images: [string];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  }


  export interface Host {
    id: number;
    isPro: boolean;
    name: string;
    avatarUrl: string;
  }

  export interface PlaceLocation {
    latitude: number;
    longitude: number;
    zoom: number;
  }

  export interface City {
    name: string,
    location: PlaceLocation,
  }
  export interface Offer {
    id: number;
    city: City;
    previewImage: string;
    images: [string];
    title: string;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    type: string;
    bedrooms: number;
    maxAdults: number;
    price: number;
    goods: [string];
    host: Host,
    description: string;
    location: PlaceLocation;
  }

  export interface CityOffersGroup {
    [key: string]: Offer[];
  }
