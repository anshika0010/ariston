import graph from "../images/graph.png";
import graph1 from "../images/graph2.png";
import graph2 from "../images/graph3.png";
import graph3 from "../images/graph3.png";
import jounal from "../images/journal2.png";
import graph4 from "../images/graph4.png";
import Image from "next/image";

const articles = [
  {
    title:
      "Cost Effective IoT Based Smart Home Automation System: Design, Implementation, and Security Features",
    authors:
      "M. Senthil, G. Navaneetha Krishnan, P. Anitha, S. K. Heena, T. Jaya Sri",
    summary:
      "The proposed IoT-based smart home automation system offers an affordable and user-friendly platform for controlling household appliances. With Wi-Fi connectivity, voice commands, activity sensors, and a mobile app, the system supports seamless device integration and future scalability via an SDK. Security is reinforced using 256-bit AES encryption, while energy efficiency is achieved through features like automated device shutdown and real-time energy monitoring.",
    date: "28 July 2024",
    pages: "158-167",
    doi: "https://doi.org/10.69626/cai.2024.0158",
    img: graph,
  },
  {
    title:
      "Transforming Healthcare with Deep Learning: A Revolutionary Approach to Health Information System",
    authors:
      "Saravanan Kandaneri Ramamoorthy, Praveenkumar Babu, S.Sakena Benazer",
    summary:
      "This paper introduces HealthAI, a deep learning-based framework for healthcare systems. By integrating AI with diverse data sources, HealthAI supports predictive analytics, personalized plans, and real-time decision-making.",
    date: "07 August 2024",
    pages: "168-177",
    doi: "https://doi.org/10.69626/cai.2024.0168",
    img: graph1,
  },
  {
    title:
      "AI in Power Systems: Strategic Insights from Grey Relational Analysis (GRA) Evaluation of Performance Metrics",
    authors: "Reyazur Rashid Irshad, Mohammad Anas",
    summary:
      "This study examines AI in power systems, focusing on applications like fault detection, predictive maintenance, smart grid optimization, and user satisfaction using GRA.",
    date: "17 August 2024",
    pages: "178-189",
    doi: "https://doi.org/10.69626/cai.2024.0178",
    img: graph2,
  },
  {
    title:
      "Comparative Evaluation of Advanced Robotics in Engineering Using the COPRAS Method",
    authors: "Ranveer Singh, Juhi Rupal",
    summary:
      "This research paper evaluates five advanced robotics systems using the COPRAS method, ranking them based on energy efficiency, cost, and maintenance.",
    date: "24 August 2024",
    pages: "190-200",
    doi: "https://doi.org/10.69626/cai.2024.0190",
    img: graph3,
  },
  {
    title:
      "Integrating IoT and AI for Advanced Predictive Maintenance: Innovations in Condition Monitoring Systems using MOORA method",
    authors: "A. S. Y. Bin-Habtoor, Kainat Fatima",
    summary:
      "This study explores IoT-AI integration in predictive maintenance using MOORA, enhancing failure prediction with decision trees and neural networks.",
    date: "12 September 2024",
    pages: "201-207",
    doi: "https://doi.org/10.69626/cai.2024.0201",
    img: graph4,
  },
];

export default function ResearchArticles() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6  py-8 bg-white">
        {/* Left side image */}
        <div className="md:w-1/3 w-full flex justify-center items-start">
          <Image
            src={jounal}
            alt="CompSci & AI Advances Journal"
            className="w-full h-auto object-contain rounded-md shadow-md"
          />
        </div>

        {/* Right side text */}
        <div className="md:w-2/3 w-full">
          <p className="text-gray-800 text-sm leading-relaxed text-justify">
            CompSci & AI Advancesis a leading international journal focused on
            publishing high-quality research and developments in the fields of
            computer science and artificial intelligence. The journal provides a
            platform for academics, researchers, and professionals to explore
            and share innovative ideas, groundbreaking studies, and practical
            applications that drive the evolution of computing and AI
            technologies. CompSci & AI Advances has a wide-ranging scope that
            includes artificial intelligence (AI), computing systems, data
            science, human-computer interaction, robotics, automation, Machine
            Learning, Deep Learning, Neural Networks, Natural Language
            Processing (NLP), Computer Vision, Autonomous Systems, Edge
            Computing, AI Ethics, Supervised Learning, Unsupervised Learning,
            Reinforcement Learning, Big Data Analytics, Robotics, AI-Powered
            Automation, Data Mining, Generative AI, Artificial General
            Intelligence (AGI), Human-Computer Interaction (HCI), AI in
            Healthcare, Cognitive Computing, Explainable AI (XAI), AI-enhanced
            Software Development, Quantum Computing, Edge Computing, Cloud
            Computing, 5G Technology, High-Performance Computing (HPC), Parallel
            Computing, Blockchain Technology, Neuromorphic Computing,
            Cybersecurity, Internet of Things (IoT), Wearable Computing,
            Ubiquitous Computing, Green Computing, Solid-State Drives (SSD),
            Virtualization, Serverless Computing, Distributed Computing,
            Cryptography, Microprocessors, GPU Acceleration, Data Centers,
            Energy-Efficient Computing, Optical Computing, Embedded Systems, 3D
            Integration, Computer Architecture, Augmented Reality (AR), Virtual
            Reality (VR), cybersecurity, and so on. The journal is committed to
            advancing knowledge across all disciplines of computers and
            Artificial Intelligence. We emphasize interdisciplinary approaches
            and contributions that address both theoretical foundations and
            real-world challenges, while also considering the ethical and
            societal implications of technological progress. The mission of
            CompSci & AI Advances is to foster a global exchange of ideas and to
            bridge the gap between academic research and industry practice,
            promoting responsible and impactful advancements in AI and computing
            for the betterment of society.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <h1 className="  text-sm bg-gray-900 px-4 py-2 font-semibold text-white mb-4">
          Volume 1, Issue 4 (December 2024)
        </h1>
      </div>
      <div>
        {" "}
        <h1 className=" flex items-center justify-center text-xl bg-gray-200 px-4 py-2 font-semibold text-[#0B0C58] mb-4">
          Research Articles
        </h1>
      </div>
      <div className="space-y-8 px-4 py-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row gap-4 p-4 border"
          >
            <Image
              src={article.img}
              height={220}
              width={220}
              alt="article image"
              className="w-full md:w-1/4 object-contain"
            />
            <div className="flex-1">
              <h2 className="text-md font-bold text-[#0B0C58] mb-1">
                {article.title}
              </h2>
              <p className="text-xs font-semibold w-full text-black inline">
                {article.authors}
              </p>
              <p className="text-sm mt-2 text-black">
                <strong>Summary:</strong> {article.summary}
              </p>
              <p className="text-sm mt-3 font-bold mb-3 text-black">
                Research Article | PUBLISHED ONLINE: {article.date}
              </p>
              <p className="text-sm text-gray-700">
                CompSci & AI Advances 1(4), {article.pages} (2024)
              </p>
              <a
                href={article.doi}
                className="text-black text-sm hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.doi}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
