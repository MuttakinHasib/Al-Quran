import React from 'react';
import { useSelector } from 'react-redux';

const Tafsir = props => {
  const { banglaFontSize } = useSelector(state => state.settings);

  return (
    <div className='mt-3 pt-3 border-t-2 border-gray-100 dark:border-gray-800'>
      <h4 className='text-xl font-semibold font-signika text-blue-800 dark:text-blue-400'>
        Tafsir of This Ayah:
      </h4>
      <div
        className='font-solaimanLipi py-3 '
        style={{ fontSize: banglaFontSize + 'px' }}
      >
        <h3
          className='text-gray-800 word-spacing-bn dark:text-gray-400'
          dangerouslySetInnerHTML={{ __html: props?.text }}
        />
      </div>
    </div>
  );
};

export default Tafsir;
