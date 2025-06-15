"use client";
import { useState } from "react";
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import ContactHeroSection from "../components/ContactHeroSection";
import FaqSection from "../components/FaqSection";
import Image20 from "../images/Image20.jpg";
import Image21 from "../images/Image21.jpg";
import Image from "next/image";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    "What types of books do we publish?",
    "How can I submit my manuscript for publication?",
    "Do we offer editorial and marketing support?",
    "Is Artisan Publications open to emerging authors?",
    "Where can I purchase books published by Artisan Publications?",
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <ContactHeroSection />
      <div className="min-h-screen bg-white">
        {/* Header Section */}

        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20 rounded-3xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Info Panel */}
            <div className="bg-indigo-100 rounded-2xl p-8 space-y-6 text-[#0B0C58]">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">📄</div>
                <h2 className="text-xl font-bold">General Inquiries:</h2>
              </div>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@aristonpubs.com"
                  className="text-black font-medium underline"
                >
                  info@aristonpubs.com
                </a>
              </p>

              <div>
                <h2 className="text-xl font-bold mt-6">
                  Manuscript Submission Support:
                </h2>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:submissions@aristonpubs.com"
                    className="text-black font-medium underline"
                  >
                    submissions@aristonpubs.com
                  </a>
                </p>
              </div>

              <hr className="my-6 border-gray-300" />

              <div>
                <h2 className="text-xl font-bold mb-4">Give us a call</h2>
                <div className="space-y-3 text-sm text-gray-800">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#0B0C58]" />
                    <span>614-634-5305</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#0B0C58]" />
                    <span>contact@aristonpubs.com</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-[#0B0C58]" />
                    <span>
                      Ariston Publications
                      <br />
                      3167 Riverview Place
                      <br />
                      Columbus, OH 43202, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="bg-gray-100 rounded-2xl">
              <h2 className="text-3xl font-bold text-[#0B0C58] mb-8">
                Contact Us
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0C58] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full rounded-full px-4 py-3 border border-gray-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0C58] mb-1">
                      Affiliation
                    </label>
                    <input
                      type="text"
                      placeholder="Affiliation"
                      className="w-full rounded-full px-4 py-3 border border-gray-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0C58] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-full px-4 py-3 border border-gray-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0C58] mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full rounded-full px-4 py-3 border border-gray-300 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0B0C58] mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Example Text"
                    rows="4"
                    className="w-full rounded-xl px-4 py-3 border border-gray-300 resize-none focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-800 text-white font-medium py-3 px-8 rounded-full w-full hover:bg-blue-900 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Images Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:h-[500px]">
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-full">
                <Image
                  src={Image20}
                  alt="Older gentleman with glasses reading a book in library"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-full">
                <Image
                  src={Image21}
                  alt="Young man working with books in library"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="mb-4">
                <span className="inline-block about-btn text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider">
                  THANK YOU
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58] leading-tight mb-4">
                Dear Authors <br /> And Customers
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <span className="text-[#0B0C58] font-semibold">Thank you</span>{" "}
                for your interest in Ariston Publications. Whether you have
                questions about submitting a manuscript, inquiries about our
                publications, or simply wish to provide feedback, we’re here to
                assist you. Our dedicated team is committed to providing prompt
                and helpful assistance to all inquiries. We value your feedback
                and strive to ensure a seamless experience for all authors and
                customers. <br />
                Thank you for choosing{" "}
                <span className="font-medium">Ariston Publications</span>.
              </p>
            </div>
          </div>
        </section>
        <FaqSection />
      </div>
    </>
  );
}
