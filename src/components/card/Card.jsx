import React from "react";

function Card({ icon, text }) {
  return (
    <div className="bg-customGrey p-customCardPadding flex justify-start items-center gap-[0.4rem] rounded-[0.375rem] min-w-[24.422rem] min-h-[10.5rem]">
      <div className="  flex justify-start items-center min-w-[18.422rem] min-h-[4.5rem] ">
        <span className="text-black  text-lg font-normal leading-loose">
          {text}
        </span>
      </div>
      <img className="self-center" src={icon} alt={`${icon}icon`} />
    </div>
  );
}

export default Card;
