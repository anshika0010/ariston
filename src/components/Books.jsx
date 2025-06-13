import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

export default function Books() {
  return (
    <section className="py-16 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <button className="about-btn mb-4 px-6">Our Books</button>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 text-[#0B0C58]">
            Our Popular Books
          </h2>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link href={`/book-page`} key={book.id} className="group">
            <div className="max-w-xs bg-white rounded-2xl shadow-md p-4 space-y-4 transition hover:shadow-lg">
              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              {/* Title */}
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-lg font-semibold text-[#0B0C58]">
                  {book.title}
                </h3>
              </div>

              {/* Author */}
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
