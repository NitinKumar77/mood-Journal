import React from "react";

import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import { useSelector } from "react-redux";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Happy",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,

      borderColor: "white",
    },
    {
      label: "Normal",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "Yellow",
    },
    {
      label: "Sad",
      data: [33, 2, 35, 5, 4, 76],
      fill: false,
      borderColor: "Red",
    },
  ],
};

export default function StatsCharts() {
  const moodData = useSelector((state) => state.mood.data);
  return (
    <div>
      <Line data={data} />
    </div>
  );
}
