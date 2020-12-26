import React, { useEffect, useState } from 'react';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';

const moon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    // className='hover:text-gray-700 stroke-current text-gray-500 transition duration-500 ease-in-out'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    />
  </svg>
);

const light = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    // stroke='#4B5563'
    // className=' hover:text-gray-300 stroke-current text-gray-500 transition duration-500 ease-in-out'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
);

const Mode = () => {
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = e => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  useEffect(() => {
    isDarkTheme
      ? document.querySelector('html').classList.add('dark')
      : document.querySelector('html').classList.remove('dark');
  }, [isDarkTheme]);

  return (
    <ButtonWithIcon
      name={isDarkTheme ? 'Light' : 'Dark'}
      icon={isDarkTheme ? light : moon}
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className='mx-5'
    />
  );
};

export default Mode;
