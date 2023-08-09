import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { cardData } from "../components/vectorOptionsData";
import Card from "../components/card/Card";
import MenuSelections from "../components/menu/MenuSelections";
import Table from "../components/table/Table";
import Spinner from "../components/spinner/Spinner";
import { getMoodListThunk } from "../redux/moodSlice";

function History() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.mood.isLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");

  const memoizedGetMoodListThunk = useMemo(() => {
    return () => dispatch(getMoodListThunk());
  }, [dispatch]);

  useEffect(() => {
    memoizedGetMoodListThunk();
  }, [memoizedGetMoodListThunk]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="absolute top-40 ml-[6.31rem] mr-[6.25rem] max-md:m-0 max-sm:mx-[1rem] max-md:mx-[2.06rem] max-sm:mt-[1.19rem]">
        <MenuSelections />
        <div className="summary flex max-sm:flex-col justify-between gap-[2.09rem] mt-8 max-md:gap-[0.625rem]">
          {cardData.map(({ icon, text }) => (
            <Card
              icon={icon}
              text={text}
              key={text}
              params={searchParams}
              setSearchParams={setSearchParams}
              filterValue={filterValue === text}
            />
          ))}
        </div>
        <Table searchParams={searchParams} />
      </div>
    </>
  );
}

export default React.memo(History);
