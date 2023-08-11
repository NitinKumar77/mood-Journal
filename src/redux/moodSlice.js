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

const fetchData = async (url, options) => {
  try {
    const token = localStorage.getItem("moodjournal-accesstoken");

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
    }
    console.log(token);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getMoodListThunk = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const data = await fetchData("http://localhost:8080/api/mood", {
        method: "GET",
      });

      dispatch(setData(data.data));
    } catch (error) {
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};

export const postMoodListThunk = (moodData) => {
  return async (dispatch) => {
    if (!moodData) {
      console.log("Error: moodData is required for POST request.");
      return;
    }

    dispatch(setIsSending(true));

    try {
      const newdata = await fetchData("http://localhost:8080/api/mood", {
        method: "POST",
        body: JSON.stringify(moodData),
      });
      dispatch(addMoodToList(newdata.data));
    } catch (error) {
    } finally {
      dispatch(setIsSending(false));
    }
  };
};

export const dateListThunk = (option = "Month") => {
  return async (dispatch) => {
    if (!option) {
      console.log("Error: option is required for fetching data.");
      return;
    }

    dispatch(setIsLoading(true));

    try {
      const data = await fetchData(
        `http://localhost:8080/api/mood?date=${option}`,
        {
          method: "GET",
        }
      );

      dispatch(setData(data.data));
    } catch (error) {
    } finally {
      dispatch(setIsLoading(false));
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
