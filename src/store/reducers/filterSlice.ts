import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  registrySearch: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.registrySearch = action.payload;
    },
    clearFilter: (state) => {
      state.registrySearch = '';
    },
  },
});

export const { clearFilter, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
