'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from 'recharts';

const data = [
  { percentile: 0 },
  { percentile: 25 },
  { percentile: 50 },
  { percentile: 75 },
  { percentile: 100 },

];

export default function ComparisonChart() {
  return (
    <div className="mt-8 bg-white border rounded-xl shadow p-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Comparison Graph</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        <strong className="text-indigo-600">You scored 90% percentile</strong> <br />which is higher than the average percentile (72%) of all engineers who took this assessment.
      </p>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="percentile" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="percentile"
              stroke="#4f46e5"
              strokeWidth={2}
            />
            <ReferenceLine
              x={90}
              stroke="red"
              strokeDasharray="3 3"
              label="Your Percentile"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
