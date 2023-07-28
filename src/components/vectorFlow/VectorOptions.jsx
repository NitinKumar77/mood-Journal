import React from "react";

function VectorOptions({ icon, description, className }) {
  return (
    <div
      className={`rounded-lg absolute  flex flex-col justify-center items-center gap-4 ${className} shadow-lg w-[11.6rem] h-[6.37rem]`}
    >
      <img
        src={icon}
        alt={`icon ${description}`}
        width={"42px"}
        height={"40px"}
      />
      <div className="text-black text-center  text-xs  font-medium leading-normal">
        {description}
      </div>
    </div>
  );
}

export default VectorOptions;
