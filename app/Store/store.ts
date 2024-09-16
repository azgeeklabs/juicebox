import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../reducers/serviceSlice';

export const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;