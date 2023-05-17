import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSortType, setSortType, SortTypes } from "../../store/slices/sort-slice";

import './head-sorts.css';
// import { type } from "@testing-library/user-event/dist/type";

export const HeadSorts = () => {
  const activeSort = useSelector(selectSortType);
  const dispatch = useDispatch();

  const isSortActive = (sortTipe: string) => {
    return activeSort === sortTipe;
  };

  const changeSortToggle = (sort: SortTypes) => dispatch(setSortType(sort))
  type headSortButtonType = {
    type: SortTypes,
    label: string
  }

  const headSortButtons: headSortButtonType[] = [
    {
      type: 'lowcost',
      label: 'самый дешевый',
    }, {
      type: 'fast',
      label: 'самый быстрый',
    }, {
      type: 'optimal',
      label: 'оптимальный',
    }
  ];

  return (
    <div className='column_filters'>
      {headSortButtons.map((el) => {
        return (
          <label key={el.type} className={`column_filter ${el.type}`}>
            <input name='sort' type='radio' checked={isSortActive(el.type)} onChange={() => changeSortToggle(el.type)} />
            <div className={`column_${el.type} sort-button`}>
              <span>{el.label}</span>
            </div>
          </label>
        )
      })}
    </div>
  )
}