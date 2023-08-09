import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/dist";

function Card({ icon, text, setSearchParams, params, filterValue }) {
  const location = useLocation();
  const currentPage = location.pathname;
  const moodsData = useSelector((state) => state.mood.data);

  const bgColorClass =
    (filterValue &&
      text === "Happy" &&
      "bg-customTableBLue dark:bg-customDarkGreen") ||
    (filterValue &&
      text === "Normal" &&
      "bg-customTableOrange dark:bg-customDarkBrown") ||
    (filterValue &&
      text === "Sad" &&
      "bg-customSad dark:bg-customDarkBrownRed") ||
    "bg-customGrey dark:bg-[#3F3F46]";

  const cardContainerClasses = `${bgColorClass} flex flex-col flex-1 rounded-[0.375rem] w-full md:h-[201px]`;

  const moodPercentage =
    moodsData.length !== 0 && currentPage === "/Statistics"
      ? calculateMoodPercentage(moodsData, text)
      : null;

  return (
    <div
      onClick={() => {
        const updatedParams = new URLSearchParams(params);
        if (params?.get("filter") === text) {
          updatedParams.delete("filter");
        } else {
          updatedParams.set("filter", text);
        }
        setSearchParams(updatedParams.toString());
      }}
      className={cardContainerClasses}
    >
      <div className="w-full p-customCardPadding flex shrink grow justify-start max-sm:justify-between max-sm:p-0 max-md:pb-[2.62rem] items-center gap-[0.4rem]">
        <div className="flex justify-between items-center max-md:min-w-[8rem] max-sm:min-w-[5rem] max-sm:min-h-[3.25rem] min-w-[18.422rem] min-h-[4.5rem] max-sm:pl-[0.94rem]">
          <span className="text-black dark:text-white text-lg font-normal leading-loose">
            {text}
          </span>
        </div>
        {moodPercentage !== null && (
          <div className="flex sm:hidden justify-center flex-shrink-0 text-black dark:text-white text-center text-lg font-semibold leading-8">
            {moodPercentage}%
          </div>
        )}
        {icon}
      </div>
      {moodPercentage !== null && (
        <div className="flex max-sm:hidden flex-col justify-center flex-shrink-0 relative bottom-[70px] max-md:bottom-[50px] text-black dark:text-white text-center text-lg font-semibold leading-8">
          {moodPercentage}%
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
