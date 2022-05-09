// src/components/line.rechart.js

import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineRechartComponent = () => {
  const data = [
    {
      name: "Jan 2022",
      Routes: 3,
      Buses: 4,
      Users: 20,
    },
    {
      name: "Feb 2022",
      Routes: 12,
      Buses: 7,
      Users: 10,
    },
    {
      name: "Mar 2022",
      Routes: 15,
      Buses: 20,
      Users: 10,
    },
    {
      name: "Apr 2022",
      Routes: 7,
      Buses: 13,
      Users: 20,
    },
    {
      name: "May 2022",
      Routes: 26,
      Buses: 40,
      Users: 40,
    },
  ];

  return (
    <LineChart
      width={730}
      height={350}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Routes" stroke="#0D8619" strokeWidth={2} />

      <Line type="monotone" dataKey="Buses" stroke="#3A7AFC" strokeWidth={2} />
      <Line type="monotone" dataKey="Users" stroke="#FF9A02" strokeWidth={2} />
    </LineChart>
  );
};

export default LineRechartComponent;
