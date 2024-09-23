import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouteState {
  contentBlogRoute: string;
}

const initialState: RouteState = {
    contentBlogRoute: typeof window !== "undefined" && localStorage.getItem("contentBlogRoute") 
    ? localStorage.getItem("contentBlogRoute") as string // Type assertion to string
    : 'haveWebsite',
};

const contentBlogSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setContentBlogRoute(state, action: PayloadAction<string>) {
      state.contentBlogRoute = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("contentBlogRoute", action.payload); // Save to localStorage
      }
    },
  },
});

export const { setContentBlogRoute } = contentBlogSlice.actions;
export default contentBlogSlice.reducer;
