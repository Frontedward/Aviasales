import { useEffect, useState } from 'react';

import { useAppSelector } from '../store/hooks';
import { selectTickets } from '../store/slices/tickets-slice';
import { selectFilters } from '../store/slices/filter-slice';
import { selectSortType } from '../store/slices/sort-slice';
import { TicketType } from '../types/tickets';
import { sortCallbacks } from '../lib/sort-callbacks';
import { filtersCallbacks } from '../lib/filter-callbacks';

export const useFilteredAndSortedTickets = () => {
  const tickets = useAppSelector(selectTickets);
  const filters = useAppSelector(selectFilters);
  const activeSort = useAppSelector(selectSortType);

  const [filteredAndSortedTickets, setFilteredAndSorted] = useState<
    TicketType[]
  >([]);

  useEffect(() => {
    const activeFilters = filters.filter((filter) => filter.active);

    const sorted = [...tickets].sort((a, b) => {
      const callback = sortCallbacks[activeSort];

      return callback ? callback(a, b) : 1;
    });
    const filtered = sorted.filter((ticket) => {
      return !activeFilters.length
        ? true
        : activeFilters.every((filter) => {
            const { filterType, filterPayload } = filter;
            const filterCallback = filtersCallbacks[filterType];

            return filterCallback(ticket, filterPayload);
          });
    });

    setFilteredAndSorted(filtered);
  }, [tickets, activeSort, filters]);

  return filteredAndSortedTickets;
};
