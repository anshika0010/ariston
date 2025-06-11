import Image from "next/image";
import image1 from "../images/Image7.png";
import image2 from "../images/Image8.png";
import image3 from "../images/Image9.png";
import image4 from "../images/Image10.png";

const WhatWeDo = () => {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <button className="about-btn mb-4 px-6"> Books </button>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58] mt-2 mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 mb-6">
            At Ariston Publications, we publish a diverse array of works that
            captivate the imagination, challenge the status quo, and illuminate
            the human experience. Our catalogue includes:
          </p>
          <button className="bg-[#0401A5] hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-300">
            Explore Journals
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
                01 <span className="ml-2 text-xl">Literary Works</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Showcasing captivating novels, poetry, drama, and non-fiction
                that inspire and resonate deeply.
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
                02 <span className="ml-2 text-xl">Academic Scholarship</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Publishing groundbreaking research and theories that expand
                knowledge and inform intellectual discourse.
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
                03 <span className="ml-2 text-xl">Cultural Engagement</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Highlighting diverse cultural works that foster cross-cultural
                understanding, appreciation, and dialogue.
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
                04 <span className="ml-2 text-xl">Social Impact</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Advocating justice, equity, and sustainability through works
                addressing critical social and environmental issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
