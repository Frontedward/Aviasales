import React from "react";

import './ticket.css';
import TicketSegment from "./ticket-segment";
import { TicketType } from "../../types/types";

const Ticket = (props: TicketType) => {
  const { price, carrier, segments } = props;
  const [startEnd, endStart] = segments;

  return (
    <div className='column_tickets ticket'>
      <div className='ticket_header'>
        <p className='ticket_price'>{price} Р</p>
        <div className='ticket_lines-logo'>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`}  alt=''/>
        </div>
      </div>
      <div className='ticket_body'>
        <TicketSegment {...startEnd} />
        <TicketSegment {...endStart} />
      </div>
    </div>
  )
}

export default Ticket;