import React from 'react';

type TicketType = {
  ticket: {
    id: string;
    price: number;
    carrier: string;
    segments: [
      {
        origin: string;
        destination: string;
        date: string;
        stops: string[];
        duration: number;
      },
      {
        origin: string;
        destination: string;
        date: string;
        stops: string[];
        duration: number;
      }
    ];
  };
}

const Ticket: React.FC<TicketType> = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-price">{price.toLocaleString()} Р</span>
        <img
          className="ticket-company-logo"
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt={carrier}
        />
      </div>
      <div className="ticket-segments">
        {segments.map((segment, index) => (
          <div key={id} className="ticket-segment">
            <div className="ticket-segment-info">
              <span className="ticket-segment-title">
                {segment.origin} – {segment.destination}
              </span>
              <span className="ticket-segment-value">
                {formatDuration(segment.duration)}
              </span>
            </div>

            <div className="ticket-segment-info">
              <span className="ticket-segment-title">В пути</span>
              <span className="ticket-segment-value">
                {formatDuration(segment.duration)}
              </span>
            </div>

            <div className="ticket-segment-info">
              <span className="ticket-segment-title">
                {stopsTitle(segment.stops.length)}
              </span>
              <span className="ticket-segment-value">
                {segment.stops.join(', ') || '—'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
