import React, { ReactNode, useEffect, useState } from 'react';
import {
  StyledMain,
  StyledMainTitle,
  StyledShowMoreButton,
} from './main.styles';
import { Tabs } from '../tabs/tabs';
import { Ticket } from '../ticket/ticket';
import { useAppDispatch } from '../../store/hooks';
import { fetchTickets, setSearchId } from '../../store/slices/tickets-slice';
import { createSearch } from '../../services/aviasales-api/create-search';
import { Loader } from '../loader/loader';
import { useFilteredAndSortedTickets } from '../../hooks/filtered-and-sorted-tickets';

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [maxVisible, setMaxVisible] = useState(5);
  const filteredAndSortedTickets = useFilteredAndSortedTickets();
  const dispatch = useAppDispatch();

  const visibleTickets = filteredAndSortedTickets.slice(0, maxVisible);
  const ticketsElems: ReactNode = visibleTickets.map((el, i) => (
    <Ticket key={`${el.carrier}_${i}`} {...el} />
  ));

  useEffect(() => {
    createSearch().then(({ searchId }) => {
      dispatch(setSearchId(searchId));
      dispatch(fetchTickets(searchId));
    });
  }, []);

  useEffect(() => {
    if (filteredAndSortedTickets.length) {
      setLoading(false);
      setMaxVisible(5);
    }
  }, [filteredAndSortedTickets]);

  if (loading) {
    return (
      <StyledMain>
        <Loader fullpage tooltip={'Загружаем билеты...'} />
      </StyledMain>
    );
  }

  if (!filteredAndSortedTickets.length) {
    return (
      <StyledMain>
        <StyledMainTitle className={'cant-find'}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </StyledMainTitle>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <Tabs />
      {ticketsElems}
      <StyledShowMoreButton onClick={() => setMaxVisible(maxVisible + 5)}>
        Показать еще 5 билетов!
      </StyledShowMoreButton>
    </StyledMain>
  );
};
