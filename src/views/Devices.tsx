import { useContext } from 'react';
import { DevicesContext } from '../context/FetchDevices';
import DevicesList from '../components/Devices/DevicesList';
import Toolbar from '../components/Toolbar/Toolbar';

export default function Devices() {
  const { loading, data, error } = useContext(DevicesContext);

  return (
    <>
      <Toolbar />
      <DevicesList
        loading={loading}
        data={data}
        error={error}
        setData={() => data}
      />
    </>
  );
}
