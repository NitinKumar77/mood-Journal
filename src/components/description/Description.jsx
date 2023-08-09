import React from "react";

function Description() {
  return (
    <div className="max-md:m-0 max-md:w-full max-md:max-w-full max-md:max-h-full max-md:px-4 max-h-[23.4rem] max-w-[27.5rem] mt-[3.75rem]  ml-[6.25rem] mr-[4.26rem] max-sm:m-0 max-sm:p-0">
      <div className="flex flex-col text-black  text-2xl font-semibold leading-normal dark:text-white max-md:text-1.75rem max-md:font-semibold max-md:font-outfit max-md:leading-normal">
        <span>Register Your Mood</span>
        <span>And Improve Your Well-Being</span>
      </div>
      <div className=" py-8 max-md:pr-[60px] pr-[33px]  max-md:text-1.75rem max-md:font-outfit  max-md:font-bold max-md:leading-normal text-black  text-lg font-normal leading-normal dark:text-white max-sm:pr-0 max-sm:pb-1 ">
        <div>
          {" "}
          Take a moment each day to think about your feelings and emotions, how
          you are feeling.
        </div>
        <br />
        <div>
          Select the mood that best describes you and identify thought patterns
          and mood swings. This daily practice can provide good insights and
          contribute to your well-being.
        </div>
      </div>
    </div>
  );
}

export default Description;
