import { ChevronLeft, ChevronRight } from "lucide-react";
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
  },
  {
    id: 2,
    title:
      "Millets And Millet Products: From Traditional Grains To Nutritional Powerhouses",
    author: "Authors: Rubina Kumar...",
    image: book2,
  },
  {
    id: 3,
    title:
      "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation And Human Health",
    author: "Authors: Ahmad Umar...",
    image: book3,
  },
];

export default function BooksSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <button className="about-btn mb-4 px-6"> Books </button>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Our Books
          </h2>
        </div>
        <button
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full mt-4 sm:mt-0"
        >
          View More
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-12 max-w-4xl">
        Ariston Publications offers a diverse collection of high-quality books
        spanning various disciplines, including Science, Engineering, Medicine,
        Artificial Intelligence, Nanotechnology and more. Our publications are
        meticulously curated to support researchers, academics, and
        professionals in advancing knowledge and fostering innovation. We
        welcome authors to contribute groundbreaking works that shape the future
        of scientific and academic discourse.
      </p>

      {/* Books Grid */}
      <div className="relative">
        {/* Navigation Arrows */}

        {/* Books Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="max-w-xs bg-white rounded-2xl shadow-md p-4  space-y-4">
                {/* Image */}
                <div className="flex justify-center w-full">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={0} // required for Next.js but won't control actual size
                    height={0}
                    className="w-full h-[280px] rounded-md shadow-lg object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Title / Description */}
                <div className="border-b border-gray-200 pb-2">
                  <h3 className="text-lg font-semibold text-[#0B0C58]">
                    {book.title}
                  </h3>
                </div>

                {/* Author */}
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
