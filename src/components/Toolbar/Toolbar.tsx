import Filters from './Filters';
import Search from './Search';
import { searchWord } from '../../types/devices';

export default function Toolbar({ handleSearch }: searchWord) {
  return (
    <div className='toolbar flex justify-between items-center py-2 mb-5 border-b border-solid border-header-c relative'>
      <Search handleSearch={handleSearch} />
      <Filters />
    </div>
  );
}
