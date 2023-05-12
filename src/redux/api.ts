import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get(
      'https://aviasales-test-api.kata.academy/search'
    );
    const searchId = await response.data.searchId;

    const responseTickets = await axios.get(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
    return responseTickets.data.tickets.slice(0, 20);
  } catch (e) {
    throw new Error('');
  }
}

export { fetchData };
