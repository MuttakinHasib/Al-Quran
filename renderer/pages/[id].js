import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Verses = () => {
  // const [ayahs,setAyahs] = useState()
  const { isMushaf } = useSelector(state => state.settings);
  const { pathname } = useRouter();
  const currentVerse = pathname.slice(1);

  const [verseInfo] = chaptersList.filter(
    chapter => chapter.id === parseInt(currentVerse)
  );
  const [ayahs] = quranVerses
    .filter(verse => verse.id === currentVerse)
    .map(verse => verse.aya);

  const tafsir = tafsirBayaan.filter(
    verse => verse.sura === parseInt(currentVerse)
  );

  const bnTaisirul = taisirulQuran.filter(
    verse => verse.sura === parseInt(currentVerse)
  );
  return (
    <Container>
      <div className="w-4/5 mx-auto mt-20">
        <VerseHeaderCard item={verseInfo} />
        {isMushaf ? (
          <MushafCard {...{ ayahs }} />
        ) : (
          ayahs.map((ayah, i) => (
            <AyahCard
              key={ayah.id}
              id={ayah.id}
              tafsir={tafsir[i]}
              transition={bnTaisirul[i]}
              {...{ ayah }}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default Verses;
