import React from "react";
import Description from "../components/description/Description";
import VectorFLow from "../components/vectorFlow/VectorFLow";

function Home() {
  return (
    <div className="flex max-md:mx-8 max-md:my-[3.75rem] max-md:flex-col justify-center  mb-[10.19rem]">
      <Description />
      <VectorFLow />
    </div>
  );
}

export default Home;
