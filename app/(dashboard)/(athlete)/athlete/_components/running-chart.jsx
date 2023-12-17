"use client";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale, // y
  CategoryScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  LineElement,
  LinearScale, // y
  CategoryScale,
  PointElement
);

import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";
function RunningChart() {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "label 1",
        data: [90, 120, 70, 130, 80, 140, 50],
        backgroundColor: "#D5FE63",
        borderColor: "#D5FE63",
        tension: 0.5,
      },
      // {
      //   label: "label 2",
      //   data: [5, 6, 4, 8, 9, 7, 6],
      //   backgroundColor: "#D5FE63",
      //   // borderColor: "aqua",
      //   // borderWidth: 1,
      //   borderRadius: 50,
      // },
    ],
  };
  return (
    <div className="">
      <Typography align="center" variant="h5" className=" text-gray-500">
        Running
      </Typography>
      <Line options={options} data={data}></Line>
    </div>
  );
}

export default RunningChart;
