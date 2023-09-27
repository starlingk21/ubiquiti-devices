import Filters from './Filters';
import Search from './Search';

export default function Toolbar() {
  return (
    <div>
      <Search />
      <Filters />
    </div>
  );
}
