import LatestNewsSection from "../components/LatestNewsSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import StayUpdatedSection from "../components/StayUpdatedSection";

const NewsandEvents = () => {
  return (
    <div>
      <Navbar />
      <StayUpdatedSection />
      <LatestNewsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default NewsandEvents;
