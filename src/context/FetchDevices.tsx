import React, { createContext, useState, useEffect } from 'react';
import { Device, ApiResponse, FetchedData } from '../types/devices';

const URL = 'https://static.ui.com/fingerprint/ui/public.json';

const initialContext: FetchedData = {
  data: [],
  loading: false,
  error: undefined,
  setData: (devices) => [],
};

export const DevicesContext = createContext<FetchedData>(initialContext);

export default function FetchDevices({ children }: React.PropsWithChildren) {
  const [data, setData] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<TypeError>();

  useEffect(() => {
    if (loading) return;

    setLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((resData: ApiResponse) => {
        const { devices } = resData;

        setData(devices);
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
        setData,
      }}
    >
      {children}
    </DevicesContext.Provider>
  );
}
