import React from 'react';
import { TicketType } from '../../types/tickets';
import { TicketHeader } from './components/ticket-header/ticket-header';
import { TicketSegment } from './components/ticket-segment/ticket-segment';
import { StyledTicked, TicketStyles } from './ticket.styles';

type Props = TicketType & TicketStyles;
export const Ticket = (props: Props) => {
  const { price, carrier, segments } = props;
  const segmentsElems = segments.map((segment, i) => {
    return <TicketSegment key={`${segment.destination}_${i}`} {...segment} />;
  });

  return (
    <StyledTicked>
      <TicketHeader price={price} carrier={carrier} margin={'0 0 20px'} />
      {segmentsElems}
    </StyledTicked>
  );
};
