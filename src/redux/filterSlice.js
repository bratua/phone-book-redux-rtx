import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterData: '' },
  reducers: {
    filterChange: (state, actions) => {
      state.filterData = actions.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
