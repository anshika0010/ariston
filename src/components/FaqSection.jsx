"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What types of books do we publish?",
      answer:
        "We publish a wide range of books including academic research, insightful literature, and general interest reads.",
    },
    {
      question: "How can I submit my manuscript for publication?",
      answer:
        "You can submit your manuscript through our submission portal or email it to our editorial team.",
    },
    {
      question: "Do we offer editorial and marketing support?",
      answer:
        "Yes, we provide professional editorial services and marketing support to ensure your book reaches the right audience.",
    },
    {
      question: "Is Artisan Publications open to emerging authors?",
      answer:
        "Absolutely! We welcome and support new voices in the literary and academic community.",
    },
    {
      question: "Where can I purchase books published by Artisan Publications?",
      answer:
        "Our books are available on our website, major online retailers, and select bookstores worldwide.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pb-20">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Intro Section */}
        <div className="flex-1 mt-7">
          <button className="about-btn mb-4 px-6 py-2 bg-[#0B0C58] text-white rounded-full text-sm font-semibold">
            Faqs
          </button>
          <h2 className="text-3xl font-bold text-[#0B0C58] mb-10 leading-tight">
            Frequently
            <br />
            Asked Questions
          </h2>
          <p className="text-gray-600 hidden lg:block max-w-md">
            Got questions? We’re here to help. Browse through the most common
            inquiries about our publishing services, submission process, and
            support for authors.
          </p>
        </div>

        {/* Right FAQ Section */}
        <div className="flex-1 space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
