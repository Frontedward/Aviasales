import { NanoId } from './core';
import { FilterTypes } from '../lib/filter-callbacks';

export type FilterType = {
  id: NanoId;
  label: string;
  filterType: FilterTypes;
  filterPayload: string | number | boolean;
  active: boolean;
};

export type FilterInitialType = {
  label: string;
  filterType: FilterTypes;
  filterPayload: string | number | boolean;
};
