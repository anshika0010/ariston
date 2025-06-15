"use client"; // If using Next.js 13+ App Router

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import overlayimg from "../images/Overlay.png";

export default function LatestNewsSection() {
  const newsItems = [
    {
      id: 1,
      title:
        "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚...",
      date: "Mon Oct 28 2024",
    },
    {
      id: 2,
      title:
        "📢 Big Announcement: Ariston Publications Launches a New Platform for Open Access Journals! 📚🌐...",
      date: "Tue Oct 29 2024",
    },
    {
      id: 3,
      title:
        "📢 We Are Live! Explore the Future of Materials Science With MatSci Express Journal 🚀🔬...",
      date: "Wed Oct 30 2024",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white py-8 px-6 mb-12 my-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="inline-block">
              <button className="about-btn mb-4 px-6 text-white">
                Updates
              </button>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C58] leading-tight">
              Latest Events
              <br />
              And News
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-tight">
              Journals for scientists, engineers, and industry R&D personnel
              engaged in development, scale-up, and next-generation education in
              academics.
            </p>
          </div>

          {/* Right Section - News Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {newsItems.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:bg-[#0B0C58] hover:border-white transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1"></div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#0B0C58] group-hover:text-white text-md font-semibold leading-tight mb-2 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-3">
                      <Image
                        src={overlayimg}
                        alt="point"
                        width={20}
                        height={20}
                      />
                      <span className="text-gray-500 group-hover:text-white text-sm transition-colors duration-200">
                        {item.date}
                      </span>
                    </div>

                    <Link href="/news-and-events" passHref>
                      <button className="text-[#0B0C58] group-hover:text-white font-medium text-sm transition-colors duration-200 flex items-center space-x-1">
                        <span>Read More</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
