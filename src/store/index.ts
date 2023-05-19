import { configureStore } from '@reduxjs/toolkit'
import checkboxReducer from './checkboxesSlice'
import ticketReducer from './ticketSlice'
import filterReducer from './filterSlice'
const store = configureStore({
  reducer: {
    checkboxes: checkboxReducer,
    filters: filterReducer,
    ticket: ticketReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
