import axios from 'axios';
import { baseURL } from './core';
import { TicketType } from '../../types/tickets';

export const getTickets = async (searchId: string) => {
  try {
    const url = `${baseURL}/tickets?searchId=${searchId}`;
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
      throw new Error('cant get tickets');
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
