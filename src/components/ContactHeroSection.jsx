"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import iconImg from "../images/SVG.png";
// Update this path

const ContactHeroSection = () => {
  return (
    <div className="bg-gray-100 px-6 ">
      <section className="header-section mt-16 mb-12 py-6 grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-6 relative">
        {/* Decorative Icon Image */}
        <Image
          src={iconImg}
          alt="icon"
          className="absolute bottom-[-40px] left-56"
        />

        {/* Text + Input Section */}
        <div className="flex flex-col justify-center md:col-span-2 text-center">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-600 mb-3">
            Home{" "}
            <span className="text-[#0B0C58] font-medium">/ contact-us</span>
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B0C58] mb-4">
            Get in touch
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            We’d love to hear from you! Whether you have inquiries about
            publishing, submissions, or general questions, our team is here to
            assist you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactHeroSection;
