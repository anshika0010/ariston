// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
      "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation ",
    author: "Authors: Ahmad Umar...",
    image: book1,
    hoverText:
      "For scientists, engineers, and industry R&D personnel engaged in the development, engineering scale-up and next-generation education in academics.",
  },
];

export default function Books() {
  return (
    <section className="py-12 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto my-9">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <button className="about-btn mb-4 px-6 text-white">Books</button>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58] m-4">
            Our Popular Books
          </h2>
        </div>
        <button className="text-[#0401A5] btn bg-white px-5 rounded-2xl border py-2 font-semibold">
          View More
        </button>
      </div>

      {/* Books Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {books.map((book) => (
            <div
              key={book.id}
              className="group cursor-pointer hover:border-[#0b0c58] border border-transparent rounded-xl overflow-hidden transition-colors duration-300"
            >
              <div className="max-w-xs bg-white rounded-2xl shadow-md p-4 space-y-4 relative h-[460px] flex flex-col justify-between">
                {/* Image */}
                <div className="relative flex justify-center w-full overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={0}
                    height={0}
                    className="w-full h-[280px] group-hover:h-[200px] rounded-md object-cover transition-all duration-300"
                    sizes="100vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg z-10" />

                  {/* Buy Now Button */}
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg shadow-lg font-semibold">
                      Buy Now
                    </span>
                  </button>
                </div>

                {/* Title & Hover Description */}
                <div className="border-b border-gray-200 pb-2">
                  <h3 className="text-lg font-semibold text-[#0B0C58]">
                    {book.title}
                  </h3>

                  {/* Hover text – prevents push-down */}
                  <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100">
                    <p className="text-sm text-gray-500 mt-2">
                      {book.hoverText}
                    </p>
                  </div>
                </div>

                {/* Author – Always visible at bottom */}
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
