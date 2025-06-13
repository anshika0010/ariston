"use client";
import React, { useState } from "react";
import Image from "next/image";
import bookImage from "./../images/booksection2.jpg";
import barcode from "../images/barcode.png";

const BookCard = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8  p-6 md:p-10 rounded-xl max-w-6xl mx-auto">
        {/* Left: Book Cover */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={bookImage}
            alt="Book"
            width={300}
            height={400}
            className="rounded-xl shadow-lg h-[370px]"
          />
        </div>

        {/* Right: Info Section */}
        <div className="w-full md:w-2/2 space-y-4 bg-[#B1B2F436] p-7 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1D1B5F]">
            Nanocomposites: Advancing Materials for Modern Applications
          </h2>

          <p className="text-[#4D4B7A] text-sm md:text-base">
            For scientists, engineers, and industry R&amp;D personnel engaged in
            the development, engineering scale-up and next-generation education
            in academics.
          </p>

          <div className="text-[#1D1B5F] text-sm md:text-base">
            <span className="font-semibold">Edited By</span> <br />
            Ahmad Umar | Kuldeep Kumar | Sotirios Baskoutas | Ravi Kumar
          </div>
          <div className="flex gap-20 mt-4">
            <div className="text-xl font-semibold text-[#1D1B5F]">
              Price: <span className="font-bold text-[#1D1B5F]">$600/-</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex gap-4 ">
              <div className="flex items-center space-x-4">
                <button
                  onClick={decreaseQty}
                  className="w-8 h-8 rounded-full bg-gray-400 text-white font-bold"
                >
                  −
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="w-8 h-8 rounded-full bg-[#1D1B5F] text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-20 mt-4">
            <button className="bg-[#0b0c58] text-white font-medium px-6 py-2 rounded-full">
              Buy Now
            </button>
            <button className="border border-[#0b0c58] text-[#0b0c58] font-medium px-6 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <section className="bg-white border border-[#0b0c58] rounded-2xl py-6 px-3 md:p-10 max-w-5xl mx-auto mt-4 mb-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left: Book Info */}
        <div className="space-y-4 ">
          <h3 className="text-lg font-semibold text-[#0b0c58]">About Book</h3>
          <ul className="space-y-2 text-sm md:text-base text-black list-disc list-inside">
            <li>
              <span className="text-black font-medium">Published Date:</span>{" "}
              Tue Oct 29 2024
            </li>
            <li>
              <span className="text-black font-medium">Categories:</span>{" "}
              Engineering
            </li>
            <li>
              <span className="text-black font-medium">Format:</span> Hardcover
            </li>
            <li>
              <span className="text-black font-medium">Pages:</span> 120-131
            </li>
          </ul>
        </div>

        {/* Right: ISBN & Barcode */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          {/* ISBN Numbers */}
          <div className="text-black text-sm space-y-2">
            <p className="font-semibold">
              ISBN - 13 : <span className="text-black">4587196235555</span>
            </p>
            <p className="font-semibold">
              ISBN - 10 : <span className="text-black">4521637890</span>
            </p>
          </div>

          {/* Barcode Image */}
          <Image src={barcode} alt="Barcode" className="w-32 md:w-36" />
        </div>
      </section>
    </>
  );
};

export default BookCard;
