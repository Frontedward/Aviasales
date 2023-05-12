import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { TicketType } from '../../types/tickets';
import { getAllTickets } from '../../services/aviasales-api/get-tickets';

type TicketsState = {
  activeFilters: string[];
  searchId: string;
  tickets: TicketType[];
};

const initialState: TicketsState = {
  activeFilters: [],
  searchId: '',
  tickets: [],
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (searchId: string) => {
    const response: TicketType[] | undefined = await getAllTickets(searchId);

    if (response) {
      return response;
    }

    throw new Error('cant get Tickets');
  }
);

export const counterSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setSearchId: (state, action: PayloadAction<string>) => {
      state.searchId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTickets.fulfilled,
      (state, action: PayloadAction<TicketType[]>) => {
        state.tickets = [...state.tickets, ...action.payload];
      }
    );
  },
});

export const { setSearchId } = counterSlice.actions;

export const selectTickets = (state: RootState) => state.tickets.tickets;
export const selectSearchId = (state: RootState) => state.tickets.searchId;

export default counterSlice.reducer;
