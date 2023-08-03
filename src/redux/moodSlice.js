import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  isLoading: false,
  isSending: false,
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
    setIsSending(state, action) {
      state.isSending = action.payload;
    },
    addMoodToList(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const getMoodListThunk = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch("http://localhost:8080/api/mood", options);
        if (!response.ok) {
          dispatch(setIsLoading(false));
          throw new Error(
            `HTTP error! Status: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        dispatch(setIsLoading(false));
        dispatch(setData(data.moods));
      } catch (error) {
        console.log(error.message);
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  };
};

export const postMoodListThunk = (moodData) => {
  return async (dispatch) => {
    const fetchData = async (bodyData) => {
      dispatch(setIsSending(true));
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      };

      try {
        const response = await fetch("http://localhost:8080/api/mood", options);
        if (!response.ok) {
          dispatch(setIsSending(false));
          throw new Error(
            `HTTP error! Status: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        dispatch(setIsSending(false));
        return data;
      } catch (error) {
        console.log(error.message);
        dispatch(setIsSending(false));
      }
    };

    if (moodData) {
      try {
        const newdata = await fetchData(moodData);
        console.log(newdata);
        dispatch(addMoodToList(newdata));
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Error: moodData is required for POST request.");
    }
  };
};

export const {
  setData,
  setIsLoading,
  addMoodToList,
  setIsSending,
  isModalOpen,
} = moodSlice.actions;
export default moodSlice;
