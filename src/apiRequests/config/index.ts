import qs from 'qs';
import axios from 'axios';

export const binanceAPI = axios.create({
  baseURL: `https://api.binance.com/api/v3`,
});
