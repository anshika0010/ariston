"use client";

import journal from "../images/journal.png";
import journal2 from "../images/journal2.png";
import journal3 from "../images/journal3.png";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const books = [
  {
    id: 1,
    image: journal,
    title: "Journal 1",
  },
  {
    id: 2,
    image: journal2,
    title: "Journal 2",
  },
  {
    id: 3,
    image: journal3,
    title: "Journal 3",
  },
  {
    id: 4,
    image: journal,
    title: "Journal 4",
  },
  {
    id: 5,
    image: journal2,
    title: "Journal 5",
  },
  {
    id: 6,
    image: journal3,
    title: "Journal 6",
  },
];

const JournalsSection = () => {
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
        return 2;
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
    <>
      <section className="py-12 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto my-9">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <div>
            <button className="about-btn mb-4 px-6 py-2 text-white bg-[#0B0C58] rounded-lg">
              Journals
            </button>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 text-[#0B0C58]">
              Our Journals
            </h2>
          </div>
          <button className="btn bg-white px-5 rounded-2xl border py-2 font-semibold hover:bg-gray-50 transition-colors">
            View More
          </button>
        </div>

        <p className="text-gray-600 text-base sm:text-md leading-relaxed mb-12 max-w-4xl">
          Ariston Publications is a premier publisher of high-impact journals
          spanning Science, Engineering, Medicine, Computer Science, Artificial
          Intelligence, Materials Science, Chemical Science, Energy, and
          Environment. Committed to excellence, we uphold rigorous peer review
          and open-access dissemination. Explore our distinguished journal
          portfolio for cutting-edge research.
        </p>

        <div className="relative px-12">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 border"
            aria-label="Previous journal"
          >
            <ChevronLeft className="w-6 h-6 text-[#0B0C58]" />
          </button>

          <div className="overflow-hidden">
            <div
              className={`grid ${getGridClasses()} gap-4 transition-all duration-500 ease-in-out`}
            >
              {getVisibleBooks().map((book, index) => (
                <div
                  key={`${book.id}-${currentIndex}-${index}`}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl">
                    <div className="flex justify-center overflow-hidden rounded-xl">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title || "Journal cover image"}
                        width={250}
                        height={340}
                        className="w-full max-w-[250px] h-[340px] object-contain rounded-md transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 border"
            aria-label="Next journal"
          >
            <ChevronRight className="w-6 h-6 text-[#0B0C58]" />
          </button>
        </div>
      </section>
    </>
  );
};

export default JournalsSection;
