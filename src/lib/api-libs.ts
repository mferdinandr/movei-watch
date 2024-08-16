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

// https://api.themoviedb.org/3/movie/533535/recommendations?api_key=f0cab34a34a5fa1dd6c6f2c9380ed588