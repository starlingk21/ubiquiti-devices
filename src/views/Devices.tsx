import { useContext, useState } from 'react';
import { DevicesContext } from '../context/FetchDevices';
import DevicesList from '../components/Devices/DevicesList';
import DevicesGrid from '../components/Devices/DevicesGrid';
import Toolbar from '../components/Toolbar/Toolbar';

export default function Devices() {
  const { loading, data, error, deviceFilters } = useContext(DevicesContext);
  const [searchWord, setSearchWord] = useState('');
  const [gridView, setGridView] = useState(true);

  const handleCurrentView = (type: boolean) => {
    setGridView(type);
  };

  const handleSearch = (word: string) => {
    setSearchWord(word);
  };

  const filterBySearchWord = data.filter((device) => {
    return (
      device.id.toLowerCase().includes(searchWord.toLowerCase()) ||
      device.product.name.toLowerCase().includes(searchWord.toLowerCase()) ||
      device.line.name.toLowerCase().includes(searchWord.toLowerCase()) ||
      device.shortnames.some((element) =>
        element.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  });

  return (
    <>
      <Toolbar handleSearch={handleSearch} isGrid={handleCurrentView} />
      {!gridView ? (
        <DevicesGrid
          loading={loading}
          data={filterBySearchWord}
          error={error}
          deviceFilters={deviceFilters}
        />
      ) : (
        <DevicesList
          loading={loading}
          data={filterBySearchWord}
          error={error}
          deviceFilters={deviceFilters}
        />
      )}
    </>
  );
}
