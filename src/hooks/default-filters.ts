import { useEffect } from 'react';
import { FilterInitialType, FilterType } from '../types/filters';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectFilters, setFilter } from '../store/slices/filter-slice';

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
