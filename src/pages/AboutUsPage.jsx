import BehindStorySection from "../components/BehindStorySection";
import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import WhatWeDo from "../components/WhatWeDo";
import AboutAuthors from "../components/AboutAuthors";
import OurValues from "../components/OurValues";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <BehindStorySection />
      <WhatWeDo />
      <OurValues />
      <AboutAuthors />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
