import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex justify-between items-center bg-header-c'>
      <div className='flex items-center'>
        {/*
        As not using routes, added example to link to homepage, meanwhile added onClick to just refresh the page
        */}
        <Link
          className='bg-u-logo transition ease-in-out delay-150 hover:transition-all hover:bg-hover-logo w-14 h-14'
          to='/'
          onClick={() => window.location.reload()}
        />
        <div className='text-xl text-general-gray ml-3.5'>Devices</div>
      </div>
      <div>
        <span className='text-sm pr-7'>Kristaps Strazds</span>
      </div>
    </header>
  );
}
