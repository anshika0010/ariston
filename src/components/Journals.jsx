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
  {
    id: 4,
    image: journal2,
  },
  {
    id: 5,
    image: journal3,
  },
  {
    id: 6,
    image: journal,
  },
];

const Journals = () => {
  return (
    <>
      <section className="py-16 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <div>
            <button className="about-btn mb-4 px-6 "> Our Journals </button>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 text-[#0B0C58]">
              Our Popular Journals
            </h2>
          </div>
        </div>

        {/* Books Grid */}
        <div className="relative">
          {/* Books Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Journals;
