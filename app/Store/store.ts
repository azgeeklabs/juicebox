import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../reducers/serviceSlice';
import routeSlice from '../reducers/routeSlice';
import contentBlogSlice from '../reducers/contentBlogSlice';

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    route: routeSlice,
    contentBlog: contentBlogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;