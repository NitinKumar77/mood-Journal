import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/dist";
import { getMoodListThunk } from "../../redux/moodSlice";
import { useEffect } from "react";

function Card({ icon, text, setSearchParams, filterValue }) {
  const location = useLocation();
  const currentPage = location.pathname;
  const moodsData = useSelector((state) => state.mood.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (moodsData.length === 0) {
      dispatch(getMoodListThunk());
    }
  }, [moodsData, dispatch]);

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
          : "bg-customGrey dark:bg-[#3F3F46]") +
        " flex flex-col flex-1 rounded-[0.375rem] w-full"
      }
    >
      <div
        className={
          "w-full p-customCardPadding flex shrink grow justify-start max-sm:justify-between max-sm:p-0 max-md:pb-[2.62rem] items-center gap-[0.4rem]   "
        }
      >
        <div className="  flex justify-start items-center max-md:min-w-[9.422rem] max-sm:min-w-[5rem] max-sm:min-h-[3.25rem] min-w-[18.422rem] min-h-[4.5rem]  max-sm:pl-[0.94rem]">
          <span className="text-black dark:text-white text-lg font-normal leading-loose">
            {text}
          </span>
        </div>
        {moodsData.length !== 0 && currentPage === "/Statistics" && (
          <div className="flex sm:hidden  justify-center flex-shrink-0  text-black dark:text-white text-center  text-lg font-semibold leading-8">
            {" "}
            {calculateMoodPercentage(moodsData, text)}%
          </div>
        )}
        <img className="self-center mr-4" src={icon} alt={`${icon}icon`} />
      </div>

      {moodsData.length !== 0 && currentPage === "/Statistics" && (
        <div className="flex max-sm:hidden flex-col justify-center flex-shrink-0 relative bottom-[70px] max-md:bottom-[50px] text-black dark:text-white text-center  text-lg font-semibold leading-8">
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
