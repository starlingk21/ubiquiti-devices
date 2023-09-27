import {
  useContext,
  useCallback,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import { DevicesContext } from '../../context/FetchDevices';

export default function Search() {
  const { data, setData } = useContext(DevicesContext);
  const [search, setSearch] = useState('');

  const onChangeSearchHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value),
    [setSearch]
  );

  const onSearchCallback = useCallback(() => {
    if (!search) {
      return [];
    }

    setData(
      data.filter((device) => {
        device.id.toLowerCase().includes(search.toLowerCase()) ||
          device.product.name.toLowerCase().includes(search.toLowerCase()) ||
          device.line.name.toLowerCase().includes(search.toLowerCase()) ||
          device.shortnames.some((element) =>
            element.toLowerCase().includes(search.toLowerCase())
          );
      })
    );
  }, [data, setData]);

  useEffect(() => {
    onSearchCallback();
  }, [[]]);

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
