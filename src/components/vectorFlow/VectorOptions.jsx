import React from "react";

function VectorOptions({ icon, description, bg, position }) {
  console.log(`bg-${bg}`);
  return (
    <div
      className={`rounded-lg absolute ${position}  flex flex-col justify-center items-center gap-4 bg-${bg} shadow-lg w-[11.6rem] h-[6.37rem]`}
    >
      <img
        src={icon}
        alt={`icon ${description}`}
        width={"42px"}
        height={"40px"}
      />
      <div className="text-black text-center  text-xs font-normal font-medium leading-normal">
        {description}
      </div>
    </div>
  );
}

export default VectorOptions;
