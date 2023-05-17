import React from 'react';
import { SegmentType } from "../../types/types";

const TicketSegment = (row: SegmentType) => {
  const minutesToHours = (minutes: number) => {
    return {
      hours: `${Math.floor(minutes / 60)}`,
      min: `${minutes - (Math.floor(minutes / 60) * 60)}`,
    };
  };

  const stopNames = (row: SegmentType) => {
    return row.stops.join(', ');
  };

  const getTime = (date: Date) => {
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  };

  const getflightDates = (row: SegmentType) => {
    const start = new Date(row.date);
    const durationItem = row.duration;
    const durationInMs = durationItem * 60 * 1000;
    const end = new Date(start.getTime() + durationInMs);
    return [getTime(start), getTime(end)].join(' - ');
  };

  const flightTime = (time: number) => {
    return `${minutesToHours(time).hours}ч ${minutesToHours(time).min}м`;
  };

  const stopsItem = (row: SegmentType) => {
    const stops = row.stops;
    if (stops.length > 1) return (`${stops.length} пересадки`);
    else if (stops.length < 1) return ('без пересадок');
    else if (stops.length === 1) return ('1 пересадкa');
  };

  const getDestination = (row: SegmentType) => {
    return `${row.origin}-${row.destination}`;
  };

  return (
    <div className='ticket_row'>
      <div>
        <span>{getDestination(row)}</span>
        <span>{getflightDates(row)}</span>
      </div>
      <div>
        <span>в пути</span>
        <span>{flightTime(row.duration)}</span>
      </div>
      <div>
        <span>{stopsItem(row)}</span>
        <span>{stopNames(row)}</span>
      </div>
    </div>
  )
}

export default TicketSegment;