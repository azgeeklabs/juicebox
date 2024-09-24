import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RouteState {
  paidAdsRoute: string;
}

const initialState: RouteState = {
    paidAdsRoute:
    typeof window !== "undefined" && localStorage.getItem("paidAdsRoute")
      ? (localStorage.getItem("paidAdsRoute") as string) // Type assertion to string
      : "google",
};

const paidAdsSlice = createSlice({
  name: "paidAds",
  initialState,
  reducers: {
    setPaidAdsRoute(state, action: PayloadAction<string>) {
      state.paidAdsRoute = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("paidAdsRoute", action.payload); // Save to localStorage
      }
    },
  },
});

export const {setPaidAdsRoute} = paidAdsSlice.actions
export default paidAdsSlice.reducer