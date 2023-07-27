import React from "react";
import Description from "../components/description/Description";
import VectorFLow from "../components/vectorFlow/VectorFLow";

function Home() {
  return (
    <div className="flex justify-center mb-[10.19rem]">
      <Description />
      <VectorFLow />
    </div>
  );
}

export default Home;
