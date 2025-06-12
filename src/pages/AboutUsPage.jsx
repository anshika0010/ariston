import BehindStorySection from "../components/BehindStorySection";
import AboutPage from "../components/AboutPage";

import React from "react";
import WhatWeDo from "../components/WhatWeDo";
import AboutAuthors from "../components/AboutAuthors";
import OurValues from "../components/OurValues";

const AboutUsPage = () => {
  return (
    <div>
      <AboutPage />
      <BehindStorySection />
      <WhatWeDo />
      <OurValues />
      <AboutAuthors />
    </div>
  );
};

export default AboutUsPage;
