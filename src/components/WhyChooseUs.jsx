"use client";

import Image from "next/image";
import iconImg from "../images/SVG.png";

import icon1 from "../images/about-values-icon-1.svg.png";
import icon2 from "../images/about-values-icon-2.svg.png";
import icon3 from "../images/about-values-icon-3.svg .png";
import icon4 from "../images/about-values-icon-4.svg.png";
import icon5 from "../images/about-values-icon-5.svg .png";

const values = [
  {
    icon: icon1,
    title: "Excellence",
    description:
      "Upholding the highest editorial quality, design, and production standards to create meticulously crafted, impactful publications.",
  },
  {
    icon: icon2,
    title: "Inclusivity",
    description:
      "Embracing diverse perspectives and voices, fostering an inclusive literary and academic community.",
  },
  {
    icon: icon3,
    title: "Innovation",
    description:
      "Encouraging creativity and experimentation, supporting works that push boundaries and redefine tradition.",
  },
  {
    icon: icon4,
    title: "Collaboration",
    description:
      "Promoting interdisciplinary dialogue and partnerships, bridging gaps between researchers, institutions, and industries.",
  },
  {
    icon: icon5,
    title: "Community",
    description:
      "Building a vibrant, inclusive network of authors, readers, and scholars passionate about literature and scholarship.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 px-6 relative">
      <section className="header-section mt-16 py-6 grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-6 relative">
        {/* Decorative Icon - Top Left */}
        <Image
          src={iconImg}
          alt="decorative icon top"
          className="absolute top-[-40px] left-0 w-14 h-14"
        />

        {/* Decorative Icon - Bottom Left */}
        <Image
          src={iconImg}
          alt="decorative icon bottom"
          className="absolute bottom-[-40px] left-0 w-14 h-14"
        />

        {/* Content */}
        <div className="md:col-span-2 w-full text-center">
          <button className="about-btn mb-4 px-6"> Why choose us </button>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58] mt-2 mb-12">
            The Values That Drive <br /> Everything We Do
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-12">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-6 text-left"
              >
                <div className="mb-4">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0B0C58] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
