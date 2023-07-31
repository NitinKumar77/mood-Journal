import React from "react";
import { cardData } from "../components/vectorOptionsData";
import Card from "../components/card/Card";
import { useSearchParams } from "react-router-dom";
import LineChartComponent from "../components/chart/LineChartComponent";

function Statistics() {
  let [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");
  return (
    <div className="ml-[6.31rem] mr-[6.25rem]">
      <div className="summary flex justify-evenly gap-[2.09rem] mt-8">
        {cardData.map((data) => (
          <Card
            icon={data.icon}
            text={data.text}
            key={data.text}
            setSearchParams={setSearchParams}
            filterValue={filterValue === data.text}
          />
        ))}
      </div>
      <div className="text-black text-center font-family-Outfit text-base font-normal leading-6 tracking-tighter flex flex-col items-center flex-shrink-0">
        Track your mood! Add a mood now.
      </div>
      <LineChartComponent />
    </div>
  );
}

export default Statistics;
