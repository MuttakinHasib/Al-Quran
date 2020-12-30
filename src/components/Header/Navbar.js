import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import { light, logo, moon, setting } from '../../assets/Icons';
import useDarkMode from '../../hooks/useDarkMode';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();
  return (
    <div className='bg-white dark:bg-darkNav transition-colors duration-500'>
      <div className='max-w-screen-xl px-4 mx-auto'>
        <nav className='flex py-4 justify-between items-center'>
          <Link
            to='/'
            className='focus:outline-none font-signika hover:text-gray-600 text-lg font-bold text-gray-500 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-500'
          >
            <div className='flex justify-center items-center'>
              {logo}
              <h3 className='ml-3 text-lg font-bold text-current'>Al Quran</h3>
            </div>
          </Link>
          <div className='justify-end'>
            <div className='flex items-center space-x-5'>
              <SearchBar {...{ isDarkTheme }} />
              <ButtonWithIcon
                name={isDarkTheme ? 'Light' : 'Dark'}
                icon={isDarkTheme ? light : moon}
                onClick={() => setIsDarkTheme(!isDarkTheme)}
                className='hidden sm:flex'
              />
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
