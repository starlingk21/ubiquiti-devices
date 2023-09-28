import { useContext, useState } from 'react';
import { DevicesContext } from '../../context/FetchDevices';
import { filtersArray } from '../../types/devices';

//icons for view type
import iconList from '../../assets/icons/icon-list.svg';
import iconListActive from '../../assets/icons/icon-listactive.svg';
import iconGrid from '../../assets/icons/icon-grid.svg';
import iconGridActive from '../../assets/icons/icon-grid-active.svg';

export default function Filters() {
  const { deviceFilters } = useContext(DevicesContext);

  const [showFilters, setShowFilters] = useState(false);
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState(false);

  const filters = deviceFilters.map((item: filtersArray) => {
    return (
      <div className='filter mb-1' key={item.id}>
        <input className='cursor-pointer' type='checkbox' id={item.id} />
        <label
          className='p-3 cursor-pointer text-sm leading-6'
          htmlFor={item.id}
        >
          {item.name}
        </label>
      </div>
    );
  });

  const toggleListView = () => {
    setListView(true);
    setGridView(false);
  };

  const toggleGridView = () => {
    setGridView(true);

    listView ? setListView(false) : setGridView(true);
  };

  return (
    <div className='filters flex'>
      <img
        className='cursor-pointer mr-3'
        src={listView ? iconListActive : iconList}
        alt='Icon List'
        onClick={toggleListView}
      />
      <img
        className='cursor-pointer mr-3'
        src={!gridView ? iconGrid : iconGridActive}
        alt='Icon Grid'
        onClick={toggleGridView}
      />
      <div className='filters-devices'>
        <div className='pr-7'>
          <span
            className='text-general-gray text-sm cursor-pointer'
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
          </span>
        </div>
        <div
          className={`absolute top-0 min-w-256-px right-0 bg-white z-10 shadow-filters ${
            showFilters ? 'block' : 'hidden'
          }`}
        >
          <div className='flex justify-between p-11px border-b-2 border-header-c'>
            <span className='text-sm leading-6 pl-3 text-general-gray'>
              Filter
            </span>
            <img
              className='cursor-pointer pr-3'
              src='../src/assets/icons/Close-icon.svg'
              alt='Close Icon'
              onClick={() => setShowFilters(!showFilters)}
            />
          </div>
          <div className='px-8 pb-8 overflow-y-scroll max-h-336px'>
            <div className='py-5'>
              <span className='font-bold text-sm'>Product line</span>
            </div>
            {filters}
          </div>
        </div>
      </div>
    </div>
  );
}
