"use client";
import Image from "next/image";
import image1 from "../images/serviceimage.jpg";
import image2 from "../images/serviceimage1.jpg";
import image3 from "../images/serviceimage2.jpg";
import image4 from "../images/serviceimage3.jpg";

const OurServices = () => {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 bg-white mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <button className="about-btn mb-4 px-6"> Our Services </button>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58] mt-2 mb-4">
            Empowering Authors, Elevating Ideas
          </h2>
          <p className="text-gray-600 mb-6">
            At Arsiton Publications, we provide comprehensive publishing
            solutions to help authors bring their work to life. From refining
            manuscripts to increasing visibility, our services ensure your ideas
            make a lasting impact.
          </p>
          <button className="bg-[#0401A5] hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Right Cards Section */}
        <div className="lg:w-1/2 space-y-6">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col p-6">
            <Image
              src={image1}
              alt="Literary Works"
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="p-4">
              <p className="text-[#0B0C58] font-bold text-2xl">
                01 <span className="ml-2 text-xl">Publish Your Research</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Showcase impactful research, insightful theories, and compelling
                narratives.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col p-6">
            <Image
              src={image2}
              alt="Academic Scholarship"
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="p-4">
              <p className="text-[#0B0C58] font-bold text-2xl">
                02 <span className="ml-2 text-xl">Enhance Your Manuscript</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Refine your work with expert editing, formatting, and
                structuring to ensure clarity, coherence.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col p-6">
            <Image
              src={image3}
              alt="Cultural Engagement"
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="p-4">
              <p className="text-[#0B0C58] font-bold text-2xl">
                03{" "}
                <span className="ml-2 text-xl">Increase Your Visibility</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Expand your reach with strategic marketing and distribution,
                connecting you with the right audience.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col p-6">
            <Image
              src={image4}
              alt="Social Impact"
              className="w-full h-60 object-cover rounded-xl "
            />
            <div className="p-4">
              <p className="text-[#0B0C58] font-bold text-2xl">
                04 <span className="ml-2 text-xl">Join Our Community</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Engage with a network of scholars, writers, and thought leaders
                to share ideas, collaborate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
