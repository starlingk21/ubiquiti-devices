import { Device } from '../../types/devices';
import Filters from './Filters';
import Search from './Search';

interface ToolbarSearchProps {
  onSearch: (data: Device[]) => void;
}

export default function Toolbar({ onSearch }: ToolbarSearchProps) {
  return (
    <div>
      <Search onSearchHandle={onSearch} />
      <Filters />
    </div>
  );
}
