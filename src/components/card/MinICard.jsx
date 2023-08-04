import React from "react";

function MiniCard({
  icon,
  text,
  isHighlighted,
  onclickHandler,
  setHighlightedCard,
}) {
  return (
    <div
      onClick={() => {
        onclickHandler(text);
        setHighlightedCard(text);
      }}
      className={
        ((isHighlighted === true) & (text === "Happy")
          ? "bg-customTableBLue dark:bg-customDarkGreen"
          : (isHighlighted === true) & (text === "Sad")
          ? "bg-customSad dark:bg-customDarkBrownRed"
          : (isHighlighted === true) & (text === "Normal")
          ? "bg-customTableOrange dark:bg-customDarkBrown"
          : "bg-customGrey dark:bg-[#3F3F46]") +
        " flex justify-center  rounded-[0.375rem] w-[33.33%] min-h-[4.6rem]"
      }
    >
      <img className="self-center" src={icon} alt={`${icon}icon`} />
    </div>
  );
}

export default MiniCard;
