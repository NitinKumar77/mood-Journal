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
        (isHighlighted === true) & (text === "Happy")
          ? ` bg-blue-200 flex justify-center  rounded-[0.375rem] min-w-[14.6rem] min-h-[4.6rem]`
          : (isHighlighted === true) & (text === "Sad")
          ? ` bg-purple-100 flex justify-center  rounded-[0.375rem] min-w-[14.6rem] min-h-[4.6rem]`
          : (isHighlighted === true) & (text === "Normal")
          ? ` bg-customTableOrange flex justify-center  rounded-[0.375rem] min-w-[14.6rem] min-h-[4.6rem]`
          : ` bg-[#F2F2F2] flex justify-center  rounded-[0.375rem] min-w-[14.6rem] min-h-[4.6rem]`
      }
    >
      <img className="self-center" src={icon} alt={`${icon}icon`} />
    </div>
  );
}

export default MiniCard;
