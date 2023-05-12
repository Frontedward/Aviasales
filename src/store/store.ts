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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
