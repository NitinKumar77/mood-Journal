import React from "react";

function VectorOptions({ icon, description, className }) {
  return (
    <div
      className={`rounded-lg absolute  flex flex-col justify-center items-center gap-4 ${className} shadow-lg w-[11.6rem] h-[6.37rem] max-sm:w-[5.05rem] max-sm:h-[4rem] max-sm:gap-1 `}
    >
      <img
        src={icon}
        alt={`icon ${description}`}
        width={"42px"}
        height={"40px"}
        className="max-sm:w-[0.71rem] max-sm:h-[1rem]"
      />
      <div className="text-black text-center  text-xs  font-medium leading-normal max-sm:my-[0.19rem] max-sm:mx-[0.02rem]">
        {description}
      </div>
    </div>
  );
}

export default VectorOptions;
