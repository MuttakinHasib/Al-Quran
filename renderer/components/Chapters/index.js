import React from "react";
import ChaptersCard from "../Cards/ChaptersCard";
import chapterList from "../../data/chaptersList";

const Chapters = () => {
  return (
    <div className="grid gap-10 grid-flow-row grid-rows-57 lg:grid-rows-38 md:grid-flow-col">
      {chapterList.map(chapter => (
        <ChaptersCard key={chapter.id} {...chapter} />
      ))}
    </div>
  );
};

export default Chapters;
