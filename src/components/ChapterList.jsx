import React from "react";

const ChapterList = () => {
  const chapters = [
    {
      title: "Recent advancement of conducting polymers",
      authors: "Md Fahad Islam, Saira A. Mough, Sahil Baig",
    },
    {
      title: "Conducting polymers for energy storing devices",
      authors: "Mubeen Nayyar, Anisha Bari, Muhammad Seraj, Md Ullah Khan",
    },
    {
      title: "Bio-medical application of conducting polymer",
      authors:
        "Saqib Ameer, Waleed Baber Jiskani, Faisal bin Khursheed, Muhammad Shahid Nazir, Zulfiqar Ali, Sadaf UlHaseen, Murid Hussain, Imran Hassan",
    },
    {
      title: "Nanocomposites based on Conducting Polymers",
      authors: "Moyna Sengupta Vinay",
    },
    {
      title:
        "Application of conducting polymer in photodegradation of heavy metals/pharmaceuticals",
      authors:
        "Sambit Kumar Mishra, Siddharth R. Anjane, S. Ravi Shankar, Sagar Singhani, Mukesh Gahwai, Parmar Jignesh Ashokbhai",
    },
    {
      title: "Conducting Polymer-based composites as Gas Sensor",
      authors: "Pallavi T. Patil",
    },
    {
      title: "Conducting Polymer-based Composites in Portable Devices",
      authors: "Aftab Alam, Arzu Lal, Javed M. Kazi",
    },
    {
      title: "Conducting polymer application in biosensors",
      authors: "R. Thennarasu, Prathik S. M., N. Sivakumar, R. Ramaswamy",
    },
    {
      title: "Conducting polymers for medical equipment",
      authors:
        "Md Wahidus Salehin, Yasir Iqbal, Noshia Binte, Ayesha Bukhari, Shabnam Maula Islam",
    },
    {
      title:
        "Conducting polymer-based nanocomposites for electrode materials in super-capacitors: Recent developments",
      authors: "Mohammad Faisal Ahmad, Babar Usam",
    },
  ];

  return (
    <div className="bg-white p-6 md:p-10 rounded-lg border border-gray-200 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0b0c58] mb-6 border-b border-[#0b0c58] pb-2">
        Chapter Titles
      </h2>

      <div className="space-y-6">
        {chapters.map((chapter, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-800">{chapter.title}</h3>
            <p className="text-gray-700 text-sm">{chapter.authors}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
