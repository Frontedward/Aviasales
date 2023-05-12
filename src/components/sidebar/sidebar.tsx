import React, { useEffect, useState } from 'react';
import { Filter } from '../filter/filter';
import { StyledSidebar } from './sidebar.styles';
import { useAppDispatch } from '../../store/hooks';
import { useDefaultFilters } from '../../hooks/default-filters';
import { nanoid } from '@reduxjs/toolkit';
import {
  changeAllFilters,
  changeFilter,
} from '../../store/slices/filter-slice';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const filters = useDefaultFilters();
  const [allFilterActive, setAllFiltersStatus] = useState<boolean>(false);

  useEffect(() => {
    const allActive = filters.every((filter) => filter.active);
    setAllFiltersStatus(allActive);
  }, [filters]);

  const filterToggle = (id: ReturnType<typeof nanoid>) => {
    dispatch(changeFilter(id));
  };
  const toggleAllFilters = () => {
    dispatch(changeAllFilters(!allFilterActive));
  };

  const FiltersElems = filters.map((el) => (
    <Filter
      key={el.id}
      label={el.label}
      active={el.active}
      onFilterToggle={filterToggle}
      id={el.id}
    />
  ));

  return (
    <StyledSidebar>
      <h3 className={'filters-title'}>Количество пересадок</h3>
      <Filter
        label={'Все'}
        active={allFilterActive}
        onFilterToggle={toggleAllFilters}
        id={nanoid()}
      />
      {FiltersElems}
    </StyledSidebar>
  );
};
