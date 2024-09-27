'use client';
import React, { useState } from 'react';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import MovieList from '@/components/MovieList';
import { fetchApi } from '@/lib/api-libs';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['popularMovies', page],

    queryFn: async () => {
      const popularMovies = await fetchApi('popular', `page=${page}`);

      return popularMovies;
    },
  });

  if (isLoading) return <h1>Loading.....</h1>;
  if (error) return <h1>Cannot Load Popular Movie</h1>;

  return (
    <div>
      <HeaderMenu title={`MOST POPULER #${page}`} />
      <MovieList api={data.results} />
      <Pagination page={page} setPage={setPage} lastPage={data?.total_pages} />
    </div>
  );
};

export default Page;
