import { IHomePageState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IHomePageState = {
  animePage: null,
};
const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = action.payload;
    },
  },
});

export const { setAnimePage } = HomePageSlice.actions;
export default HomePageSlice.reducer;
