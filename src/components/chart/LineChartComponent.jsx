import React from "react";
import LineChart from "echarts-for-react";
import { useSelector } from "react-redux";

function LineChartComponent() {
  const data = useSelector((state) => state.mood.data);
  console.log(data);
  return (
    <LineChart
      option={{
        xAxis: {
          type: "category",
          data: [
            "2023-07-27",
            "2023-07-28",
            "2023-07-29",
            "2023-07-30",
            "2023-07-31",
            "2023-08-01",
            "2023-09-02",
          ],
        },
        yAxis: {
          type: "category",
          data: ["0", "Happy", "Normal", "Sad"],
        },
        series: [
          {
            data: ["Happy"],
            type: "line",
          },
        ],
      }}
    />
  );
}

export default LineChartComponent;
