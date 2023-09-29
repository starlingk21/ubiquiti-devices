import Filters from './Filters';
import Search from './Search';
import { searchWord } from '../../types/devices';

export default function Toolbar({
  handleSearch,
  isGrid,
  checkedFilters,
}: searchWord) {
  return (
    <div className='toolbar flex justify-between items-center py-2 mb-5 border-b-2 border-solid border-header-c relative'>
      <Search
        handleSearch={handleSearch}
        isGrid={isGrid}
        checkedFilters={checkedFilters}
      />
      <Filters isGrid={isGrid} checkedFilters={checkedFilters} />
    </div>
  );
}
