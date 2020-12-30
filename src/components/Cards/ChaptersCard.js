import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/star.svg';
import ChapterNameIcon from '../Chapters/ChapterNameIcon';
import './ChapterCard.scss';
const ChaptersCard = props => {
  return (
    <Link to={1} className='block p-5 rounded-md bg-white dark:bg-gray-900'>
      <div className='flex justify-between items-center font-signika'>
        <div className='flex items-center'>
          <div className='number-icon'>
            <img className='icon' src={icon} alt='' />
            <p className='number'>{props.id}</p>
          </div>
          <div className='ml-3'>
            <h5 className='text-lg font-semibold'>{props.name}</h5>
            <span className='translated-name '>The opening</span>
          </div>
        </div>
        <ChapterNameIcon id={props.id} />
      </div>
    </Link>
  );
};

export default ChaptersCard;
