'use client';
import React, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import MovieList from '@/components/MovieList';
import { fetchApi } from '@/lib/api-libs';

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
      const topMovies = await fetchApi('top_rated', `page=${page}`);
      setData(topMovies);
    };
    fetchTopMovie();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`TOP RATED #${page}`} />
      <MovieList api={data.results} />
      <Pagination page={page} setPage={setPage} lastPage={data?.total_pages} />
    </div>
  );
};

export default Page;
