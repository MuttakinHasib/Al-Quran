import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className='mb-10 w-full xl:w-1/2 flex-wrap xs:flex-nowrap lg:w-3/5 md:w-4/5 mx-auto flex justify-between divide-x-2 dark:divide-gray-500 transition-colors duration-500 text-center text-sm sm:text-base md:text-lg font-semibold font-signika'>
      <div className='flex-grow mb-2 xs:mb-0 text-gray-500 dark:text-gray-400'>
        Quick Links
      </div>
      <Link
        className='flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500'
        to='18'
      >
        Surah Al-Kahf
      </Link>
      <Link
        className='flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500'
        to='36'
      >
        Surah Yasin
      </Link>
      <Link
        className='flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500'
        to='55'
      >
        Surah Ar-Rahman
      </Link>
      <Link
        className='flex-grow mb-2 xs:mb-0 text-green-500 dark:text-green-600 hover:text-green-700 dark:hover:text-green-500'
        to='67'
      >
        Al Mulk
      </Link>
    </div>
  );
};

export default QuickLinks;
