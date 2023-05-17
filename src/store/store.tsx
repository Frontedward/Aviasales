import { configureStore } from '@reduxjs/toolkit';

import TicketsReducer from './slices/ticket-slice';
import FilterReducer from './slices/filter-slice';
import SortReducer from './slices/sort-slice';

export const store = configureStore({
  reducer: {
    tickets: TicketsReducer,
    filters: FilterReducer,
    sort: SortReducer,
  },
});
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
