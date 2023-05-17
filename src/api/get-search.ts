import axios from 'axios';

const urlBase = 'https://aviasales-test-api.kata.academy';

export type CreateSearchResponse = {
  searchId: string;
};

export const getSearch = async() => {
      const url = `${urlBase}/search`;
      const response = await axios.get(url);
      return response.data;
};