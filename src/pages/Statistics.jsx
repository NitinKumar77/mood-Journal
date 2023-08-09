import React from "react";
import { cardData } from "../components/vectorOptionsData";
import Card from "../components/card/Card";
import { useSearchParams } from "react-router-dom";
import StatsCharts from "../components/chart/StatsChart";
import MenuSelections from "../components/menu/MenuSelections";

function Statistics() {
  let [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");

  return (
    <div className="relative top-40  ml-[6.31rem] mr-[6.25rem] max-md:m-0 max-sm:mx-[1.19rem] max-sm:mt-[1.19rem] max-md:mx-[2.06rem]">
      <MenuSelections />
      <div className="summary flex justify-between gap-[2.09rem] mt-8 max-sm:flex-col max-md:gap-[0.625rem]">
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

      <StatsCharts searchParams={searchParams} />
    </div>
  );
}

export default Statistics;
