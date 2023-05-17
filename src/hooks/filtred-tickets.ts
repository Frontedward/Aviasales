import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { FilterInitialType, FilterType, TicketType } from '../types/types';
import type { AppDispatch, RootState } from '../store/store';
import { selectFilters, setFilter } from '../store/slices/filter-slice';
import { selectTickets } from '../store/slices/ticket-slice';
import { selectSortType, sortCallbacks } from '../store/slices/sort-slice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type FilterCallbackType = <T>(ticket: TicketType, payload?: T) => boolean;
type FiltersCallbacksType = {
  stops: FilterCallbackType;
};

type UseDefaultFilters = () => FilterType[];
export const useDefaultFilters: UseDefaultFilters = () => {
  const filters = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  const defaultFilters: FilterInitialType[] = [
    {
      label: 'Без пересадок',
      filterType: 'stops',
      filterPayload: 0,
    },
    {
      label: '1 пересадка',
      filterType: 'stops',
      filterPayload: 1,
    },
    {
      label: '2 пересадки',
      filterType: 'stops',
      filterPayload: 2,
    },
    {
      label: '3 пересадки',
      filterType: 'stops',
      filterPayload: 3,
    },
  ];

  useEffect(() => {
    defaultFilters.forEach((filter) => {
      dispatch(setFilter(filter));
    });
  }, []);

  return filters;
};

export const useFilteredAndSortedTickets = () => {
  const tickets = useAppSelector(selectTickets);
  const filters = useAppSelector(selectFilters);
  const activeSort = useAppSelector(selectSortType);

  const [filteredAndSortedTickets, setFilteredAndSorted] = useState<TicketType[]>([]);
  const [isSorting, setSortingStatus] = useState(false);

  useEffect(() => {
    setSortingStatus(true);
    const activeFilters = filters.filter((filter) => filter.active === true);
    const sorted = [...tickets].sort((a, b) => {
      const callback = sortCallbacks[activeSort];
      if(callback){
        const sortResult = callback(a, b);
        setSortingStatus(false)
        return sortResult;
      } else return 1;
    });

    const filtersCallbacks: FiltersCallbacksType = {
      stops: (ticket, payload) => {
        const [{ stops: startEndStops }, { stops: endStartStops }] = ticket.segments;
    if (activeFilters.length === 1) return startEndStops.length === payload && endStartStops.length === payload; 
    else if (activeFilters.length > 1) return startEndStops.length === payload || endStartStops.length === payload;
    else return true;
      },
    };

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

  return {
    tickets: filteredAndSortedTickets,
    status: isSorting,
  };
};