import Image from "next/image";
import author1 from "../images/Image11.png";
import author2 from "../images/Image12.png";
import author3 from "../images/Image13.png";
import author4 from "../images/Image14.png";
import author5 from "../images/Image15.png";
import author6 from "../images/Image16.png";
import author7 from "../images/Image17.png";
import author8 from "../images/Image18.png";

const authors = [
  {
    name: "Cameron Williamson",
    title: "Nanomaterials Scientist",
    image: author1,
  },
  {
    name: "Jane Cooper",
    title: "Theoretical Chemist",
    image: author2,
  },
  {
    name: "Eleanor Pena",
    title: "Nanomedicine Expert",
    image: author3,
  },
  {
    name: "Brooklyn Simmons",
    title: "Physical Chemist",
    image: author4,
  },
  {
    name: "Albert Flores",
    title: "Organic Chemist",
    image: author5,
  },
  {
    name: "Devon Lane",
    title: "Computational Chemist",
    image: author6,
  },
  {
    name: "Annette Black",
    title: "Nanomaterials Scientist",
    image: author7,
  },
  {
    name: "Ronald Richards",
    title: "Theoretical Chemist",
    image: author8,
  },
];

const AboutAuthors = () => {
  return (
    <div className="bg-gray-100 px-6">
      <section className="header-section mt-16 py-6 grid grid-cols-1 md:grid-cols-2 container mx-auto px-6 md:px-6 relative">
        {/* Content */}
        <div className="md:col-span-2 w-full text-center">
          <button className="about-btn mb-4 px-6"> Our Authors </button>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58] mt-2 mb-12">
            About Authors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {authors.map((author, index) => (
              <div key={index} className="text-center">
                <div className="rounded-xl overflow-hidden shadow-md mb-4">
                  <Image
                    src={author.image}
                    alt={author.name}
                    className="w-60 h-60 object-cover"
                  />
                </div>
                <h3 className="text-[#0B0C58] font-bold">{author.name}</h3>
                <p className="text-sm text-gray-600">{author.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAuthors;
