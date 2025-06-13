"use client";

import Image from "next/image";
import image5 from "../images/Image5.jpg";

const ServicesHeroSection = () => {
  return (
    <div className="bg-gray-100 px-6 relative pb-40">
      {" "}
      {/* Add padding-bottom to make space for image */}
      <section className="header-section mt-16 mb-12 py-6 grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-6 relative z-10">
        {/* Text + Input Section */}
        <div className="flex flex-col justify-center md:col-span-2 text-center">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-600 mb-3">
            Home{" "}
            <span className="text-[#0B0C58] font-medium">/ Our Services</span>
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B0C58] mb-4">
            Publishing Made Simple
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Arsiton Publications offers a full suite of publishing services to
            bring your ideas to life. From professional editing and book design
            to publishing, marketing, and distribution, we ensure your work
            reaches the right audience.
          </p>

          <div className="flex items-center justify-center max-w-md mx-auto bg-white rounded-full border border-gray-300 shadow-sm overflow-hidden">
            <button className="bg-[#0B0C58] text-white px-6 py-3 text-sm font-medium rounded-full rounded-l-none hover:bg-[#0a0a4a] transition-colors">
              Explore Books
            </button>
          </div>
        </div>
      </section>
      {/* Image Overlapping Section */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-0">
        <Image
          src={image5}
          alt="Hero Image"
          className="w-[80vw] max-w-5xl h-72 object-cover rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default ServicesHeroSection;
