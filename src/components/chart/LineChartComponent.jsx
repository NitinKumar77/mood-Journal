import React from "react";
import LineChart from "echarts-for-react";
import { useSelector } from "react-redux";

function LineChartComponent() {
  const moodsData = useSelector((state) => state.mood.data);

  // Convert moodsData to the desired format: [{x: "2023-07-27", y: "Normal"}, {x: "2023-07-28", y: "Sad"}, ...]
  const convertedData = moodsData.map((item) => ({
    x: item.date.substring(0, 10),
    y: item.mood,
  }));

  console.log(moodsData, convertedData);

  const option = {
    xAxis: {
      type: "category",
      data: convertedData.map((item) => item.x), // Extracting dates
    },
    yAxis: {
      type: "category",
      data: ["Sad", "Normal", "Happy"],
    },
    series: [
      {
        data: convertedData.map((item) => ({
          name: item.y,
          value: [item.x, item.y],
        })),
        type: "line",
      },
    ],
  };

  return <LineChart option={option} style={{ height: "400px" }} />;
}

export default LineChartComponent;
