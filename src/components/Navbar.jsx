"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [journalsDropdownOpen, setJournalsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
        setJournalsDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/">
              <Image src={logo} alt="logo" className="w-[200px] h-auto" />{" "}
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div
              className="hidden md:flex items-center space-x-6"
              ref={dropdownRef}
            >
              <Link href="/" className="nav-link text-sm text-gray-600">
                Home
              </Link>

              {/* About Dropdown */}
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className="nav-link text-sm text-gray-600">About</span>
                  <MdKeyboardArrowDown />
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded  py-2 w-48 z-50">
                  <Link
                    href="/about-us"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Author
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Editor
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Reviewer
                  </Link>
                </div>
              </div>

              {/* Journals Dropdown */}
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className="nav-link text-sm text-gray-600">
                    Journals
                  </span>
                  <MdKeyboardArrowDown />
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded  py-2 w-48 z-50">
                  <Link
                    href="/journals"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    All Journal
                  </Link>
                  <Link
                    href="/journals"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Science Journal
                  </Link>
                  <Link
                    href="/journals/arts"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Arts Journal
                  </Link>
                </div>
              </div>

              <Link href="/books" className="nav-link text-sm text-gray-600">
                Books
              </Link>
              <Link
                href="/news-and-events"
                className="nav-link text-sm text-gray-600"
              >
                News and Events
              </Link>
              <Link
                href="/contact-us"
                className="nav-link text-sm text-gray-600"
              >
                Contact Us
              </Link>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/search"
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-full"
              >
                <IoIosSearch className="text-xl" />
              </Link>
              <Link
                href="/cart"
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-full relative"
              >
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
                <RiShoppingCartLine className="text-xl" />
              </Link>
              {/* Login Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-sm text-gray-600">
                  Login
                  <MdKeyboardArrowDown className="ml-1" />
                </button>
                <div className="absolute right-0  w-40 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
                  <Link
                    href="/authors"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Authors
                  </Link>
                  <Link
                    href="/reviewers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Reviewers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-60 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 z-50 w-64 h-screen bg-white shadow-md transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-zinc-300">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-[40px]" />
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-gray-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-1 py-2 px-2">
            <Link href="/" className="px-4 py-2 text-sm text-gray-700 border-b">
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="w-full text-left flex justify-between items-center px-4 py-2 text-sm text-gray-700 border-b"
              >
                About <MdKeyboardArrowDown />
              </button>
              {aboutDropdownOpen && (
                <div className="ml-4">
                  <Link
                    href="/about-us/vision"
                    className="block px-4 py-2 text-sm text-gray-600"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-600"
                  >
                    About Author
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-600"
                  >
                    About Editor
                  </Link>
                  <Link
                    href="/about-us/team"
                    className="block px-4 py-2 text-sm text-gray-600"
                  >
                    About Reviewer
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Journals Dropdown */}
            <div>
              <button
                onClick={() => setJournalsDropdownOpen(!journalsDropdownOpen)}
                className="w-full text-left flex justify-between items-center px-4 py-2 text-sm text-gray-700 border-b"
              >
                Journals <MdKeyboardArrowDown />
              </button>
              {journalsDropdownOpen && (
                <div className="ml-4">
                  <Link
                    href="/journals/science"
                    className="block px-4 py-2 text-sm text-gray-600"
                  >
                    Science
                  </Link>
                  <Link
                    href="/journals/arts"
                    className="block px-4 py-2 text-sm text-gray-600"
                  >
                    Arts
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/books"
              className="px-4 py-2 text-sm text-gray-700 border-b"
            >
              Books
            </Link>
            <Link
              href="/news-and-events"
              className="px-4 py-2 text-sm text-gray-700 border-b"
            >
              News and Events
            </Link>
            <Link
              href="/contact-us"
              className="px-4 py-2 text-sm text-gray-700 border-b"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
