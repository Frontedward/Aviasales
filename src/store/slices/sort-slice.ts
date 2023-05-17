import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TicketType } from '../../types/types';

type SortCallbackType = (a: TicketType, b: TicketType) => number;
type SortCallbacksType = {
  optimal?: SortCallbackType;
  fast?: SortCallbackType;
  lowcost?: SortCallbackType;
};

export const sortCallbacks: SortCallbacksType = {
  optimal: (a, b) => a.segments[0].duration + a.segments[1].duration + a.price - (b.segments[0].duration + b.segments[1].duration + b.price),
  fast: (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration),
  lowcost: (a, b) => a.price - b.price,
};

export type SortTypes = keyof SortCallbacksType;


type SortState = {
  sortType: SortTypes;
};

const initialState: SortState = {
  sortType: 'lowcost',
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