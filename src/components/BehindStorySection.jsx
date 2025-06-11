import Image from "next/image";
import image6 from "../images/Image6.png";
import image5 from "../images/Image5.jpg";
import image4 from "../images/Image4.jpg";
export default function BehindStorySection() {
  return (
    <section className="bg-white py-16 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Image */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={image4}
                alt="Older gentleman with glasses reading a book in library"
                width={600}
                height={400}
                className="w-full h-full  object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={image5}
                alt="Young man working with books in library"
                width={600}
                height={400}
                className="w-full h-full  object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <button className="about-btn mb-4 px-6">
                {" "}
                Behind The Story{" "}
              </button>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B0C58] leading-tight">
                Welcome To Ariston Publications
              </h2>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-8 border-b border-gray-200">
              <button className="pb-3 text-black font-medium border-b-2 border-blue-600">
                Our Story
              </button>
              <button className="pb-3 text-black hover:text-gray-900 transition-colors">
                Mission
              </button>
              <button className="pb-3 text-black hover:text-gray-900 transition-colors">
                Values
              </button>
            </div>

            {/* Description Text */}
            <div className="space-y-4">
              <p className="text-gray-600 text-base sm:text-md leading-relaxed">
                Ariston Publications is a dynamic and forward-thinking publisher
                committed to producing high-quality, impactful works across a
                broad spectrum of disciplines. Our portfolio includes an
                extensive range of literary genres—fiction, non-fiction, poetry,
                and drama—as well as scholarly works spanning the humanities,
                social sciences, natural sciences, and applied sciences.
              </p>

              {/* Mission Quote */}
              <blockquote className="text-[#0B0C58] text-lg sm:text-xl font-semibold leading-relaxed">
                "Our mission is to be a beacon of intellectual exploration and
                creative expression."
              </blockquote>
            </div>

            {/* Founder Section */}
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={image6}
                    alt="Ahmad Omar profile"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ahmad Omar</p>
                  <p className="text-gray-600 text-sm">Founder, CEO</p>
                </div>
              </div>

              {/* Signature */}
              <div className="hidden sm:block">
                <svg
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  className="text-blue-900"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 20C15 10, 25 30, 35 15C45 25, 55 5, 65 20C70 15, 75 25, 75 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
