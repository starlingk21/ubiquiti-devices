import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex justify-between items-center bg-header-c'>
      <div className='flex items-center'>
        <Link
          className='bg-u-logo transition ease-in-out delay-150 hover:transition-all hover:bg-hover-logo w-14 h-14'
          to='/'
        />
        <div className='text-xl text-header-title ml-3.5'>Devices</div>
      </div>
      <div>
        <span className='text-sm pr-7'>Kristaps Strazds</span>
      </div>
    </header>
  );
}
