import Navbar from "../components/Navbar";
import Image from "next/image";
import React from "react";
import headerImg from "../images/header.png";
import iconImg from "../images/SVG.png";
import iconImg2 from "../images/aboutsection1.png";
import iconImg3 from "../images/aboutsection2.png";
import iconImg4 from "../images/aboutsection3.png";
import iconImg5 from "../images/aboutsection4.png";
import Link from "next/link";
import Footer from "../components/Footer";
import BooksSection from "../components/BooksSection";
import ArticlesSection from "../components/ArticlesSection";
import JournalsSection from "../components/JournalsSection";
import LatestNewsSection from "../components/LatestNewsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100  px-6">
        <section className="header-section mt-16 py-6 grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-6 relative">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-center md:text-start text-3xl md:text-6xl font-bold pr-0 md:pr-8 heading-color">
              Publishing Excellence, Inspiring Progress
            </h1>
            <p className="text-gray-500 mt-4 text-xs  md:text-sm text-center md:text-start">
              Crafting High-Quality Research dedicated to advancing the
              frontiers of knowledge through high-quality scientific publishing.
            </p>
          </div>
          <div className="hidden md:block relative">
            <Image src={headerImg} alt="header" className=" ml-auto" />
            <span className="absolute right-0 max-w-[170px] bottom-[15px] text-gray-800 text-sm font-bold">
              Serving scientists, scholars, academics, and engineers.
            </span>
          </div>
          <Image
            src={iconImg}
            alt="icon"
            className="absolute bottom-[-40px] left-[0px]"
          />
        </section>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-6 relative mt-32">
        <div className="pr-0 ">
          <button className="about-btn mb-4">ABOUT US</button>
          <h1 className="heading-color text-xl md:text-4xl font-bold">
            Welcome to  Ariston Publications
          </h1>
          <p className="text-gray-500 mt-4">
            Ariston Publications is committed to advancing the frontiers of
            knowledge through high-quality scientific publishing. Our mission is
            to provide a robust platform for researchers, scholars, and
            academics to share their discoveries and contribute meaningfully to
            the global scientific community. With a steadfast dedication to
            excellence, integrity, and innovation, Ariston Publications aims to
            be a trusted partner for researchers worldwide. We support the
            global research ecosystem by fostering the dissemination of
            groundbreaking studies, ensuring accessibility, inclusivity, and
            impact. Our publishing scope is dynamic and interdisciplinary,
            reflecting the evolving nature of scientific inquiry. We welcome
            contributions from all fields that drive intellectual progress,
            foster collaboration, and expand the boundaries of human
            understanding.
          </p>
          <div className="mt-4">
            <Link href={"/about-us"} className="btn text-gray-700 shadow">
              See More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 container gap-4">
          <div className="bg-gray-100 rounded-lg border border-gray-400 shadow p-4">
            <Image
              className="w-[auto] h-[50px] mb-4"
              src={iconImg2}
              alt="icon"
            />
            <h1 className="heading-color text-xl font-bold">
              Empowering Discovery:
            </h1>
            <p className="text-xs md:text-sm mt-1 text-gray-500">
              Ariston Publications is dedicated to fostering groundbreaking
              research across diverse disciplines.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg border border-gray-400 shadow p-4">
            <Image
              className="w-[auto] h-[50px] mb-4"
              src={iconImg3}
              alt="icon"
            />
            <h1 className="heading-color text-xl font-bold">
              Empowering Discovery:
            </h1>
            <p className="text-xs md:text-sm mt-1 text-gray-500">
              Ariston Publications is dedicated to fostering groundbreaking
              research across diverse disciplines.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg border border-gray-400 shadow p-4">
            <Image
              className="w-[auto] h-[50px] mb-4"
              src={iconImg4}
              alt="icon"
            />
            <h1 className="heading-color text-xl font-bold">
              Empowering Discovery:
            </h1>
            <p className="text-xs md:text-sm mt-1 text-gray-500">
              Ariston Publications is dedicated to fostering groundbreaking
              research across diverse disciplines.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg border border-gray-400 shadow p-4">
            <Image
              className="w-[auto] h-[50px] mb-4"
              src={iconImg5}
              alt="icon"
            />
            <h1 className="heading-color text-xl font-bold">
              Empowering Discovery:
            </h1>
            <p className="text-xs md:text-sm mt-1 text-gray-500">
              Ariston Publications is dedicated to fostering groundbreaking
              research across diverse disciplines.
            </p>
          </div>
        </div>
      </section>
      <JournalsSection />
      <BooksSection />
      <ArticlesSection />
      <LatestNewsSection />
      <Footer />
    </>
  );
};

export default Home;
