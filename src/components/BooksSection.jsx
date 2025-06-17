"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import book2 from "../images/booksection.jpg";
import book1 from "../images/booksection2.jpg";
import book3 from "../images/booksection3.jpg";

const books = [
  {
    id: 1,
    title: "Nanocomposites: Advancing Materials For Modern Applications",
    author: "Authors: Ahmad Umar...",
    image: book1,
    hoverText:
      "For scientists, engineers, and industry R&D personnel engaged in the development, engineering scale-up and next-generation education in academics.",
  },
  {
    id: 2,
    title:
      "Millets And Millet Products: From Traditional Grains To Nutritional Powerhouses",
    author: "Authors: Rubina Kumar...",
    image: book2,
    hoverText:
      "For scientists, engineers, and industry R&D personnel engaged in the development, engineering scale-up and next-generation education in academics.",
  },
  {
    id: 3,
    title:
      "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation",
    author: "Authors: Ahmad Umar...",
    image: book3,
    hoverText:
      "For scientists, engineers, and industry R&D personnel engaged in the development, engineering scale-up and next-generation education in academics.",
  },
  {
    id: 4,
    title:
      "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation",
    author: "Authors: Ahmad Umar...",
    image: book1,
    hoverText:
      "For scientists, engineers, and industry R&D personnel engaged in the development, engineering scale-up and next-generation education in academics.",
  },
  {
    id: 5,
    title: "Advanced Materials Science: Future Technologies",
    author: "Authors: Dr. Sarah Johnson...",
    image: book2,
    hoverText:
      "Comprehensive guide for researchers and professionals in materials science and engineering applications.",
  },
  {
    id: 6,
    title: "Artificial Intelligence in Healthcare",
    author: "Authors: Prof. Michael Chen...",
    image: book3,
    hoverText:
      "Essential reading for healthcare professionals and AI researchers working on medical applications.",
  },
];

export default function BooksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImagesCount = () => {
    switch (screenSize) {
      case "lg":
        return 4;
      case "md":
        return 3;
      case "sm":
        return 1;
      default:
        return 4;
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleBooks = () => {
    const count = getImagesCount();
    const visibleBooks = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % books.length;
      visibleBooks.push(books[index]);
    }
    return visibleBooks;
  };

  const getGridClasses = () => {
    switch (screenSize) {
      case "lg":
        return "grid-cols-4";
      case "md":
        return "grid-cols-3";
      case "sm":
        return "grid-cols-2";
      default:
        return "grid-cols-4";
    }
  };

  return (
    <section className="py-12 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto my-9">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <button className="about-btn mb-4 px-6 py-2 text-white bg-[#0B0C58] rounded-lg">
            Books
          </button>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58] mb-4">
            Our Books
          </h2>
        </div>
        <button className="text-[#0401A5] btn bg-white px-5 rounded-2xl border py-2 font-semibold hover:bg-gray-50 transition-colors">
          View More
        </button>
      </div>

      <p className="text-gray-600 text-base sm:text-md leading-relaxed mb-12 max-w-4xl">
        Ariston Publications offers a diverse collection of high-quality books
        spanning various disciplines, including Science, Engineering, Medicine,
        Artificial Intelligence, Nanotechnology and more. Our publications are
        meticulously curated to support researchers, academics, and
        professionals in advancing knowledge and fostering innovation. We
        welcome authors to contribute groundbreaking works that shape the future
        of scientific and academic discourse.
      </p>

      <div className="relative px-12">
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 border"
          aria-label="Previous book"
        >
          <ChevronLeft className="w-6 h-6 text-[#0B0C58]" />
        </button>

        <div className="overflow-hidden">
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 transition-all duration-500 ease-in-out`}
          >
            {getVisibleBooks().map((book, index) => (
              <div
                key={`${book.id}-${currentIndex}-${index}`}
                className="group cursor-pointer hover:border-[#0b0c58] border border-transparent rounded-xl overflow-hidden transition-colors duration-300"
              >
                <div className="max-w-xs bg-white rounded-2xl shadow-md p-4 space-y-4 relative h-[460px] flex flex-col justify-between">
                  <div className="relative flex justify-center w-full overflow-hidden">
                    <Image
                      src={book.image || "image"}
                      alt={book.title}
                      width={200}
                      height={280}
                      className="w-full h-[280px] group-hover:h-[200px] rounded-md object-cover transition-all duration-300"
                    />

                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg z-10" />

                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <span className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg shadow-lg font-semibold">
                        Buy Now
                      </span>
                    </button>
                  </div>

                  <div className="border-b border-gray-200 pb-2">
                    <h3 className="text-lg font-semibold text-[#0B0C58]">
                      {book.title}
                    </h3>

                    <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100">
                      <p className="text-sm text-gray-500 mt-2">
                        {book.hoverText}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 border"
          aria-label="Next book"
        >
          <ChevronRight className="w-6 h-6 text-[#0B0C58]" />
        </button>
      </div>
    </section>
  );
}
