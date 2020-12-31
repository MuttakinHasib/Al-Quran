import React from 'react';
import macca from '../../assets/images/Background.png';
import bismillah from '../../assets/images/bismillah.png';

const VerseHeaderCard = ({ item }) => {
  return (
    <div className='w-9/12 mx-auto mt-20'>
      <div className='bg-gray-100 dark:bg-transparent grid md:gap-5 grid-cols-3 justify-center items-center px-10 py-5 rounded-md border-2 border-dashed border-gray-200 dark:border-gray-700 transition-colors duration-500'>
        <img src={macca} alt='' className='w-56' />
        <div className='text-center flex-1'>
          <h1 className='md:text-3xl text-xl text-gray-700 dark:text-gray-400 transition-colors duration-500 font-headTitle font-bold'>
            {item?.name}
          </h1>
          <h4 className='text-lg font-light text-gray-500 dark:text-gray-500 transition-colors duration-500 font-signika'>
            ( {item?.translated_en} )
          </h4>
          <div className='h-px md:w-48 w-32 bg-gray-200 dark:bg-gray-500 transition-colors duration-500 mx-auto' />
          <h2 className='text-lg text-gray-600 dark:text-gray-400 transition-colors duration-500 mt-1'>
            {item?.place} - {item?.count} Ayah
          </h2>
        </div>
        <img src={bismillah} alt='' className='w-56' />
      </div>
    </div>
  );
};

export default VerseHeaderCard;
