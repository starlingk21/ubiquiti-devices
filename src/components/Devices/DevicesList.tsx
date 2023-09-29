import { FetchedData } from '../../types/devices';
import { Device } from '../../types/devices';
import Loader from '../DevicesUtility/Loader';
import Error from '../Error/Error';

const IMG_URL = 'https://static.ui.com/fingerprint/ui/icons/';

export default function DevicesList({ data, loading, error }: FetchedData) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const deviceRow = data.map((item: Device) => {
    return (
      <tr
        key={item.id}
        className='border-b-2 border-header-c cursor-pointer hover:bg-list-hover'
      >
        <td className='py-1.5 text-right pr-6'>
          <img
            className='float-right'
            src={`${IMG_URL}${item.icon.id}_${
              item.icon.resolutions[0 as number][0 as number]
            }x${item.icon.resolutions[0 as number][0 as number]}.png`}
            alt='list icon'
          />
        </td>
        <td className='py-1.5'>{item.line.name}</td>
        <td className='py-1.5'>{item.product.name}</td>
      </tr>
    );
  });

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg px-32'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed'>
        <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th
              scope='col'
              className='border-b-2 border-header-c px-6 w-136px p-2 text-table-gray bg-white text-right'
            >
              {data.length} devices
            </th>
            <th
              scope='col'
              className='border-b-2 uppercase border-header-c py-2 w-64 bg-white'
            >
              Product line
            </th>
            <th
              scope='col'
              className='border-b-2 uppercase border-header-c py-2 bg-white'
            >
              Name
            </th>
          </tr>
        </thead>
        <tbody>{deviceRow}</tbody>
      </table>
    </div>
  );
}
