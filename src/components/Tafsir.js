import React from 'react';

const Tafsir = props => {
  return (
    <div className='text-2xl font-solaimanLipi'>
      <h3 className='text-gray-800 dark:text-gray-400'>{props?._text}</h3>
    </div>
  );
};

export default Tafsir;
