import React, { useMemo } from 'react';

import {
  StyledTickedSegmentCol,
  StyledTicketSegment,
  TicketSegmentStyles,
} from './ticket-segment.styles';
import { TicketSegmentType } from '../../../../types/tickets';

const getTime = (date: Date) => {
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());

  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};
const getStartEndTime: (start: Date, duration: number) => [string, string] = (
  start,
  duration
) => {
  const durationInMs = duration * 60 * 1000;
  const end = new Date(durationInMs + start.getTime());

  return [getTime(start), getTime(end)];
};

const minutesToHours = (minutes: number) => {
  const hours = `${Math.floor(minutes / 60)}`;
  const min = `${minutes - +hours * 60}`;

  return `${hours.padStart(2, '0')}:${min.padStart(2, '0')}`;
};

function declOfNum(n: number, text_forms: string[]) {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

type ColProps = {
  head: string;
  content: string;
};
const Col = ({ head, content }: ColProps) => {
  return (
    <StyledTickedSegmentCol>
      <div className={'head'}>{head}</div>
      <div className={'content'}>{content}</div>
    </StyledTickedSegmentCol>
  );
};

type Props = TicketSegmentStyles & TicketSegmentType;

export const TicketSegment = (props: Props) => {
  const { origin, destination, date, stops, duration } = props;

  const times = useMemo<[string, string]>(
    () => getStartEndTime(new Date(date), duration),
    [date, duration]
  );
  const stopsString = useMemo<string>(() => {
    return `${stops.length} ${declOfNum(stops.length, [
      'пересадка',
      'пересадки',
      'пересадок',
    ])}`;
  }, stops);

  return (
    <StyledTicketSegment>
      <Col head={origin + ' - ' + destination} content={times.join(' - ')} />
      <Col head={'В пути'} content={minutesToHours(duration)} />
      <Col head={stopsString} content={stops.join(', ')} />
    </StyledTicketSegment>
  );
};
