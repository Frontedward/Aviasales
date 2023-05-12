import React from 'react';
import { StyledTabs } from './tabs.styles';
import { Tab } from './tab/tab';
import { SortTypes } from '../../lib/sort-callbacks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectSortType, setSortType } from '../../store/slices/sort-slice';

const sorts: { label: string; name: SortTypes }[] = [
  { label: 'Самый дешевый', name: 'cheap' },
  { label: 'Самый быстрый', name: 'fast' },
  { label: 'Оптимальный', name: 'optimal' },
];

export const Tabs = () => {
  const activeSort = useAppSelector(selectSortType);
  const dispatch = useAppDispatch();

  const sortChangeHandler = (sortType: SortTypes) => dispatch(setSortType(sortType));

  const tabsElems = sorts.map((el) => {
    return <Tab key={`tab_${el.name}`} {...el} active={el.name === activeSort} onSortChange={sortChangeHandler} />;
  });

  return <StyledTabs>{tabsElems}</StyledTabs>;
};
