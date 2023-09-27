import React, { useState, ChangeEvent, useEffect } from 'react';
import { DevicesContext } from '../../context/FetchDevices';
import { Device } from '../../types/devices';

interface SearchProps {
  onSearchHandle?: (data: Device[]) => void;
}

export default function Search({ onSearchHandle }: SearchProps) {
  const { data } = React.useContext(DevicesContext);
  const [search, setSearch] = useState('');

  const onChangeSearchHandler = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value),
    [setSearch]
  );

  console.log(data);

  const searchResults = React.useMemo(() => {
    if (!search) {
      return [];
    }

    return data.filter(
      (device) =>
        device.id.toLowerCase().includes(search.toLowerCase()) ||
        device.product.name.toLowerCase().includes(search.toLowerCase()) ||
        device.line.name.toLowerCase().includes(search.toLowerCase()) ||
        device.shortnames.some((element) =>
          element.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [data, search]);

  console.log(searchResults);

  return (
    <div>
      <input
        className=''
        type='search'
        role='search'
        onChange={onChangeSearchHandler}
        placeholder='Search'
      />
    </div>
  );
}
