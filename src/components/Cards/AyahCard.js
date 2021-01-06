import React, { memo, useState } from 'react';
import {
  CopyOutlined,
  PlayCircleOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import Collapse from '@kunukn/react-collapse';
import { useSelector } from 'react-redux';
import icon from '../../assets/images/star.svg';
import Tafsir from '../Tafsir';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';

const AyahCard = ({ ayah, tafsir, id }) => {
  const isDarkTheme = useSelector(({ theme }) => theme.dark);
  const [ayahNumber, setAyahNumber] = useState(null);
  const [showTafsir, setShowTafsir] = useState(false);
  console.log(ayahNumber === id);
  return (
    <div className='p-10 bg-white dark:bg-transparent dark:border-gray-900 border-b-2 border-transparent my-5 rounded-sm transition-colors duration-500'>
      <div className='flex items-center space-x-2'>
        <div className='number-icon mr-5'>
          <img className='icon' src={icon} alt='' />
          <p className='number text-purple-700 dark:text-purple-300 transition-colors duration-500'>
            {ayah.id}
          </p>
        </div>
        <button className='w-10 h-10 text-2xl focus:outline-none' title='Copy'>
          <CopyOutlined style={{ color: '#5BB5F2' }} />
        </button>
        <button className='w-10 h-10 text-2xl focus:outline-none' title='Play'>
          <PlayCircleOutlined
            style={{ color: isDarkTheme ? '#f56' : '#f36' }}
          />
        </button>
        <button
          className='w-10 h-10 text-2xl focus:outline-none'
          onClick={() => {
            setAyahNumber(ayah.id);
            setShowTafsir(!showTafsir);
          }}
          title='Show Tafsir'
        >
          <ReadOutlined style={{ color: '#4EB862' }} />
        </button>
        {/* <ButtonWithIcon
          icon={<ReadOutlined style={{ color: '#4EB862', fontSize: '25px' }} />}
          name='Show tafsir'
          onClick={() => {
            setAyahNumber(ayah.id);
            setShowTafsir(!showTafsir);
          }}
        /> */}
      </div>
      <h1 className='text-right word-spacing text-gray-800 dark:text-gray-300 font-noorehuda text-5xl py-5 leading-relaxed transition-colors duration-500'>
        {ayah?.text}
      </h1>
      <Collapse isOpen={ayahNumber === id && showTafsir}>
        <Tafsir {...tafsir} />
      </Collapse>
    </div>
  );
};

export default memo(AyahCard);
