import Image from "next/image";
import image from "../images/Image.png";
import image1 from "../images/Image1.png";
import image2 from "../images/Image2.png";
import image3 from "../images/Image3.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="flex justify-end px-8 py-4">
        <nav className="text-gray-600">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">About</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B0C58] mb-3 leading-tight">
            About Ariston Publications
          </h1>

          <p className="text-gray-700 text-md md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Ariston Publications is a premier publishing house dedicated to
            advancing the frontiers of knowledge and fostering a vibrant
            community of thinkers, writers, and readers.
          </p>

          <button className="bg-[#0401A5] hover:bg-blue-800 text-white px-8 py-3 rounded-full text-md font-medium">
            Explore Books
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Image 1 - Library collaboration */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image}
              alt="People collaborating in a library setting with bookshelves"
              width={300}
              height={400}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Image 2 - Computer work */}
          <Image
            src={image1}
            alt="Person working at a computer desk with monitor"
            width={300}
            height={400}
            className="w-full h-56 object-cover rounded-lg mt-24"
          />

          {/* Image 3 - Laptop work */}
          <Image
            src={image2}
            alt="Person working at a computer desk with monitor"
            width={300}
            height={400}
            className="w-full h-56 object-cover rounded-lg mt-24"
          />

          {/* Image 4 - Team collaboration */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={image3}
              alt="Two people collaborating at a desk in library"
              width={300}
              height={400}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
