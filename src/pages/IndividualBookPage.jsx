import Editors from "../components/Editors";
import DescriptionSection from "../components/DiscriptionSection";
import React from "react";
import ChapterList from "../components/ChapterList";
import BookCard from "../components/BookCard";
import MoreBooksSection from "../components/MoreBooksSection";

const IndividualBookPage = () => {
  return (
    <>
      <div className="px-8 py-4 mt-14">
        <BookCard />
        <DescriptionSection />
        <Editors />
        <ChapterList />
        <MoreBooksSection />
      </div>
    </>
  );
};

export default IndividualBookPage;
