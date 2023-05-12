import axios from 'axios';
import { baseURL } from './core';

export type CreateSearchResponse = {
  searchId: string;
};

export const createSearch = async () => {
  const url = `${baseURL}/search`;
  const response = await axios.get(url);

  return response.data;
};
