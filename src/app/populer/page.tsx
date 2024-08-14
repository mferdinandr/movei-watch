'use client';
import React, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import MovieList from '@/components/MovieList';
import { fetchApi } from '@/lib/api-libs';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Page = () => {
  const [data, setData] = useState<MovieApiResponse>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchTopMovie = async () => {
      const topMovies = await fetchApi('popular', `page=${page}`);
      setData(topMovies);
    };
    fetchTopMovie();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`FILM TERPOPULER #${page}`} />
      <MovieList api={data.results} />
      <Pagination page={page} setPage={setPage} lastPage={data?.total_pages} />
    </div>
  );
};

export default Page;
