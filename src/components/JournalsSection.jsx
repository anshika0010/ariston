import React from "react";
import Image from "next/image";
// import book1 from "../images/booksection.jpg";
// import book2 from "../images/booksection2.jpg";
// import book3 from "../images/booksection3.jpg";
import journal from "../images/journal.png";
import journal2 from "../images/journal2.png";
import journal3 from "../images/journal3.png";

const books = [
  {
    id: 1,
    image: journal,
  },
  {
    id: 2,
    image: journal2,
  },
  {
    id: 3,
    image: journal3,
  },
];

const JournalsSection = () => {
  return (
    <>
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <div>
            <button className="about-btn mb-4 px-6 "> Journals </button>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 text-[#0B0C58]">
              Our Journals
            </h2>
          </div>
          <button
            variant="outline"
            className="text-[#0401A5] hover:bg-blue-500 bg-white px-5 rounded-2xl border py-2 font-semibold"
          >
            View More
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-12 max-w-4xl">
          Ariston Publications is a premier publisher of high-impact journals
          spanning Science, Engineering, Medicine, Computer Science, Artificial
          Intelligence, Materials Science, Chemical Science, Energy, and
          Environment. Committed to excellence, we uphold rigorous peer review
          and open-access dissemination. Explore our distinguished journal
          portfolio for cutting-edge research.
        </p>

        {/* Books Grid */}
        <div className="relative">
          {/* Books Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {books.map((book) => (
              <div key={book.id} className="group cursor-pointer">
                <div className="max-w-xs bg-white rounded-2xl ">
                  {/* Image */}
                  <div className="flex justify-center">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={0} // required for Next.js but won't control actual size
                      height={0}
                      className="w-[250px] h-[340px] rounded-md shadow-lg object-conatin"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JournalsSection;
