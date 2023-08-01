import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/dist";

function Card({ icon, text, setSearchParams, filterValue }) {
  const location = useLocation();
  const currentPage = location.pathname;
  const moodsData = useSelector((state) => state.mood.data);

  return (
    <div
      onClick={() => setSearchParams({ filter: text })}
      className={
        ((filterValue === true) & (text === "Happy")
          ? "bg-customTableBLue dark:bg-customDarkGreen"
          : (filterValue === true) & (text === "Normal")
          ? "bg-customTableOrange dark:bg-customDarkBrown"
          : (filterValue === true) & (text === "Sad")
          ? "bg-customSad dark:bg-customDarkBrownRed"
          : "bg-customGrey dark:bg-[#3F3F46]") + " flex flex-col"
      }
    >
      <div
        className={
          " p-customCardPadding flex shrink grow justify-start items-center gap-[0.4rem] rounded-[0.375rem] min-w-[24.422rem] min-h-[10.5rem]"
        }
      >
        <div className="  flex justify-start items-center min-w-[18.422rem] min-h-[4.5rem] ">
          <span className="text-black dark:text-white text-lg font-normal leading-loose">
            {text}
          </span>
        </div>
        <img className="self-center" src={icon} alt={`${icon}icon`} />
      </div>
      {currentPage === "/Statistics" && (
        <div className="flex  flex-col justify-center flex-shrink-0 relative bottom-[70px] text-black dark:text-white text-center  text-lg font-semibold leading-8">
          {" "}
          {calculateMoodPercentage(moodsData, text)}%
        </div>
      )}
    </div>
  );
}
function calculateMoodPercentage(moodData, mood) {
  const moodCount = moodData.filter((entry) => entry.mood === mood).length;
  return ((moodCount / moodData.length) * 100).toFixed(2);
}

export default Card;
