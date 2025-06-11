"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import iconImg from "../images/SVG.png";
// Update this path

const StayUpdatedSection = () => {
  return (
    <div className="bg-gray-100 px-6 ">
      <section className="header-section mt-16 mb-12 py-6 grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-6 relative">
        {/* Decorative Icon Image */}
        <Image
          src={iconImg}
          alt="icon"
          className="absolute bottom-[-40px] left-0"
        />

        {/* Text + Input Section */}
        <div className="flex flex-col justify-center md:col-span-2 text-center">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-600 mb-3">
            Home{" "}
            <span className="text-[#0B0C58] font-medium">
              / News and Events
            </span>
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B0C58] mb-4">
            Stay Updated with Ariston
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Explore the latest news, industry insights, and expert opinions.
            From in-depth blogs to exciting company updates, stay ahead with
            Ariston’s latest happenings.
          </p>

          {/* Email Input & Button */}
          <div className="flex items-center justify-center max-w-md mx-auto bg-white rounded-full border border-gray-300 shadow-sm overflow-hidden">
            <div className="flex items-center pl-4">
              <Mail className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="flex-grow px-3 py-3 focus:outline-none text-sm text-gray-700"
            />
            <button className="bg-[#0B0C58] text-white px-6 py-3 text-sm font-medium rounded-full rounded-l-none hover:bg-[#0a0a4a] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StayUpdatedSection;
