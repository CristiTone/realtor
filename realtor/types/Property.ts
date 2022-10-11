export interface PropertyType {
  id: string;
  coverPhoto: { url: string };
  price: number;
  rentFrequency: string;
  rooms: string;
  title: string;
  baths: string;
  area: number;
  agency: {
    logo: {
      url: string;
    };
  };
  isVerified: string;
  externalId: string;
  [key: string]: any;
}
