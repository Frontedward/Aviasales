import { FilterType, FilterInitialType } from '../types/filters';
import { nanoid } from '@reduxjs/toolkit/dist/nanoid';

type CreateFilterType = (initial: FilterInitialType) => FilterType;

export const createFilter: CreateFilterType = ({
  label,
  filterType,
  filterPayload,
}) => {
  return {
    id: nanoid(),
    label,
    filterType,
    filterPayload,
    active: false,
  };
};
