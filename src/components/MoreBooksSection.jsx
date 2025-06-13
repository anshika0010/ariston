"use client";
import Image from "next/image";
import React from "react";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";

// Sample book data (replace with dynamic props or API later)
const books = [
  {
    title: "Recent Advance And Applications Of Conducting",
    author: "Mohd Imran Ahamed",
    price: "$4000",
    image: book1,
  },
  {
    title: "Nanomaterial Nanotechnology Applications",
    author: "Zhanhu Guo",
    price: "$4000",
    image: book2,
  },
  {
    title: "Nanoscience Nanomaterial Nanotechnology Applications",
    author: "Chuntai Liu",
    price: "$4000",
    image: book3,
  },
];

const MoreBooksSection = () => {
  return (
    <section className="py-14">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="text-xs tracking-widest about-btn text-[#0b0c58] font-semibold uppercase">
          Our Books
        </span>
        <h2 className="text-3xl font-bold text-[#0b0c58] mt-2">More Books</h2>
      </div>

      {/* Books Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="bg-[#F3F1FF] rounded-2xl p-2 w-[280px] md:w-[300px] shadow-md"
          >
            {/* Book Image */}
            <div className="w-full h-72 relative mb-2 rounded-xl overflow-hidden">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Book Info */}
            <h3 className="text-md font-semibold text-black mb-2 line-clamp-2">
              {book.title}
            </h3>
            <p className="text-sm text-gray-700 mb-2 truncate">
              Authors: {book.author}
            </p>

            {/* Price */}
            <div className="text-[#0b0c58] font-semibold text-right">
              <span className="inline-flex items-center gap-1">
                <span className="text-lg">👤</span> {book.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreBooksSection;
