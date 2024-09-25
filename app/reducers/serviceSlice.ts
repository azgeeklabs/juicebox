// serviceSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadFileFromLocalStorage = () => {
  const fileData = typeof window !== "undefined" && localStorage.getItem('uploadedFile');
  if (fileData) {
    const { name, type, size, base64 } = JSON.parse(fileData);

    // Convert Base64 back to a File object (this isn't exact but provides structure)
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type });
    const file = new File([blob], name, { type });

    return file;
  }
  return null;
};

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
  file:any;
  options: Option[];
}

const initialState: ServiceState = {
  type: "Web",
  totalSteps: 7,
  file:loadFileFromLocalStorage() ? loadFileFromLocalStorage() : null,
  options: (() => {
    if (typeof window !== "undefined") {
      const storedOptions = localStorage.getItem("selectedOption");
      return storedOptions ? JSON.parse(storedOptions) : [];
    }
    return [];
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
    addFile(state, action: PayloadAction<any>) {
      state.file == action.payload;
    },
    resetState(state) {
      state = {
        type: "",
        totalSteps: 0,
        file: null,
        options: [],
      };
    },
  },
});

export const { addOption, changeOption, resetState, selectType,incrementTotalSteps,decrementTotalSteps,addFile } = serviceSlice.actions;

export default serviceSlice.reducer;
