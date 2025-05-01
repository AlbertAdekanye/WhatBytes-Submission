'use client';
import { LucideAward, LucideChartNoAxesColumn, LucideFile } from "lucide-react";
import Link from 'next/link'; // Importing Link from Next.js for routing

export default function SideBar({ selectedPage, setSelectedPage }) {
  return (
    <div className="w-60 bg-gray-100 h-full p-4 flex flex-col space-y-6">
      {/* Dashboard Link */}
      <div
        onClick={() => setSelectedPage("dashboard")}
        className="flex items-center space-x-3 cursor-pointer order-1 sm:order-1 md:order-1"
      >
        <LucideChartNoAxesColumn className="text-2xl text-black" />
        <span className="text-lg font-bold text-black">Dashboard</span>
      </div>

      {/* Skill Test Link */}
      <div className="order-2 sm:order-2 md:order-2">
        <Link
          href="/skill-summary" // Link to the SkillSummary page
          onClick={() => setSelectedPage("skilltest")} // Update selectedPage state
          className="flex items-center space-x-3 mb-1 cursor-pointer"
        >
          <LucideAward
            className={`text-2xl ${selectedPage === "skilltest" ? 'text-blue-600' : 'text-black'}`} 
          />
          <span
            className={`text-lg font-bold ${selectedPage === "skilltest" ? 'text-blue-600' : 'text-black'}`}
          >
            Skill Test
          </span>
        </Link>
        {selectedPage === "skilltest" && (
          <div className="pl-10">
          </div>
        )}
      </div>

      {/* Internship Link */}
      <div
        onClick={() => setSelectedPage("internship")}
        className="flex items-center space-x-3 cursor-pointer order-3 sm:order-3 md:order-3"
      >
        <LucideFile className="text-2xl text-black" />
        <span className="text-lg font-bold text-black">Internship</span>
      </div>
    </div>
  );
}
