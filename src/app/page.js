'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/sideBar';
import SkillSummary from './components/SkillSummary';
import ComparisonChart from './components/ComparisonChart';
import SyllabusAndQuestionAnalysis from './components/AnalysisPage';
import AnalysisPage from './components/AnalysisPage';

export default function Page() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] bg-gray-50 overflow-auto">
        <SideBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        <div className="flex-1 p-6 space-y-6">
          {/* Two-column layout: SkillSummary on left, SyllabusAnalysis on right */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <SkillSummary />
              <ComparisonChart />
            </div>
            <div className="w-full lg:w-[500px]">
              <SyllabusAndQuestionAnalysis />
            </div>
          </div>    
        </div>
      </div>
    </>
  );
}
