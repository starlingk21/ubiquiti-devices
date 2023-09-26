import { useContext } from 'react';
import { DevicesContext } from '../context/FetchDevices';
import Header from '../components/DevicesUtility/Header';
import DevicesList from '../components/Devices/DevicesList';

export default function Devices() {
  const { loading, data, error } = useContext(DevicesContext);

  if (!data) {
    return;
  }

  return (
    <>
      <Header />
      <DevicesList loading={loading} data={data} error={error} />
    </>
  );
}
