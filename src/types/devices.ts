export interface ApiResponse {
  id: string;
  devices: Device[];
}

export interface Device {
  id: string;
  line: {
    id: string;
    name: string;
  };
  shortnames: string[];
  product: {
    name: string;
    abbrev: string;
  };
  icon: {
    id: string;
    resolutions: [][];
  };
  unifi: {
    adoptability: string;
    network: {
      radios: {
        na: {
          gain: number;
          maxPower: number;
          maxSpeedMegabitsPerSecond: number;
        };
        ng: {
          gain: number;
          maxPower: number;
          maxSpeedMegabitsPerSecond: number;
        };
      };
      numberOfPorts: number;
      ethernetMaxSpeedMegabitsPerSecond: number;
    };
  };
}

export interface FetchedData {
  data: Device[];
  loading: boolean;
  error: undefined | TypeError;
  deviceFilters: filtersArray[];
}

export interface searchWord {
  handleSearch: (text: string) => void;
  isGrid: (view: boolean) => void;
}

export interface filtersArray {
  id: string;
  name: string;
}

export interface gridView {
  isGrid: (view: boolean) => void;
}
