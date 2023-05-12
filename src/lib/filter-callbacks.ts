import { TicketType } from '../types/tickets';

type FilterCallbackType = <T>(ticket: TicketType, payload?: T) => boolean;
type FiltersCallbacksType = {
  stops: FilterCallbackType;
};

export const filtersCallbacks: FiltersCallbacksType = {
  stops: (ticket, payload) => {
    const [{ stops: stops1 }, { stops: stops2 }] = ticket.segments;

    return stops1.length === payload || stops2.length === payload;
  },
};

export type FilterTypes = keyof FiltersCallbacksType;
