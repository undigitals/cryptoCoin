import apisauce from 'apisauce';

export const baseURL = `https://api.coingecko.com/api/v3`;

export const api = apisauce.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});
