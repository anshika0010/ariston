import overlayimg from "../images/Overlay.png";
import Image from "next/image";
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
        "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚...",
      date: "Mon Oct 28 2024",
    },
    {
      id: 3,
      title:
        "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚...",
      date: "Mon Oct 28 2024",
    },
    // {
    //   id: 4,
    //   title:
    //     "Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal ⚡📚...",
    //   date: "Mon Oct 28 2024",
    // },
  ];

  return (
    <div className="bg-gray-50 py-8 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12">
          {/* Left Section - Latest Events and News */}
          <div className="space-y-6">
            <div className="inline-block">
              <button className="about-btn mb-4 px-6"> Updates </button>
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C58] leading-tight">
                Latest Events
                <br />
                And News
              </h1>
            </div>

            <div>
              <p className="text-gray-700 text-base sm:text-lg leading-tight">
                Journals For scientists, engineers, and industry R&D personnel
                engaged in the development, engineering scale-up and
                next-generation education in academics.
              </p>
            </div>
          </div>

          {/* Right Section - News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  {/* News Icon */}
                  <div className="flex-shrink-0 mt-1"></div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#0B0C58] text-md font-semibold  leading-tight mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-3">
                      <Image
                        src={overlayimg}
                        alt="point"
                        width={20}
                        height={20}
                      />
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>

                    <button className="text-[#0B0C58] font-medium text-sm hover:text-[#6f71e2] transition-colors duration-200 flex items-center space-x-1">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
