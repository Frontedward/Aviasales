import { configureStore } from '@reduxjs/toolkit';
import TicketsReducer from './slices/tickets-slice';
import FilterReducer from './slices/filter-slice';
import SortReducer from './slices/sort-slice';

export const store = configureStore({
  reducer: {
    tickets: TicketsReducer,
    filters: FilterReducer,
    sort: SortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
