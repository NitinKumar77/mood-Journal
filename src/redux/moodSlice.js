import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  isLoading: false,
  modalOpen: false,
};
const moodSlice = createSlice({
  name: "moodSlice",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    isModalOpen(state, action) {
      state.modalOpen = action.payload;
    },
    addMoodToList(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const moodListThunk = (moodData) => {
  return async (dispatch) => {
    const fetchData = async (method = "GET", bodyData) => {
      dispatch(setIsLoading(true));
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyData ? JSON.stringify(bodyData) : null,
      };

      const response = await fetch("http://localhost:8080/api/mood", options);
      if (!response.ok) {
        dispatch(setIsLoading(false));
        throw new Error(
          `HTTP error! Status: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      dispatch(setIsLoading(false));
      return data;
    };

    try {
      if (moodData) {
        const newdata = await fetchData("POST", moodData);
        console.log(newdata);
        dispatch(addMoodToList(newdata));
      } else {
        const data = await fetchData("GET");
        dispatch(setData(data.moods));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const { setData, setIsLoading, addMoodToList, isModalOpen } =
  moodSlice.actions;
export default moodSlice;
