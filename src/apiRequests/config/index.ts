import axios from 'axios';

export const binanceAPI = axios.create({
  baseURL: `https://api.binance.com/api/v3`,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});
