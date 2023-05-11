import React, { useState, useEffect } from 'react';
import Ticket from '../ticket/ticket';

type TicketListProps = {
  filters: {
    stops: string[];
    sort: string;
  };
}

const TicketList = ({ TicketListProps }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/tickets');
      const data = await response.json();
      setTickets(data.tickets);
    };
    fetchData();
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    if (filters.stops.includes('all')) {
      return true;
    }
    const stops =
      ticket.segments[0].stops.length + ticket.segments[1].stops.length;
    return filters.stops.includes(stops.toString());
  });

  const sortedTickets = filteredTickets.sort((a, b) => {
    if (filters.sort === 'cheap') {
      return a.price - b.price;
    } else {
      const durationA =
        a.segments[0].duration + a.segments[1].duration;
      const durationB =
        b.segments[0].duration + b.segments[1].duration;
      return durationA - durationB;
    }
  });

  return (
    <div className="ticket-list">
      {sortedTickets.slice(0, 5).map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
