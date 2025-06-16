"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        {/* Animated Book Loading */}
        <div className="mb-8 relative">
          {/* Main Book Animation */}
          <div className="relative inline-block">
            <svg
              className="w-20 h-20 text-[#0b0c58] animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>

            {/* Floating Pages Animation */}
            <div
              className="absolute -top-2 -right-2 w-4 h-4 bg-[#0b0c58]/20 rounded-sm animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute -top-1 -right-1 w-3 h-3 bg-[#0b0c58]/40 rounded-sm animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute top-0 right-0 w-2 h-2 bg-[#0b0c58]/60 rounded-sm animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0b0c58] mb-4">
            Loading Your Library
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Preparing your reading experience...
          </p>

          {/* Animated Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div
              className="w-3 h-3 bg-[#0b0c58] rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-3 h-3 bg-[#0b0c58] rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-[#0b0c58] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 max-w-xs mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#0b0c58] to-[#0b0c58]/70 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg text-gray-500 mt-6">Loading content...</p>
        </div>
      </div>

      {/* Background Floating Books */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <svg
            className="w-8 h-8 text-[#0b0c58]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div
          className="absolute top-40 right-16 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <svg
            className="w-6 h-6 text-[#0b0c58]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-32 left-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <svg
            className="w-10 h-10 text-[#0b0c58]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-20 right-12 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <svg
            className="w-7 h-7 text-[#0b0c58]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
