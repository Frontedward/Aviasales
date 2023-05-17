import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import { TicketType } from "../../types/types";
import type { RootState } from '../store';
import { getAllTickets } from '../../api/get-tickets';

type TicketsState = {
  activeFilters: string[];
  searchId: string;
  tickets: TicketType[];
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (searchId: string) => {
  const response: TicketType[] | undefined = await getAllTickets(searchId);

  if (response) {
    return response;
  }

  throw new Error('cant get Tickets');
});

const initialState: TicketsState = {
  activeFilters: [],
  searchId: '',
  tickets: []
};

export const counterSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setSearchId: (state, action: PayloadAction<string>) => {
      state.searchId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.tickets = [...state.tickets, ...action.payload];
    });
  },
});

export const { setSearchId } = counterSlice.actions;

export const selectTickets = (state: RootState) => state.tickets.tickets;
export const selectSearchId = (state: RootState) => state.tickets.searchId;

const TicketsReducer = counterSlice.reducer;

export default TicketsReducer;