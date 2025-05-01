'use client';

import { useState } from 'react';
import { Trophy, Calendar, CheckCircle, X } from 'lucide-react';

export default function SkillSummary() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    rank: '',
    percentile: '',
    score: '',
  });

  const [errors, setErrors] = useState({ rank: '' });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === 'rank') {
      setErrors((prev) => ({ ...prev, rank: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!formData.rank || isNaN(Number(formData.rank))) {
      setErrors({ rank: 'required | should be number' });
      hasError = true;
    }

    if (hasError) return;

    console.log('Submitted:', formData);
    setShowModal(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Skill Test</h1>

      {/* Header Card */}
      <div className="bg-white border rounded-xl p-6 shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <img src="/html-icon.png" alt="HTML" className="w-16 h-16 rounded-full border" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Hyper Text Markup Language</h2>
            <p className="text-sm text-gray-500">
              Questions: <span className="font-semibold">08</span> | Duration: <span className="font-semibold">15 mins</span> | Submitted on <span className="font-semibold">5 June 2021</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition"
        >
          Update
        </button>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-white border rounded-xl p-6 mt-8 shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Quick Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <StatBox icon={<Trophy className="text-yellow-500 w-8 h-8" />} label="Your Rank" value="1" />
          <StatBox icon={<Calendar className="text-indigo-500 w-8 h-8" />} label="Percentile" value="30%" />
          <StatBox icon={<CheckCircle className="text-green-500 w-8 h-8" />} label="Correct Answers" value="10 / 15" />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Update scores</h3>
              <img src="/html-icon.png" alt="HTML" className="w-10 h-10" />
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Rank */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-white bg-blue-600 rounded-full px-2 py-0.5 text-xs font-bold">1</span>
                  Update your <span className="font-bold">Rank</span>
                </label>
                <input
                  type="text"
                  className={`mt-1 w-full px-3 py-2 border rounded-md text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.rank ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.rank}
                  onChange={(e) => handleChange('rank', e.target.value)}
                  placeholder="Rank"
                />
                {errors.rank && <p className="text-red-500 text-xs mt-1">{errors.rank}</p>}
              </div>

              {/* Percentile */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-white bg-blue-600 rounded-full px-2 py-0.5 text-xs font-bold">2</span>
                  Update your <span className="font-bold">Percentile</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.percentile}
                  onChange={(e) => handleChange('percentile', e.target.value)}
                  placeholder="Percentile"
                />
              </div>

              {/* Score */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-white bg-blue-600 rounded-full px-2 py-0.5 text-xs font-bold">3</span>
                  Update your <span className="font-bold">Current Score (out of 15)</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.score}
                  onChange={(e) => handleChange('score', e.target.value)}
                  placeholder="Score"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50 transition"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-1"
                >
                  save <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
