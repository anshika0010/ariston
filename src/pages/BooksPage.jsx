import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import OurBooks from "../components/OurBooks";
import Books from "../components/Books";
import FaqSection from "../components/FaqSection";

const BooksPage = () => {
  return (
    <div>
      <Navbar />
      <OurBooks />
      <Books />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default BooksPage;
