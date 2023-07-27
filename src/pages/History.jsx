import React from "react";
import { cardData } from "../components/vectorOptionsData";
import Card from "../components/card/Card";
import MenuSelections from "../components/menu/MenuSelections";

function History() {
  return (
    <div className="ml-[6.31rem] mr-[6.25rem]">
      <MenuSelections />
      <div className="summary flex justify-evenly gap-[2.09rem] mt-8">
        {cardData.map((data) => (
          <Card icon={data.icon} text={data.text} />
        ))}
      </div>
      <div className="table"></div>
    </div>
  );
}

export default History;
