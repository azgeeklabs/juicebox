import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RouteState {
  contentWebsiteRoute: string;
}

const initialState: RouteState = {
  contentWebsiteRoute:
    typeof window !== "undefined" && localStorage.getItem("contentWebsiteRoute")
      ? (localStorage.getItem("contentWebsiteRoute") as string) // Type assertion to string
      : "haveWebsite",
};

const contentWebsiteSlice = createSlice({
  name: "contentWebsite",
  initialState,
  reducers: {
    setContentWebsiteRoute(state, action: PayloadAction<string>) {
      state.contentWebsiteRoute = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("contentWebsiteRoute", action.payload); // Save to localStorage
      }
    },
  },
});

export const {setContentWebsiteRoute} = contentWebsiteSlice.actions
export default contentWebsiteSlice.reducer