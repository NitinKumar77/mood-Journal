import React from "react";
import { cardData } from "../components/vectorOptionsData";
import Card from "../components/card/Card";

function Statistics() {
  return (
    <div className="ml-[6.31rem] mr-[6.25rem]">
      <div className="summary flex justify-evenly gap-[2.09rem] mt-8">
        {cardData.map((data) => (
          <Card icon={data.icon} text={data.text} key={data.text} />
        ))}
      </div>
    </div>
  );
}

export default Statistics;
