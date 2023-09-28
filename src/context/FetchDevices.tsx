import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import {
  Device,
  ApiResponse,
  FetchedData,
  filtersArray,
} from '../types/devices';

const URL = 'https://static.ui.com/fingerprint/ui/public.json';

const initialContext: FetchedData = {
  data: [],
  loading: false,
  error: undefined,
  deviceFilters: [],
};

export const DevicesContext = createContext<FetchedData>(initialContext);

export default function FetchDevices({ children }: PropsWithChildren) {
  const [data, setData] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<TypeError>();
  const [deviceFilters, setFilters] = useState<filtersArray[]>([]);

  useEffect(() => {
    if (loading) return;

    setLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((resData: ApiResponse) => {
        const { devices } = resData;
        const devicesObj: Record<string, boolean> = {};
        const filters: filtersArray[] = [];

        setData(devices);

        devices.forEach((i) => {
          // Check if line id exists for looped device
          if (Object.hasOwnProperty.apply(devicesObj, [i.line.id])) {
            return;
          }

          devicesObj[i.line.id] = true;
          filters.push(i.line);
        });

        setFilters(filters);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return (
    <DevicesContext.Provider
      value={{
        data,
        loading,
        error,
        deviceFilters,
      }}
    >
      {children}
    </DevicesContext.Provider>
  );
}
