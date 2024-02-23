"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const TotalUserChart = ({ data,title }) => {
  return (
    <div className="w-full md:w-1/2 p-2 text-white h-[400px] ">
        <h2 className='text-xl mb-5 font-bold'>{title}</h2>
        <ResponsiveContainer width="99%" height={300}>
          <AreaChart data={data}>
            <Tooltip
              contentStyle={{
                background: "#152238",
                color: "ffffff",
                border: "none",
                borderRadius: "4px",
              }}
              dataKey="data"
            />
            <YAxis />
            <XAxis dataKey="name" />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#ffffff"
              strokeWidth={2}
              fill="#152238"
            />
          </AreaChart>
        </ResponsiveContainer>
      
    </div>
  );
};

export default TotalUserChart;
