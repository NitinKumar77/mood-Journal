import React from "react";

function MiniCard({ icon, text, onclickHandler }) {
  return (
    <div
      onClick={() => onclickHandler(text)}
      className={` bg-[#F2F2F2] flex justify-center  rounded-[0.375rem] min-w-[14.6rem] min-h-[4.6rem]`}
    >
      <img className="self-center" src={icon} alt={`${icon}icon`} />
    </div>
  );
}

export default MiniCard;
