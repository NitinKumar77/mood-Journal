import React, { useEffect } from "react";
import { cardData } from "../components/vectorOptionsData";
import Card from "../components/card/Card";
import MenuSelections from "../components/menu/MenuSelections";
import { useDispatch, useSelector } from "react-redux";
import { moodListThunk } from "../redux/moodSlice";
import Table from "../components/table/Table";
import Spinner from "../components/spinner/Spinner";
import { useSearchParams } from "react-router-dom";

function History() {
  let [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.mood.isLoading);

  useEffect(() => {
    dispatch(moodListThunk());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="ml-[6.31rem] mr-[6.25rem]">
          <MenuSelections />
          <div className="summary flex justify-evenly gap-[2.09rem] mt-8">
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
