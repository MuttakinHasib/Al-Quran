import React from 'react';
import chaptersList from '../../data/chaptersList';
import ChaptersCard from '../Cards/ChaptersCard';

const Chapters = () => {
  return (
    <div className='grid gap-10 grid-flow-row md:grid-rows-76 lg:grid-rows-38 md:grid-flow-col'>
      {chaptersList.map(chapter => (
        <ChaptersCard key={chapter.id} {...chapter} />
      ))}
      {/* <div className='grid auto-rows-auto gap-10'>
        <ChaptersCard name='Al Fatiha' id={1} />
        <ChaptersCard name='Al Bakarah' id={2} />
      </div>
      <div className='grid auto-rows-auto order-last md:order-none gap-10'>
        <ChaptersCard name='Al Nisa' id={3} />
        <ChaptersCard name='Al Imran' id={4} />
      </div>
      <div className='grid auto-rows-auto order-2 md:order-last gap-10'>
        <ChaptersCard name='Al Kafh' id={5} />
        <ChaptersCard name='Al Iklas' id={6} />
      </div> */}
    </div>
  );
};

export default Chapters;
