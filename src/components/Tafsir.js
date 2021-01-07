import React from 'react';
import { useSelector } from 'react-redux';

const Tafsir = props => {
  const { banglaFontSize } = useSelector(state => state.settings);

  return (
    <div
      className='font-solaimanLipi py-3'
      style={{ fontSize: banglaFontSize + 'px' }}
    >
      <h3 className='text-gray-800 dark:text-gray-400'>{props?._text}</h3>
    </div>
  );
};

export default Tafsir;
