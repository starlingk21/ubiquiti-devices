import { FetchedData } from '../../types/devices';
import { Device } from '../../types/devices';
import Loader from '../DevicesUtility/Loader';
import Error from '../Error/Error';

const IMG_URL = 'https://static.ui.com/fingerprint/ui/icons/';

export default function DevicesGrid({ data, loading, error }: FetchedData) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const deviceBox = data.map((item: Device) => {
    return (
      <>
        <div
          key={item.id}
          className='shadow-grid-card rounded-md cursor-pointer'
        >
          <div className='bg-header-c justify-items-center grid'>
            <img
              className='min-w-[129px]'
              src={`${IMG_URL}${item.icon.id}_${
                item.icon.resolutions[3 as number][0 as number]
              }x${item.icon.resolutions[3 as number][1 as number]}.png`}
              alt={item.line.name}
            />
          </div>
          <div className='p-4'>
            <span className='block text-sm pb-2 text-general-gray'>
              {item.product.name}
            </span>
            <span className='block text-sm text-general-gray'>
              {item.line.name}
            </span>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className='devices-grid'>
      <div className='px-14 pb-4'>
        <div className='text-xs text-table-gray'>{data.length} devices</div>
      </div>
      <div className='grid grid-cols-5 gap-6 justify-center justify-items-stretch px-14'>
        {deviceBox}
      </div>
    </div>
  );
}
