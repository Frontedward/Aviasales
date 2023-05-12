import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { FilterType, FilterInitialType } from '../../types/filters';
import { createFilter } from '../../lib/create-filter';
import { NanoId } from '../../types/core';

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
    changeAllFilters: (state, action) => {
      state.filters = state.filters.map((filter) => ({
        ...filter,
        active: action.payload,
      }));
    },
  },
});

export const { setFilter, changeFilter, changeAllFilters } =
  filterSlice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;

export default filterSlice.reducer;
