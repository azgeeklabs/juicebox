// serviceSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the structure for the option data
interface OptionData {
  fieldOne?: string;
  fieldTwo?: string;
  fieldThree?: string;
  fieldFour?: string;
  fieldFive?: string;
}

interface Option {
  name?: string;
  choice?: string;
  ans?: string;
  data?: OptionData;
  price?: number;
  duration?: number;
  file?:any;
}

interface ServiceState {
  type: string;
  totalSteps: number;
  options: Option[];
}

const initialState: ServiceState = {
  type: "Web",
  totalSteps: 7,
  options: (() => {
    const storedOptions = localStorage.getItem("selectedOption");
    return storedOptions ? JSON.parse(storedOptions) : [];
  })(),
};

// Async thunk to call the initialize-service API endpoint
export const initializeService = createAsyncThunk(
  "service/initializeService",
  async () => {
    const response = await axios.post(
      "http://localhost:8000/api/v1/services/initialize-service",
      initialState
    );
    return response.data;
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    incrementTotalSteps(state) {
        state.totalSteps += 1; // Increment totalSteps by 1
      },
    decrementTotalSteps(state) {
        state.totalSteps -= 1; // Increment totalSteps by 1
      },
    addOption(state, action: PayloadAction<Option>) {
      state.options.push(action.payload);
    },
    changeOption(state, action: PayloadAction<Option[]>) {
      state.options = action.payload;
    },
    selectType(state, action: PayloadAction<string>) {
      state.type == action.payload;
    },
    resetState(state) {
      state = {
        type: "",
        totalSteps: 0,
        options: [],
      };
    },
  },
});

export const { addOption, changeOption, resetState, selectType,incrementTotalSteps,decrementTotalSteps } = serviceSlice.actions;

export default serviceSlice.reducer;
