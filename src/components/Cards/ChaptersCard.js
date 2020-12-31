import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/star.svg';
import ChapterNameIcon from '../Chapters/ChapterNameIcon';
import './ChapterCard.scss';
const ChaptersCard = props => {
  console.log(props);
  return (
    <Link
      to={`${props.id}`}
      className='block p-5 rounded-md bg-white dark:bg-gray-900 transition-colors duration-500'
    >
      <div className='flex justify-between items-center font-signika'>
        <div className='flex items-center'>
          <div className='number-icon'>
            <img className='icon' src={icon} alt='' />
            <p className='number text-purple-700 dark:text-purple-300 transition-colors duration-500'>
              {props.id}
            </p>
          </div>
          <div className='ml-3'>
            <h5 className='text-lg font-semibold text-gray-700 dark:text-gray-400 transition-colors duration-500'>
              {props.name}
            </h5>
            <span className='translated-name'>{props.translated_en}</span>
          </div>
        </div>
        <ChapterNameIcon id={props.id} />
      </div>
    </Link>
  );
};

export default ChaptersCard;
