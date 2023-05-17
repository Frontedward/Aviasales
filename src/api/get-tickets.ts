import React from 'react';
import axios from 'axios';

import { TicketType } from '../types/types';

const urlBase = 'https://aviasales-test-api.kata.academy';

export type CreateSearchResponse = {
  searchId: string;
};

export const getSearch = async () => {
      const url = `${urlBase}/search`;
      const response = await axios.get(url);
      return response.data;
};


export const getTickets = async (searchId: string) => {
  try {
    const url = `${urlBase}/tickets?searchId=${searchId}`;
    return await axios.get(url);
  } catch (e) {
    return false;
  }
};

let errorCount = 0;

export async function getAllTickets(searchId: string): Promise<TicketType[] | undefined> {
  try {
    const response = await getTickets(searchId);

    if (!response) {
      throw new Error('Билеты не найдены');
    }

    const { data, status } = response;

    if (status === 200) {
      if (!data.stop) {
        const otherTickets = await getAllTickets(searchId);

        if (otherTickets) {
          return [...data.tickets, ...otherTickets];
        }

        return [];
      }

      errorCount = 0;
      return data.tickets;
    }
  } catch (e) {
    errorCount++;

    if (errorCount === 5) {
      throw e;
    }

    return await getAllTickets(searchId);
  }
}
