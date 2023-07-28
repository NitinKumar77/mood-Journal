import React from "react";
import { vectorOptionsData } from "../vectorOptionsData";
import VectorOptions from "./VectorOptions";

function VectorFLow() {
  const data = vectorOptionsData;
  return (
    <div className="mt-[6.64rem] mr-[10rem]">
      <div className="w-669 h-544">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="669"
          height="544"
          viewBox="0 0 669 544"
          fill="none"
        >
          <path
            d="M302.42 8.93132C366.215 0.578093 666.482 -20.5984 666.482 106.578C666.482 233.754 548.234 260.632 351.093 252.657C190.887 246.176 2.15254 276.379 2.15252 394.332C2.1525 531.993 280.371 550.615 404.297 538.074"
            className="stroke"
            style={{
              stroke: "#d9d9d9" /* Stroke color */,
              strokeWidth: "4px" /* Stroke width */,
              strokeDasharray: "10 10" /* Stroke dash pattern */,
            }}
          />
        </svg>
        <div className="absolute z-10 top-[14rem]">
          {data.map((option) => (
            <VectorOptions
              description={option.description}
              key={option.description}
              icon={option.icon}
              className={`${option.bg} ${option.position}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VectorFLow;
