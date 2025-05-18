"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { month: "Jan", revenue: 8000000 },
  { month: "Feb", revenue: 9500000 },
  { month: "Mar", revenue: 7000000 },
  { month: "Apr", revenue: 10500000 },
  { month: "May", revenue: 6000000 },
  { month: "Jun", revenue: 9000000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md text-sm">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={sampleData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `₦${value / 1_000_000}M`} />
          <Tooltip
            formatter={(value) => `₦${Number(value).toLocaleString()}`}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#5E2B97"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
