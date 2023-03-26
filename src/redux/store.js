import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi } from 'redux/contactSlice';
import { filterSlice } from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phoneBookApi.middleware,
  ],
});

setupListeners(store.dispatch);
