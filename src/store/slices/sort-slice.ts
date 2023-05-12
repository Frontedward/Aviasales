import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SortTypes } from '../../lib/sort-callbacks';

type SortState = {
  sortType: SortTypes;
};

const initialState: SortState = {
  sortType: 'cheap',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<SortTypes>) => {
      state.sortType = action.payload;
    },
  },
});

export const { setSortType } = sortSlice.actions;

export const selectSortType = (state: RootState) => state.sort.sortType;

export default sortSlice.reducer;
