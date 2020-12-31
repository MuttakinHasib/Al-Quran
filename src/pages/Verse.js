import React from 'react';
import { useLocation } from 'react-router-dom';
import VerseHeaderCard from '../components/Cards/VerseHeaderCard';
import Container from '../components/Container';
import chaptersList from '../data/chaptersList';

const Verse = () => {
  const { pathname } = useLocation();
  const currentVerse = pathname.slice(1);
  const verseInfo = chaptersList.filter(
    chapter => chapter.id === parseInt(currentVerse)
  );
  return (
    <Container>
      <VerseHeaderCard item={verseInfo[0]} />
    </Container>
  );
};

export default Verse;
