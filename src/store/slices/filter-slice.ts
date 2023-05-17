import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { FilterType, FilterInitialType } from '../../types/types';
import { nanoid } from '@reduxjs/toolkit';
import { NanoId } from '../../types/types';

type CreateFilterType = (initial: FilterInitialType) => FilterType;

export const createFilter: CreateFilterType = ({ label, filterType, filterPayload }) => {
  return {
    id: nanoid(),
    label,
    filterType,
    filterPayload,
    active: false,
  };
};

type FilterState = {
  filters: FilterType[];
};

const initialState: FilterState = {
  filters: [],
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterInitialType>) => {
      state.filters.push(createFilter(action.payload));
    },
    changeFilter: (state, action: PayloadAction<NanoId>) => {
      state.filters = state.filters.map((filter) => ({
        ...filter,
        active: action.payload === filter.id ? !filter.active : filter.active,
      }));
    },
    changeAllTickets: (state, action) => {
      state.filters = state.filters.map((filter) => ({
        ...filter,
        active: action.payload,
      }));
    },
  },
});

export const { setFilter, changeFilter, changeAllTickets } = filterSlice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;

export default filterSlice.reducer;