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
      console.log(state);
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    isModalOpen(state, action) {
      state.modalOpen = action.payload;
    },
  },
});

export const moodListThunk = (value = "mood") => {
  return async (dispatch) => {
    const fetchingData = async () => {
      dispatch(setIsLoading(true));
      const response = await fetch(`http://localhost:8080/api/${value}`);
      if (!response.ok) {
        dispatch(setIsLoading(false));
        throw new Error("Fetching Mooods List Went WRONG");
      }
      const data = await response.json();
      dispatch(setIsLoading(false));
      return data;
    };
    try {
      const data = await fetchingData();

      dispatch(setData(data.moods));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const { setData, setIsLoading, isModalOpen } = moodSlice.actions;
export default moodSlice;
