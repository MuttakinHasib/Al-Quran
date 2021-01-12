import React from 'react';
import { useSelector } from 'react-redux';
import icon from '../../assets/images/star.svg';

const MushafCard = ({ ayahs }) => {
  const { arabicFontSize } = useSelector(state => state.settings);
  return (
    <h1 className='mt-5 flex text-justify break-word flex-row-reverse items-center flex-wrap word-spacing text-gray-800 dark:text-gray-300 font-noorehuda text-5xl py-5 leading-relaxed transition-colors duration-500'>
      {ayahs.map(ayah => (
        <span
          key={ayahs.id}
          style={{ direction: 'rtl', fontSize: arabicFontSize + 'px' }}
          className='text-justify break-words'
        >
          {ayah?.text}
          <span className='ayah-number font-signika text-lg'>{ayah?.id}</span>
        </span>
      ))}
    </h1>
  );
};

export default MushafCard;

{
  /* <div
        className='block word-spacing text-gray-800 dark:text-gray-300 font-noorehuda text-5xl py-5 leading-relaxed transition-colors duration-500'
        style={{ fontSize: arabicFontSize + 'px' }}
      >
        
      </div> */
}
