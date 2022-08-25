import axios from 'axios';
import qs from 'query-string';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'f81fc99f199c4fdb98a5f0d17d87c76c';

export const fetchNews = (params) => {
  const searchParams = qs.stringify(params, { skipNull: true });

  return axios.get(`${BASE_URL}/everything?apiKey=${API_KEY}&${searchParams}`);
};
