import React, { useEffect } from "react";
import { cardData } from "../components/vectorOptionsData";
import Card from "../components/card/Card";
import MenuSelections from "../components/menu/MenuSelections";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/table/Table";
import Spinner from "../components/spinner/Spinner";
import { useSearchParams } from "react-router-dom";
import { getMoodListThunk } from "../redux/moodSlice";

function History() {
  let [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.mood.isLoading);

  useEffect(() => {
    dispatch(getMoodListThunk());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="ml-[6.31rem] mr-[6.25rem] max-md:m-0 max-sm:mx-[1.19rem] max-md:mx-[2.06rem] max-sm:mt-[1.19rem]">
          <MenuSelections />
          <div className="summary flex max-sm:flex-col justify-between gap-[2.09rem] mt-8 max-md:gap-[0.625rem]">
            {cardData.map((data) => (
              <Card
                icon={data.icon}
                text={data.text}
                key={data.text}
                setSearchParams={setSearchParams}
                filterValue={filterValue === data.text}
              />
            ))}
          </div>

          {<Table searchParams={searchParams} />}
        </div>
      )}
    </>
  );
}

export default History;
