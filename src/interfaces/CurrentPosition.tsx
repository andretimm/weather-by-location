export interface CurrentPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
  place: {
    name: string;
    state: string;
    country: string;
  };
}
