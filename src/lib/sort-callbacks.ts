import { TicketType } from '../types/tickets';

type SortCallbackType = (a: TicketType, b: TicketType) => number;
type SortCallbacksType = {
  optimal?: SortCallbackType;
  fast?: SortCallbackType;
  cheap?: SortCallbackType;
};

export const sortCallbacks: SortCallbacksType = {
  optimal: () => 1,
  fast: (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration),
  cheap: (a, b) => a.price - b.price,
};

export type SortTypes = keyof SortCallbacksType;
