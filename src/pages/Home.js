import React from 'react';
import { useSelector } from 'react-redux';

import logoLight from './../assets/images/quranLight.png';
import logoDark from './../assets/images/quranDark.png';
const Home = () => {
  const isDarkTheme = useSelector(state => state.theme.dark);
  return (
    <div className='w-full relative h-80 flex justify-center items-center space-y-5 flex-col'>
      <img src={isDarkTheme ? logoDark : logoLight} alt='' className='w-52' />
      <h1 className='text-4xl font-headTitle text-indigo-900 font-bold dark:text-gray-400'>
        {/* The Nobel Quran */}
        Al Quran ul Kareem
      </h1>
    </div>
  );
};

export default Home;
