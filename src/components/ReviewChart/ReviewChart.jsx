import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReviewChart = ({ ratings }) => {
  const reversedRatings = [...ratings].reverse();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={reversedRatings}
        layout="vertical"
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="count" fill="#ff8811" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ReviewChart;
