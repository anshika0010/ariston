import Image from "next/image";
import iconImg from "../images/SVG.png";
import libraryImg from "../images/libraryimage.jpg";

const OurBooks = () => {
  return (
    <div className="bg-gray-100 px-6">
      <section className="header-section mt-16 py-6 grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-6 relative items-center">
        {/* Decorative background icon */}
        <Image
          src={iconImg}
          alt="decorative icon"
          className="absolute bottom-[-40px] left-[0px] w-14 h-14"
        />

        {/* Left content */}
        <div className="text-left md:pr-10 mb-10 md:mb-0">
          <p className="text-sm text-[#0B0C58] font-medium mb-2">
            Home / Books
          </p>
          <h2 className="text-4xl font-bold text-[#0B0C58] mb-4">Our Books</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Discover a diverse collection of books that inspire, educate, and
            empower. Whether you're looking for academic research, insightful
            literature, or engaging reads, our collection offers something for
            everyone.
          </p>
          <button className="bg-[#0401A5] text-white px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-[#0f0fff] transition">
            Explore Books
          </button>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <Image
            src={libraryImg}
            alt="Library Scene"
            className="rounded-2xl object-cover w-full max-w-md"
          />
        </div>
      </section>
    </div>
  );
};

export default OurBooks;
