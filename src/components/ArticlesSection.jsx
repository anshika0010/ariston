import Image from "next/image";
import { Calendar } from "lucide-react";
import ArticleImage from "../images/ArticleImage.png";

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
    <section className="py-12 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0C58]">
          Recent Articles
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
          >
            {/* Article Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Date Badge */}
              <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {article.date}
                </span>
              </div>
            </div>

            {/* Article Info */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
