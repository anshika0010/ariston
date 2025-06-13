import { ChevronDown } from "lucide-react";

export default function JournalSidebar() {
  return (
    <aside className="w-[280px] bg-[#57538c] text-white p-0 rounded-t-md overflow-hidden">
      <ul className="space-y-0 divide-y divide-white/20">
        {[
          "Journal - Home",
          "About - Journal ▼",
          "Editorial Board",
          "Guide to Authors",
          "Guide for Reviewers",
          "Guide for Editors",
          "Publication Ethics",
          "Indexing and Abstracting",
          "Article Processing Charges",
          "Recommend to Library",
          "Manuscript Template",
          "Special Issues",
          "Conferences",
          "Article in Press",
          "Current Issue",
          "All Volumes",
          "Volume 1, Issue 4 (December 2024)",
          "Volume 1, Issue 3 (September 2024)",
          "Volume 1, Issue 2 (June 2024)",
          "Volume 1, Issue 1 (March 2024)",
        ].map((item, index) => (
          <li
            key={index}
            className="px-4 py-3 text-sm hover:bg-[#4a4780] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Journal Browser */}
      <div className="bg-[#f3f3f3] text-[#0B0C58] p-4">
        <h3 className="text-md font-bold mb-4">JOURNAL BROWSER</h3>

        {/* Volume Dropdown */}
        <div className="mb-3">
          <select className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none">
            <option>Volume 1</option>
            {/* Add more volumes if needed */}
          </select>
        </div>

        {/* Search Dropdown */}
        <div className="mb-4">
          <select className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none">
            <option>Search</option>
            {/* Add more search options if needed */}
          </select>
        </div>

        {/* Go Button */}
        <button className="w-full py-2 rounded-full bg-[#1e22aa] text-white font-semibold hover:bg-[#161a90] transition">
          Go
        </button>
      </div>
    </aside>
  );
}
