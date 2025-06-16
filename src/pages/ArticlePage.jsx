import Articlerightside from "../components/Articlerightside";
import Image1 from "../images/journal2.png";
import React from "react";
import Image from "next/image";

const ArticlePage = () => {
  return (
    <div className="p-6 mt-11 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-100 rounded-md overflow-hidden ">
        {/* Journal Cover Image */}
        <div className="w-20 md:w-20 flex-shrink-1">
          <Image
            src={Image1}
            alt="Journal Cover"
            hight={0}
            width={0}
            className="w-20 object-cover"
          />
        </div>

        {/* Journal Info Section */}
        <div className="flex flex-col justify-between flex-1 p-4">
          <p className="text-sm text-gray-700 mb-1">From the Journal</p>
          <h1 className="text-xl md:text-2xl font-bold text-[#0a0a50]">
            CompSci & AI Advances
          </h1>
          <div className="bg-[#0a0a50] text-white text-sm mt-3 px-3 py-1 w-full rounded">
            Volume 1, Issue 4 (December 2024)
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  my-6 flex-wrap gap-4">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-[#0B0C58] text-left max-w-4xl">
          Integrating IoT and AI for Advanced Predictive Maintenance:
          Innovations in Condition Monitoring Systems using MOORA method
        </h1>

        {/* Download Button (Right Side) */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl whitespace-nowrap">
          Download PDF
        </button>
      </div>

      <div className="flex w-full min-h-screen">
        <div className="w-3/4 bg-white ">
          {/* <h2 className="text-xl font-bold mb-4">Main Content</h2>
          <p>This is your main content area.</p> */}
          <Articlerightside />
        </div>

        {/* Right Side - Sidebar (Smaller) */}
        <div className=" w-1/4 border-1 bg-gray-200 p-6 rounded-lg shadow-sm text-sm md:text-base leading-relaxed">
          <h2 className="text-blue-900 font-semibold text-lg mb-4">
            Article Information
          </h2>

          <p>
            <span className="font-semibold">Article type:</span> Research
            Article
          </p>
          <p>
            <span className="font-semibold">Submitted:</span> 19 May 2024
          </p>
          <p>
            <span className="font-semibold">Revised:</span> 07 July 2024
          </p>
          <p>
            <span className="font-semibold">Accepted:</span> 19 August 2024
          </p>
          <p>
            <span className="font-semibold">First published:</span> 12 September
            2024
          </p>

          <p className="mt-4">
            <span className="font-semibold">DOI:</span>{" "}
            <a
              href="https://doi.org/10.69626/cai.2024.0201"
              className="text-blue-600 underline text-xs"
            >
              https://doi.org/10.69626/cai.2024.0201
            </a>
          </p>

          <div className="mt-4">
            <p>
              <span className="font-semibold">Volume:</span> 01
            </p>
            <p>
              <span className="font-semibold">Issue:</span> 04
            </p>
            <p>
              <span className="font-semibold">Pages:</span> 201–207
            </p>
          </div>

          <div className="mt-4">
            <p>
              <span className="font-semibold">Citation:</span> CompSci & AI
              Advances 1(4), 201–207 (2024)
            </p>
          </div>

          <div className="mt-4">
            <p>
              <span className="font-semibold">Request Permission:</span>{" "}
              <a href="#" className="text-gray-700 underline">
                Request Permission
              </a>
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Cite this article:</p>
            <p className="text-gray-700 text-xs">
              Bin-Habtoor, A. S. Y. and Fatima, K. 2024. Integrating IoT and AI
              for Advanced Predictive Maintenance: Innovations in Condition
              Monitoring Systems using MOORA method. CompSci & AI Advances 1(4),
              pp. 201–207; https://doi.org/10.69626/cai.2024.0201.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
