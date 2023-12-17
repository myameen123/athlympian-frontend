"use client";
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale, // y
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  BarElement,
  LinearScale, // y
  CategoryScale,
  Tooltip,
  Legend
);

import { Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";
function SleepChart() {
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
        data: [3, 3.5, 4, 2.5, 3, 4, 2.5],
        backgroundColor: "#2D2E33",
        // borderColor: "black",
        // borderWidth: 1,
        borderRadius: 50,
      },
      {
        label: "label 2",
        data: [5, 6, 4, 8, 9, 7, 6],
        backgroundColor: "#D5FE63",
        // borderColor: "aqua",
        // borderWidth: 1,
        borderRadius: 50,
      },
    ],
  };
  return (
    <div className="">
      <Typography align="center" variant="h5" className=" text-gray-500">
        Sleep rhythm
      </Typography>
      <Bar options={options} data={data}></Bar>
    </div>
  );
}

export default SleepChart;
