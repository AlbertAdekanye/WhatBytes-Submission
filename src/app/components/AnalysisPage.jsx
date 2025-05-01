import React from "react";
import { Target } from "lucide-react";

const syllabusStats = [
  { title: "HTML Tools, Forms, History", percent: 80, color: "blue" },
  { title: "Tags & References in HTML", percent: 60, color: "orange" },
  { title: "Tables & References in HTML", percent: 24, color: "red" },
  { title: "Tables & CSS Basics", percent: 96, color: "green" },
];

const getColorClass = (color) => {
  switch (color) {
    case "blue":
      return ["bg-blue-500", "bg-blue-100"];
    case "orange":
      return ["bg-orange-500", "bg-orange-100"];
    case "red":
      return ["bg-red-500", "bg-red-100"];
    case "green":
      return ["bg-green-500", "bg-green-100"];
    default:
      return ["bg-gray-500", "bg-gray-100"];
  }
};

const SyllabusAndQuestionAnalysis = () => {
  const totalCorrect = 10;
  const totalQuestions = 15;
  const percentage = (totalCorrect / totalQuestions) * 100;

  return (
    <div className="space-y-6 p-4 max-w-xl mx-auto">
      {/* Syllabus Wise Analysis */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-4 text-black">Syllabus Wise Analysis</h3>
        <div className="space-y-4">
          {syllabusStats.map((item, i) => {
            const [barColor, bgColor] = getColorClass(item.color);
            return (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium mb-1 text-black">
                  <span>{item.title}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${bgColor}`}>
                  <div
                    className={`h-2 rounded-full ${barColor}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Analysis */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg text-black">Question Analysis</h3>
          <span className="text-blue-600 font-semibold">
            {totalCorrect}/{totalQuestions}
          </span>
        </div>
        <p className="font-medium text-sm text-gray-800 mb-1">
          You scored {totalCorrect} question correct out of {totalQuestions}.
        </p>
        <p className="text-sm text-gray-500">
          However it still needs some improvements
        </p>

        {/* Donut Chart Style Circle */}
        <div className="w-24 h-24 mt-6 mx-auto relative">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="36"
              stroke="#E5E7EB"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="36"
              stroke="#3B82F6"
              strokeWidth="10"
              strokeDasharray={`${(percentage * 226) / 100}, 226`}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <Target className="absolute text-red-500 inset-0 m-auto w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default SyllabusAndQuestionAnalysis;
