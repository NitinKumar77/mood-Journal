import React from "react";
import Description from "../components/description/Description";
import VectorFLow from "../components/vectorFlow/VectorFLow";

function Home() {
  return (
    <div className=" absolute top-40 flex max-md:mx-4 max-sm:mx-[1.13] max-md:my-[3.75rem] max-md:flex-col justify-center  mb-[10.19rem] ">
      <Description />
      <VectorFLow />
    </div>
  );
}

export default Home;
