import { FetchedData } from '../../types/devices';
import { Device } from '../../types/devices';
import Error from '../Error/Error';

export default function DevicesList({ data, loading, error }: FetchedData) {
  if (error) {
    return <Error error={error} />;
  }

  const deviceRow = data.map((item: Device) => {
    return (
      <li key={item.id}>
        <div>img</div>
        <div>{item.line.name}</div>
        <div>{item.product.name}</div>
      </li>
    );
  });

  return (
    <ul>
      <li>
        <div>{data.length} devices</div>
        <div></div>
        <div></div>
      </li>
      {deviceRow}
    </ul>
  );
}
