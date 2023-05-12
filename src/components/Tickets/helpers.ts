import { IFilter, ITicket } from '../../definitions/interfaces';

import './style.scss';
import { sortByPrice, sortByTime } from '../../utils';

function getFilteredTickets(appliedFilters: IFilter[], tickets: ITicket[]) {
  const activeValues = appliedFilters.map((e) => e.value);

  if (activeValues.length > 0) {
    return tickets.filter((e: ITicket) => {
      const stops = e.segments
        .map((e) => e.stops)
        .sort((a, b) => {
          if (a.length < b.length) {
            return 1;
          }
          return -1;
        });

      const count = stops[0].length;

      return activeValues.includes(count);
    });
  }
  return tickets;
}

function getSortedTickets(activeTabId: number, tickets: ITicket[]) {
  if (activeTabId === 1) {
    return tickets.sort(sortByTime);
  }

  if (activeTabId === 2) {
    return tickets.sort(sortByPrice);
  }

  return tickets;
}

export { getFilteredTickets, getSortedTickets };
