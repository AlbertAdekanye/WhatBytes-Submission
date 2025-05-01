'use client';

import { CheckCircle, Trophy, Calendar } from 'lucide-react';

export default function SkillSummary() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Skill Test</h1>

      {/* Header Card */}
      <div className="bg-white border rounded-xl p-6 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left: Icon and Text */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          <img
            src="/html-icon.png"
            alt="HTML Icon"
            className="w-16 h-16 object-cover rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Hyper Text Markup Language
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Questions: <span className="font-semibold">08</span> | Duration:{" "}
              <span className="font-semibold">15 mins</span> | Submitted on{" "}
              <span className="font-semibold">5 June 2021</span>
            </p>
          </div>
        </div>

        {/* Right: Button */}
        <div className="flex justify-center sm:justify-end">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition duration-200 w-full sm:w-auto">
            Update
          </button>
        </div>
      </div>

      {/* Quick Statistics Section */}
      <div className="bg-white border rounded-xl p-6 mt-8 shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Quick Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Your Rank */}
          <StatBox
            icon={<Trophy className="text-yellow-500 w-8 h-8" />}
            label="Your Rank"
            value="1"
          />

          {/* Percentile */}
          <StatBox
            icon={<Calendar className="text-indigo-500 w-8 h-8" />}
            label="Percentile"
            value="30%"
          />

          {/* Correct Answers */}
          <StatBox
            icon={<CheckCircle className="text-green-500 w-8 h-8" />}
            label="Correct Answers"
            value="10 / 15"
          />
        </div>
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 bg-gray-100 p-3 rounded-full">{icon}</div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-xs text-gray-500 uppercase">{label}</p>
    </div>
  );
}
