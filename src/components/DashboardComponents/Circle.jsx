import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data01 = [{ name: "Group A", value: 400 }];
const data02 = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 700 },
];
const COLORS = ["#3A7AFC", "#5033C0"];
const Circle = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <PieChart width={800} height={400}>
        <Pie data={data01} dataKey="value" outerRadius={35} fill="#3C3868" />
        <Pie
          data={data02}
          innerRadius={36}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={-3}
          dataKey="value"
          legendType="circle"
          startAngle={30}
          endAngle={390}
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default Circle;
