import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useSelector } from "react-redux";

export default function StatsCharts({ searchParams }) {
  const moodsData = useSelector((state) => state.mood.data);
  const filterValue = searchParams.get("filter");

  const filterData = filterValue
    ? moodsData.filter((data) => data.mood === filterValue)
    : moodsData;

  const dateToMoodCount = {};

  filterData.forEach((data) => {
    const date = data.date.substring(0, 10);
    if (!dateToMoodCount[date]) {
      dateToMoodCount[date] = {
        Happy: 0,
        Sad: 0,
        Normal: 0,
      };
    }
    dateToMoodCount[date][data.mood]++;
  });

  const labels = Object.keys(dateToMoodCount);
  const happyData = labels.map((date) => dateToMoodCount[date].Happy);
  const sadData = labels.map((date) => dateToMoodCount[date].Sad);
  const normalData = labels.map((date) => dateToMoodCount[date].Normal);
  console.log(dateToMoodCount, "===========", happyData, labels);

  const data = {
    labels,
    datasets: [
      {
        label: "Happy",
        data: happyData,
        fill: false,
        borderColor: "white",
        pointBackgroundColor: "white",
      },
      {
        label: "Normal",
        data: normalData,
        fill: false,
        borderColor: "Yellow",
        pointBackgroundColor: "Yellow",
      },
      {
        label: "Sad",
        data: sadData,
        fill: false,
        borderColor: "Red",
        pointBackgroundColor: "Red",
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}
