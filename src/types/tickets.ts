export type TicketType = {
  price: number;
  carrier: string;
  segments: [TicketSegmentType, TicketSegmentType];
};

export type TicketSegmentType = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};
