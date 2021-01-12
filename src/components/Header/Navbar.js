import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import { light, moon, setting } from '../../assets/Icons';
import logo from '../../assets/images/logo.png';
import useDarkMode from '../../hooks/useDarkMode';
import SearchBar from './SearchBar';
import Settings from '../Settings/Settings';

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='bg-gray-50 sticky top-0 z-50 dark:bg-darkNav transition-colors duration-500'>
        <div className='max-w-screen-xl px-5 mx-auto'>
          <nav className='flex py-4 justify-between items-center'>
            <Link
              to='/'
              className='focus:outline-none font-signika hover:text-gray-600 text-lg font-bold text-gray-500 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-500'
            >
              <div className='flex justify-center items-center'>
                <img src={logo} alt='' className='w-10' />
                <h3 className='ml-3 mb-0 text-lg font-bold text-current'>
                  Al Quran
                </h3>
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
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Settings {...{ isOpen, setIsOpen }} />
    </>
  );
};

export default Navbar;
