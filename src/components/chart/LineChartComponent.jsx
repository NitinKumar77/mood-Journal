import React from "react";
import LineChart from "echarts-for-react";
import { useSelector } from "react-redux";

function LineChartComponent({ searchParams }) {
  const moodsData = useSelector((state) => state.mood.data);
  const filterValue = searchParams.get("filter");

  const filterData = filterValue
    ? moodsData.filter((data) => data.mood === filterValue)
    : moodsData;

  // Convert moodsData to the desired format: [{x: "2023-07-27", y: "Normal"}, {x: "2023-07-28", y: "Sad"}, ...]
  const convertedData = filterData?.map((item) => ({
    x: item.date.substring(0, 10),
    y: item.mood,
  }));

  // Count occurrences of each data point
  const dataCounts = {};
  convertedData.forEach((item) => {
    const key = item.x + "-" + item.y;
    dataCounts[key] = (dataCounts[key] || 0) + 1;
  });

  // Create custom markPoints to show dots and display data count
  const markPoints = convertedData.map((item) => {
    const key = item.x + "-" + item.y;
    return {
      coord: [item.x, item.y],
      value: dataCounts[key],
      itemStyle: {
        color: "#3366FF", // Custom dot color
      },
      label: {
        show: true,
        formatter: "{@[1]}",
      },
    };
  });

  const option = {
    xAxis: {
      type: "category",
      data: convertedData.map((item) => item.x), // Extracting dates
      name: "Dates", // X-axis label
      nameLocation: "middle", // X-axis label position
      nameGap: 40, // Gap between X-axis label and axis
    },
    yAxis: {
      type: "category",
      data: ["Happy", "Normal", "Sad"],
      name: "Moods", // Y-axis label
      nameLocation: "middle", // Y-axis label position
      nameGap: 65, // Gap between Y-axis label and axis
    },
    series: [
      {
        data: convertedData.map((item) => ({
          name: item.y,
          value: [item.x, item.y],
        })),
        type: "line",
        markPoint: {
          data: markPoints,
        },
      },
    ],
  };

  return (
    <LineChart
      className="dark:text-white"
      option={option}
      style={{ height: "400px" }}
    />
  );
}

export default LineChartComponent;
