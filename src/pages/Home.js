import React from 'react';
import { useSelector } from 'react-redux';

import logoLight from './../assets/images/quranLight.png';
import logoDark from './../assets/images/quranDark.png';
import QuickLinks from '../components/QuickLinks/QuickLinks';
import Chapters from '../components/Chapters/Chapters';
import Settings from '../components/Settings/Settings';
import Container from '../components/Container';
const Home = () => {
  const isDarkTheme = useSelector(state => state.theme.dark);
  return (
    <>
      <div className='w-full h-80 flex justify-center items-center space-y-5 flex-col'>
        <img src={isDarkTheme ? logoDark : logoLight} alt='' className='w-52' />
        <h1 className='text-4xl text-center font-headTitle text-indigo-900 font-bold dark:text-gray-400 transition-colors duration-500'>
          {/* The Nobel Quran */}
          Al Quran ul Kareem
        </h1>
      </div>
      <QuickLinks />
      <Container>
        <div className='space-y-11'>
          <h1 className='text-2xl text-gray-600 dark:text-gray-400 font-signika'>
            Surahs (Chapters)
          </h1>
          <Chapters />
          <div className='h-10' />
        </div>
      </Container>
      <Settings />
    </>
  );
};

export default Home;
