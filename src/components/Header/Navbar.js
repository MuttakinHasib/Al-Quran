import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import { logo, setting } from '../Icons';
import Mode from './Mode';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900 border-b border-transparent dark:border-gray-800 transition-colors duration-500'>
      <div className='container px-5 sm:px-0 mx-auto'>
        <nav className='flex py-4 justify-between items-center'>
          <Link
            to='/'
            className='focus:outline-none hover:text-gray-600 text-lg font-semibold text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-500'
          >
            <div className='flex justify-center items-center'>
              {logo}
              <h3 className='ml-3 text-lg'>Al Quran</h3>
            </div>
          </Link>
          <div className='justify-end'>
            <div className='flex items-center'>
              <SearchBar />
              <Mode />
              <ButtonWithIcon
                name='Settings'
                icon={setting}
                onClick={() => alert('Settings')}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
