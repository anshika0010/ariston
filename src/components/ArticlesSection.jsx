import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react"; // Import arrow icon
import ArticleImage from "../images/ArticleImage.png";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title:
      "Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and Applications",
    date: "June 2023",
    image: ArticleImage,
  },
  {
    id: 2,
    title:
      "Investigating the Potential of Gd3+ doped LiBPO4 Phosphors in Improving White Lighting Applications: Synthesis...",
    date: "June 2023",
    image: ArticleImage,
  },
  {
    id: 3,
    title:
      "Advancements in Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and...",
    date: "June 2023",
    image: ArticleImage,
  },
];

export default function ArticlesSection() {
  return (
    <section className="py-12 px-6 sm:px-6 lg:px-8 max-w-7xl my-9 mx-auto bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58]">
          Recent Articles
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href="/article" key={article.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
              {/* Article Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Date Badge (default) */}
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md transition-all duration-300 opacity-100 group-hover:opacity-0">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {article.date}
                  </span>
                </div>

                {/* Read Article (on hover) */}
                <div className="absolute top-4 left-4 bg-blue-600 rounded-full px-3 py-1 flex items-center gap-1 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-sm font-medium text-[#0b0c58]">
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0b0c58]" />
                </div>
              </div>

              {/* Article Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 leading-tight hover:text-[#0b0c58] transition-colors">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
