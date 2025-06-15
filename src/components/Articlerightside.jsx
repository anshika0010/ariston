"use client";
import React from "react";
import graph from "../images/graph5.png";
import Image from "next/image";
const Articlerightside = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-10">
      {/* Authors */}
      <div>
        <h2 className="text-blue-700 text-lg font-semibold border-b border-blue-700 inline-block pb-1">
          Authors and Affiliations
        </h2>
        <p className="mt-2 text-gray-800 font-medium">
          A. S. Y. Bin-Habtoor, Kainat Fatima.
        </p>
      </div>

      {/* Abstract */}
      <div>
        <h3 className="text-md font-semibold text-gray-900 mb-2">ABSTRACT</h3>
        <p className="text-gray-700 text-justify text-sm">
          Moreover, as organizations implement robust predictive maintenance
          strategies, they can leverage artificial intelligence (AI) to minimize
          human intervention in data analysis, leading to more automated and
          self-sustaining maintenance systems. This progress has been
          demonstrated by using machine learning methods such as critical
          decision trees and neural networks to analyze operational data and
          predict equipment failure...
          <br />
          The results indicate that Model E achieved the highest rank, while
          Model D had the lowest rank being attained. The value of the dataset
          Using AI for Predictive Maintenance, according to the MOORA method,
          Model E achieves the highest ranking.
        </p>
      </div>

      {/* Chart Image */}
      <div className="flex justify-center">
        <Image
          src={graph}
          hight={0}
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
          industrial operations by enabling proactive strategies that reduce
          costs, downtime, and failures...
        </p>
      </div>

      {/* Summary */}
      <div>
        <h3 className="text-md font-semibold text-gray-900 mb-2">
          Summary of the Study:
        </h3>
        <p className="text-gray-700 text-justify text-sm">
          This study explores the integration of IoT and AI for advanced
          predictive maintenance systems, employing the MOORA method to evaluate
          various condition monitoring models...
        </p>
      </div>
    </div>
  );
};

export default Articlerightside;
