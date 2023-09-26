import { FetchedData } from '../../types/devices';
import { Device } from '../../types/devices';
import Loader from '../DevicesUtility/Loader';
import Error from '../Error/Error';

export default function DevicesList({ data, loading, error }: FetchedData) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const deviceRow = data.map((item: Device) => {
    return (
      <tr key={item.id}>
        <td className='py-1.5'>img</td>
        <td className='py-1.5'>{item.line.name}</td>
        <td className='py-1.5'>{item.product.name}</td>
      </tr>
    );
  });

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg px-20'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='border max-w-0 py-1.5'>
              {data.length} devices
            </th>
            <th scope='col' className='border uppercase py-1.5'>
              Product line
            </th>
            <th scope='col' className='border uppercase '>
              Name
            </th>
          </tr>
        </thead>
        <tbody>{deviceRow}</tbody>
      </table>
    </div>
  );
}
