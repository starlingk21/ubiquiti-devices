import { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import { searchWord } from '../../types/devices';

export default function Search({ handleSearch }: searchWord) {
  const [search, setSearch] = useState('');

  const searchRef = useRef(null);

  const onChangeSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event);
  };

  const handleSearchOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (search === '') {
        return false;
      }

      handleSearch(search);
    }
  };

  // const clearSearch = () => {
  //   searchRef.current = '';
  //   setSearch('');
  //   handleSearch('');
  // };

  return (
    <>
      <div className='relative pl-6'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-8'>
          <img
            className='text-gray-500 dark:text-gray-400 cursor-pointer'
            src='../src/assets/icons/Search-Icon.svg'
            alt='Search-Icon'
          />
        </div>
        <input
          className='block w-full min-w-344-px outline-none p-5px pl-8 text-sm caret-caret-blue text-gray-900 rounded-md bg-header-c focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='search'
          ref={searchRef}
          role='search'
          onKeyDown={handleSearchOnEnter}
          onChange={onChangeSearchHandler}
          placeholder='Search'
        />
        {/* <img
          className='text-gray-500 dark:text-gray-400'
          src='../src/assets/icons/Search-Icon.svg'
          alt='Close-Icon-Input'
        /> */}
      </div>
    </>
  );
}
