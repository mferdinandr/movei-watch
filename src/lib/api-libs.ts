import prisma from './prisma';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchApi = async (resource: string, query?: string) => {
  const response = await fetch(
    `${BASE_URL}movie/${resource}?api_key=${API_KEY}&${query}`
  );
  const movies = await response.json();
  return movies;
};

export const searchDataApi = async (keyword: string, query?: number) => {
  const response = await fetch(
    `${BASE_URL}search/movie?query=${keyword}&api_key=${API_KEY}&page=${query}`
  );
  const movies = await response.json();
  return movies;
};
