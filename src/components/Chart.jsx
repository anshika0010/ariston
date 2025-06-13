"use client";
import Image from "next/image";
import graph from "../images/graph5.png";
import graph1 from "../images/graph4.png";
import graph3 from "../images/graph3.png";

export default function Chart() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-[#0B0C58]">Most recent articles</h1>
      <div className="max-w-2xl mx-auto p-6 mt-4 bg-white rounded-xl shadow-sm">
        <Image src={graph} alt="graph" height={0} width={0} />
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          Integrating IoT and AI for Advanced Predictive Maintenance Innovations
          in Condition Monitoring Systems using MOORA method
        </h2>
      </div>
      <div className="max-w-2xl mx-auto p-6 mt-4 bg-white rounded-xl shadow-sm">
        <Image src={graph1} alt="graph" height={0} width={0} />
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          Comparative Evaluation of Advanced Robotics in Engineering Using the
          COPRAS Method
        </h2>
      </div>
      <div className="max-w-2xl mx-auto p-6 mt-4 bg-white rounded-xl shadow-sm">
        <Image src={graph3} alt="graph" height={0} width={0} />
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          AI in Power Systems: Strategic Insights from Grey Relational Analysis
          (GRA) Evaluation of Performance Metrics
        </h2>
      </div>
      <div className="max-w-2xl mx-auto p-6 mt-4 bg-white rounded-xl shadow-sm">
        <Image src={graph} alt="graph" height={0} width={0} />
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          Integrating IoT and AI for Advanced Predictive Maintenance Innovations
          in Condition Monitoring Systems using MOORA method
        </h2>
      </div>
      <div className="max-w-2xl mx-auto p-6 mt-4 bg-white rounded-xl shadow-sm">
        <Image src={graph} alt="graph" height={0} width={0} />
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          Integrating IoT and AI for Advanced Predictive Maintenance Innovations
          in Condition Monitoring Systems using MOORA method
        </h2>
      </div>
    </div>
  );
}
