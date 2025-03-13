import { ImageSourcePropType } from 'react-native';

export type Dealer = {
    id: string;
    name: string;
    services: string;
    address: string;
    latitude: number;
    longitude: number;
    time:string,
    state: string;
    city: string;
    pincode: string;
    logo?: ImageSourcePropType; // Supports both local & remote images
  dealerImg?: ImageSourcePropType;
  };