import React, { useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { getMoodListThunk } from "../../redux/moodSlice";

export default function StatsCharts({ searchParams }) {
  const moodsData = useSelector((state) => state.mood.data);
  const isLoading = useSelector((state) => state.mood.isLoading);
  const filterValue = searchParams.get("filter");
  const dispatch = useDispatch();
  const memoizedGetMoodListThunk = useMemo(() => {
    return () => dispatch(getMoodListThunk());
  }, [dispatch]);
  const isDataFetched = useSelector((state) => !!state.mood.data.length);
  useEffect(() => {
    if (!isDataFetched) {
      memoizedGetMoodListThunk();
    }
  }, [isDataFetched, memoizedGetMoodListThunk]);

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

  const maxCount = Math.max(...happyData, ...sadData, ...normalData);

  const data = {
    labels,
    datasets: [
      {
        label: "Happy",
        data: happyData,
        fill: false,
        borderColor: "lightGreen",
        pointBackgroundColor: "DarkGreen",
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

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: maxCount,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="mx-auto flex justify-center items-center my-20  max-h-96">
      {moodsData.length === 0 && (
        <div className="text-black mt-12 mb-8 dark:text-white text-center font-family-Outfit text-base font-normal leading-6 tracking-tighter flex flex-col items-center flex-shrink-0">
          Track your mood! Add a mood now.
        </div>
      )}
      {!isLoading && <Line data={data} options={options} />}{" "}
    </div>
  );
}
