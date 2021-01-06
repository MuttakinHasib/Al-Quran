import React from 'react';
import { useLocation } from 'react-router-dom';
import AyahCard from '../components/Cards/AyahCard';
import VerseHeaderCard from '../components/Cards/VerseHeaderCard';
import Container from '../components/Container';
import bnTafsirMuhiuddin from '../data/bnTafsirMuhiuddin';
// import bnTafsirZohurul from '../data/bnTafsirZohurul';
import chaptersList from '../data/chaptersList';
import quranVerses from '../data/quranVerses';

const Verse = () => {
  const { pathname } = useLocation();
  const currentVerse = pathname.slice(1);

  const [verseInfo] = chaptersList.filter(
    chapter => chapter.id === parseInt(currentVerse)
  );
  const [ayahs] = quranVerses
    .filter(verse => verse.id === currentVerse)
    .map(verse => verse.aya);

  const [tafsirs] = bnTafsirMuhiuddin
    .filter(verse => verse.id === currentVerse)
    .map(verse => verse.aya);

  return (
    <Container>
      <div className='w-4/5 mx-auto mt-20'>
        <VerseHeaderCard item={verseInfo} />
        {ayahs.map((ayah, i) => (
          <AyahCard
            key={ayah.id}
            id={ayah.id}
            tafsir={tafsirs[i]}
            {...{ ayah }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Verse;
