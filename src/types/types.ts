import { nanoid } from '@reduxjs/toolkit';

export type TicketType = {
// Цена в рублях
price: number
// Код авиакомпании (iata)
carrier: string
// Массив перелётов.
// В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
segments: [
  {
    // Код города (iata)
    origin: string
    // Код города (iata)
    destination: string
    // Дата и время вылета туда
    date: string
    // Массив кодов (iata) городов с пересадками
    stops: string[]
    // Общее время перелёта в минутах
    duration: number
  },
  {
    // Код города (iata)
    origin: string
    // Код города (iata)
    destination: string
    // Дата и время вылета обратно
    date: string
    // Массив кодов (iata) городов с пересадками
    stops: string[]
    // Общее время перелёта в минутах
    duration: number
  }
]};

type FilterCallbackType = <T>(ticket: TicketType, payload?: T) => boolean;
type FiltersCallbacksType = {
  stops: FilterCallbackType;
};

export const filtersCallbacks: FiltersCallbacksType = {
  stops: (ticket, payload) => {
    const [{ stops: stops1 }, { stops: stops2 }] = ticket.segments;

    return stops1.length === payload || stops2.length === payload;
  },
};

type FilterTypes = keyof FiltersCallbacksType;

export type tabFilterType = {
  stops:number,
  label:string,
};

export type SegmentType = {
  origin: string,
  destination: string,
  date: string,
  stops: string[],
  duration: number,
};

export type FilterType = {
  id: string;
  filterType: FilterTypes;
  filterPayload: string | number | boolean;
  active: boolean;
};

export type FilterInitialType = {
  label: string;
  filterType: FilterTypes;
  filterPayload: string | number | boolean;
};

export type NanoId = ReturnType<typeof nanoid>;