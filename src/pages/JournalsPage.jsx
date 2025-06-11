import OurJournals from "../components/OurJournals";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import Journals from "../components/Journals";

const JournalsPage = () => {
  return (
    <div>
      <Navbar />
      <OurJournals />
      <Journals />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default JournalsPage;
