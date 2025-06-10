"use client"; // Required for client-side interactivity (e.g., useState)

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [togglemenu, setToggleMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleDropdown = () => {
    setToggleMenu(!togglemenu);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* <marquee behavior="smooth" direction="left" className="text-sm py-1 text-gray-600 btn-green text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae blanditiis voluptatibus tempore excepturi corporis non eum commodi praesentium. Expedita assumenda consequuntur, numquam voluptatem labore dolorem corrupti unde explicabo deserunt.</marquee> */}
      <nav
        className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      bg-white shadow-md`}
      >
        <div className="container px-2 md:px-6 mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="">
                <Image src={logo} className="logo-img" alt="logo" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex flex-shrink-0  items-center md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
            <div className="hidden md:flex md:space-x-8 md:items-center">
              <Link href="/" className="text-sm text-gray-600 nav-link">
                Home
              </Link>
              <Link href="/about-us" className="text-sm text-gray-600 nav-link">
                About Us
              </Link>
              <Link href="/labs" className="text-sm text-gray-600 nav-link">
                Journals
              </Link>

              <Link href="/gallery" className="text-sm text-gray-600 nav-link">
                Books
              </Link>
              <Link
                href="/contact-us"
                className="text-sm text-gray-600 nav-link"
              >
                News and Events
              </Link>
              <Link
                href="/contact-us"
                className="text-sm text-gray-600 nav-link"
              >
                Our Services
              </Link>
            </div>
            <div className="hidden md:flex gap-4 items-center">
              <div className="flex gap-2">
                <Link
                  href="/our-impact"
                  className="text-gray-600 p-2 hover:bg-gray-100"
                >
                  <IoIosSearch className="font-bold text-lg" />
                </Link>
                <Link
                  href="/our-impact"
                  className="text-gray-600 hover:bg-gray-100 p-2 rounded cart"
                >
                  <span>2</span>
                  <RiShoppingCartLine className="font-bold text-lg" />
                </Link>
              </div>
              <div className="relative group">
                {/* Dropdown Button */}
                <button className="text-sm text-gray-600 inline-flex items-center btn-trans rounded shadow">
                  <span>Login</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="z-2 absolute right-0 mt-2 w-45 rounded-md shadow-lg bg-white ring-1 ring-zinc-200 ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link
                      href={"/block_url"}
                      className="block px-4 py-2 text-sm text-gray-600 border-b border-zinc-200 nav-link"
                    >
                      Block Coordinator
                    </Link>
                    <Link
                      href={"/block_url"}
                      className="block px-4 py-2 text-sm text-gray-600 nav-link"
                    >
                      District Coordinator
                    </Link>
                    <Link
                      href={"/block_url"}
                      className="block px-4 py-2 text-sm text-gray-600 nav-link"
                    >
                      Division Coordinator
                    </Link>
                    <Link
                      href={"/block_url"}
                      className="block px-4 py-2 text-sm text-gray-600 nav-link"
                    >
                      State Coordinator
                    </Link>
                    <Link
                      href={"/block_url"}
                      className="block px-4 py-2 text-sm text-gray-600 nav-link"
                    >
                      Lab
                    </Link>
                    <Link
                      href={"/block_url"}
                      className="block px-4 py-2 text-sm text-gray-600 nav-link"
                    >
                      Director
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 z-[-1] left-0 w-full h-[110vh] bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
            isOpen ? "opacity-60 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed z-2 top-0 w-64 bg-white h-[110vh] shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "left-[-0%]" : "left-[-100%]"
          }`}
        >
          <div className="px-4 pt-3 pb-3 bg-white flex justify-between border-b border-zinc-400">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image src={logo} className="w-[40px] h-[auto]" alt="logo" />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <div className="pb-3 space-y-1 bg-white flex flex-col">
            <Link
              href="/"
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link"
            >
              About Us
            </Link>
            <Link
              href="/labs"
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link"
            >
              Lab's
            </Link>
            {/* <Link href="/services" className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link">
              Members
            </Link> */}
            <Link
              href="/gallery"
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link"
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link"
            >
              Contact Us
            </Link>
            <Link
              href="/our-impact"
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600 nav-link"
            >
              Our Impact
            </Link>
            <div className="relative group">
              {/* Dropdown Button */}
              <button
                onClick={toggleDropdown}
                className="text-sm px-4 text-gray-600 nav-link inline-flex items-center"
              >
                <span>Login</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`overflow-hidden mt-2 shadow-lg bg-white transition-animation ${
                  togglemenu ? "h-[fit-content]" : "h-[0px]"
                } `}
              >
                <div className="py-1">
                  <Link
                    href={"/block_url"}
                    className="block px-4 py-2 text-sm text-gray-600 border-b border-zinc-200 nav-link"
                  >
                    Block Coordinator
                  </Link>
                  <Link
                    href={"/block_url"}
                    className="block px-4 py-2 text-sm text-gray-600 nav-link"
                  >
                    District Coordinator
                  </Link>
                  <Link
                    href={"/block_url"}
                    className="block px-4 py-2 text-sm text-gray-600 nav-link"
                  >
                    Division Coordinator
                  </Link>
                  <Link
                    href={"/block_url"}
                    className="block px-4 py-2 text-sm text-gray-600 nav-link"
                  >
                    State Coordinator
                  </Link>
                  <Link
                    href={"/block_url"}
                    className="block px-4 py-2 text-sm text-gray-600 nav-link"
                  >
                    Lab
                  </Link>
                  <Link
                    href={"/block_url"}
                    className="block px-4 py-2 text-sm text-gray-600 nav-link"
                  >
                    Director
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href={"/banificiary/login"}
              className="btn btn-orange shadow-lg mx-4 text-center"
            >
              Banificiary
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
