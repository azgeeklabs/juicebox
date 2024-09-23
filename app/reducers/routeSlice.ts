import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouteState {
  chosenRoute: string;
}

const initialState: RouteState = {
  chosenRoute: typeof window !== "undefined" && localStorage.getItem("smRoute") 
    ? localStorage.getItem("smRoute") as string // Type assertion to string
    : 'create',
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setChosenRoute(state, action: PayloadAction<string>) {
      state.chosenRoute = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("smRoute", action.payload); // Save to localStorage
      }
    },
  },
});

export const { setChosenRoute } = routeSlice.actions;
export default routeSlice.reducer;
