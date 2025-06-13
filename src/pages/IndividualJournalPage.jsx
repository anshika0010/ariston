import ResearchArticles from "../components/ResearchArticles";
import JournalSidebar from "../components/JournalsSidebar";
import React from "react";
import Image from "next/image";
import heading from "../images/heading.png";
import Chart from "../components/Chart";

const IndividualJournalPage = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-28 bg-gray-300  py-12">
        <div>
          <h1 className="text-3xl font-bold text-[#0b0c58]">
            CompSci & AI Advances
          </h1>
        </div>
        <div>
          <button className="text-sm text-[#0b0c58] rounded-xl border border-gray-400 px-4 py-2">
            Home / Journals / CompSci & AI Advances
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 ">
          <JournalSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6">
          <div className="w-full h-16 bg-gray-100 rounded-none">
            <Image
              src={heading}
              alt="Journal"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <ResearchArticles />
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/4 text- bg-gray-200  ">
          <ul className="space-y-0 divide-y divide-white/20 bg-[#413d84]">
            {["SUBMIT MANUSCRIPT", "BE A REVIEWER", "JOIN EDITORAIL BOARD"].map(
              (item, index) => (
                <li
                  key={index}
                  className="px-4 py-3 text-sm hover:bg-[#4a4780] cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default IndividualJournalPage;
