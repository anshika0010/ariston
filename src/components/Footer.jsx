import { Mail, MapPin } from "lucide-react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import logo2 from "../images/logo2.png";
import logo from "../images/logo.png";
import logo3 from "../images/logo3.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full relative pt-[250px]">
      {/* Newsletter Subscription Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/3 bg-blue-950 px-4 py-4 md:py-10 rounded-2xl w-5/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8 leading-tight mx-10">
                Subscribe To Get Information, Latest News And Other Interesting
                Events!
              </h2>

              {/* Email Subscription Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-8">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-6 py-3 bg-white rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center">
                {/* Ariston Publications Logo */}
                <div className="text-white text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    <Image
                      src={logo3}
                      alt="Ariston Publications"
                      width={140}
                      height={140}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 px-4 py-12 pt-[200px]">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Social Media */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src={logo2}
                  alt="Ariston Publications"
                  width={240}
                  height={200}
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <Image src={facebook} alt="Facebook" className="social-icon" />
                <Image src={twitter} alt="Twitter" className="social-icon" />
                <Image src={linkedin} alt="LinkedIn" className="social-icon" />
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="social-icon"
                />
              </div>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-lg font-semibold text-[#0B0C58] mb-4">
                Important Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Journal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Ethical Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Authors Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Track Your Order
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold text-[#0B0C58] mb-4">
                Useful Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Submit Manuscript
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Propose a Journal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Publish a Book
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-semibold text-[#0B0C58] mb-4">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <a
                    href="mailto:info@aristonpubs.com"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    info@aristonpubs.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                  <div className="text-gray-600">
                    <p>Aristone publication 3167</p>
                    <p>Riverview place columbus,</p>
                    <p>OH 43202 USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-400 pt-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-16">
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-black">
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Terms and Conditions
                </a>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Privacy Policy
                </a>
              </div>
              <div className="text-sm text-black text-center md:text-right">
                Copyright © 2025 Ariston Publications. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
