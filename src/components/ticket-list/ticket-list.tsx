import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import type { } from 'redux-thunk/extend-redux';
import { TicketType } from '../../types/types';
import { getSearch } from '../../api/get-tickets';
import Ticket from '../ticket/ticket';
import { fetchTickets } from '../../store/slices/ticket-slice';
import { useFilteredAndSortedTickets } from '../../hooks/filtred-tickets';

import './ticket-list.css';

const TicketList = (props: any) => {
  const page = props.props;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const filteredAndSortedTickets = useFilteredAndSortedTickets().tickets;
  const isSorting = useFilteredAndSortedTickets().status;

  useEffect(() => {
    getSearch().then(({ searchId }) => {
      dispatch(fetchTickets(searchId));
    });
  }, []);

  useEffect(() => {
    if (filteredAndSortedTickets.length) {
      setLoading(false);
    }
  }, [filteredAndSortedTickets, isSorting]);

  const setPortionTickets = (page: number) => {
    return filteredAndSortedTickets.slice(0, page * 5);
  };
  const portionTickets: TicketType[] = setPortionTickets(page);

  const isLoading = () => {
    if (!loading && portionTickets.length)
      return portionTickets.map((el: TicketType) => {
        return <Ticket key={nanoid(9)} {...el} />;
      });
    else if (loading) return <p className="loading">Загружаем билеты...</p>;
    else if (!portionTickets.length)
      return <p className="not-found">Рейсов, подходящих под заданные фильтры, не найдено</p>;
  };
  return <div>{isLoading()}</div>;
};
export default TicketList;