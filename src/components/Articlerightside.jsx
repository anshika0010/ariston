"use client";
import React, { useState } from "react";
import graph from "../images/graph5.png";
import Image from "next/image";

const Articlerightside = () => {
  const [activeTab, setActiveTab] = useState("authors");

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-10">
      {/* Tabs */}
      <div>
        <div className="flex space-x-4 border-b border-blue-700 mb-2">
          <button
            onClick={() => setActiveTab("authors")}
            className={`pb-1 text-sm font-semibold ${
              activeTab === "authors"
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600"
            }`}
          >
            Authors
          </button>
          <button
            onClick={() => setActiveTab("affiliations")}
            className={`pb-1 text-sm font-semibold ${
              activeTab === "affiliations"
                ? "text-blue-700 border-b-2 border-blue-800"
                : "text-[#0B0C58]"
            }`}
          >
            Authors and Affiliations
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "authors" && (
          <p className="mt-2 text-gray-800 font-medium">
            A. S. Y. Bin-Habtoor, Kainat Fatima.
          </p>
        )}
        {activeTab === "affiliations" && (
          <p className="mt-2 text-gray-800 font-medium">
            Department of Mechanical Engineering, King Khalid University, Saudi
            Arabia. Department of Computer Science, COMSATS University
            Islamabad, Pakistan.
          </p>
        )}
      </div>

      {/* Abstract */}
      <div>
        <h3 className="text-md font-semibold text-gray-900 mb-2">ABSTRACT</h3>
        <p className="text-gray-700 text-justify text-sm">
          Moreover, as organizations implement robust predictive maintenance
          strategies, they can leverage artificial intelligence (AI) to minimize
          human intervention...
        </p>
      </div>

      {/* Chart Image */}
      <div className="flex justify-center">
        <Image
          src={graph}
          height={0}
          width={0}
          alt="Dataset Comparison Chart"
          className="w-full max-w-4xl object-contain"
        />
      </div>

      {/* Significance */}
      <div>
        <h3 className="text-md font-semibold text-gray-900 mb-2">
          Significance of the Study:
        </h3>
        <p className="text-gray-700 text-justify text-sm">
          The integration of IoT and AI in predictive maintenance revolutionizes
          industrial operations by enabling proactive strategies...
        </p>
      </div>

      {/* Summary */}
      <div>
        <h3 className="text-md font-semibold text-gray-900 mb-2">
          Summary of the Study:
        </h3>
        <p className="text-gray-700 text-justify text-sm">
          This study explores the integration of IoT and AI for advanced
          predictive maintenance systems...
        </p>
      </div>
    </div>
  );
};

export default Articlerightside;
