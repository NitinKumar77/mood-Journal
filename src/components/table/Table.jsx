import React from "react";
import { useSelector } from "react-redux";

function Table() {
  const moodsData = useSelector((state) => state.mood.data);
  return (
    <>
      <div className=" bg-customTableBLue mt-16 flex justify-around">
        <div className="min-w-[25.85419rem] min-h-[1.5rem] flex justify-center">
          <span className=" p-3 text-black text-center  text-base font-semibold leading-6 tracking-tight">
            Content
          </span>
        </div>
        <div className="min-w-[25.85419rem] min-h-[1.5rem] flex justify-center">
          <span className=" p-3 text-black text-center  text-base font-semibold leading-6 tracking-tight">
            Mood
          </span>
        </div>
        <div className="min-w-[25.85419rem] min-h-[1.5rem] flex justify-center">
          <span className=" p-3 text-black text-center  text-base font-semibold leading-6 tracking-tight">
            Data
          </span>
        </div>
      </div>
      {moodsData?.map((data) => (
        <div
          key={data.date}
          className={
            data.mood === "Happy"
              ? "bg-customTableBLue flex mt-2 justify-around"
              : data.mood === "Sad"
              ? "bg-customSad flex mt-2 justify-around"
              : "bg-customTableOrange flex mt-2 justify-around"
          }
        >
          <div className="min-w-[25.85419rem] min-h-[1.5rem] flex  justify-center ">
            <span className=" p-3 text-black  text-base font-normal leading-6">
              {data.description}
            </span>
          </div>
          <div className="min-w-[25.85419rem] min-h-[1.5rem] flex justify-center ">
            <span className=" p-3 text-black  text-base font-normal leading-6">
              {data.mood}
            </span>
          </div>
          <div className="min-w-[25.85419rem] min-h-[1.5rem] flex justify-center ">
            <span className=" p-3 text-black  text-base font-normal leading-6">
              {data.date.split("T")[0]}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Table;
