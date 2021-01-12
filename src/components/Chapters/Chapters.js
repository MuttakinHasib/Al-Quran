import React from 'react';
import chaptersList from '../../data/chaptersList';
import ChaptersCard from '../Cards/ChaptersCard';

const Chapters = () => {
  return (
    <div className='grid gap-10 grid-flow-row grid-rows-57 lg:grid-rows-38 md:grid-flow-col'>
      {chaptersList.map(chapter => (
        <ChaptersCard key={chapter.id} {...chapter} />
      ))}
    </div>
  );
};

export default Chapters;
