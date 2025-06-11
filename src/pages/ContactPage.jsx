"use client";

import { useState } from "react";
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="text-center py-16 px-4">
          <p className="text-sm text-gray-500 mb-2">CONTACT US</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
          <div className="w-4 h-4 bg-blue-600 rotate-45 mx-auto"></div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Contact Info Sidebar */}
              <div className="md:col-span-2 bg-gradient-to-br from-purple-100 to-blue-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Us
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Our Phone number
                      </p>
                      <p className="text-gray-600">+1 234 567 8900</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Manuscript Submission Support
                      </p>
                      <p className="text-gray-600">
                        manuscripts@artisanpub.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Give us a call
                      </p>
                      <p className="text-gray-600">+1 234 567 8900</p>
                      <p className="text-gray-600">
                        123 Publishing Street, Book City
                      </p>
                      <p className="text-gray-600">New York, NY 10001, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3 p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone number
                      </label>
                      <input
                        type="text"
                        placeholder="Your phone number"
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Write your message here..."
                      className="w-full h-32 resize-none border border-gray-300 rounded-md p-2"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Dear Authors Section */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Professional author"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Professional customer"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Dear Authors
                <br />
                And Customers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Thank you for your interest in Artisan Publications. Whether
                you're an aspiring author looking to share your story with the
                world, or a reader seeking your next great read, we're here to
                serve you with dedication and excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our dedicated team is committed to providing quality service to
                help bring your literary dreams to life. We believe every story
                deserves to be told, and every reader deserves access to
                exceptional literature.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
