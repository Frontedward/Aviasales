import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './aside-filters.css';
import { changeFilter, changeAllTickets } from "../../store/slices/filter-slice";
import { useDefaultFilters } from '../../hooks/filtred-tickets';
import { tabFilterType } from "../../types/types";
import iconCheckBox from './icon-checkbox';

export const AsideFilters = () => {

  const filters = useDefaultFilters();
  const dispatch = useDispatch();

  const [isAllTicketsShow, showAllTickets] = useState<boolean>(true);
  const transfersToggle = (stops: number) => {
    const filter = filterByStops(stops);
    dispatch(changeFilter(filter.id));
    return filter.active;
  };

  const filterByStops = (stops: number) => {
    const [filter] = filters.filter((el, i) => {
      if (el.filterPayload === stops) return el;
      else i++;
    });
    return filter;
  }

  const isFilterActive = (stops: number) => {
    const filter = filterByStops(stops);
    if (filter) return filter.active;
    else return true;
  }

  useEffect(() => {
    const allActive = filters.every((filter) => !filter.active);
    showAllTickets(allActive);
  }, [filters]);

  const allChangeToggle = () => {
    showAllTickets(true);
    dispatch(changeAllTickets(isAllTicketsShow));
  };

  const tabFilter: tabFilterType[] = [{
    stops: 0,
    label: 'Без пересадок',
  },
  {
    stops: 1,
    label: '1 пересадка',
  },
  {
    stops: 2,
    label: '2 пересадки',
  },
  {
    stops: 3,
    label: '3 пересадки',
  }
  ];

  return (<div className='aside-filters'>
    <h3>количество пересадок</h3>
    <label>
      <input type='checkbox' checked={isAllTicketsShow} onChange={() => allChangeToggle()} />
      {iconCheckBox()}
      <span>Все</span>
    </label>
    {tabFilter.map((el) => {
      return (
        <label key={el.stops}>
          <input type='checkbox' checked={isFilterActive(el.stops)} onChange={() => transfersToggle(el.stops)} />
          {iconCheckBox()}
          <span>{el.label}</span>
        </label>)
    })}
  </div>
  )
};