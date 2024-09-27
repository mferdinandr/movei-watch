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
    queryKey: ['upcomingMovies', page],
    queryFn: async () => {
      const upcomingMovies = await fetchApi('upcoming', `page=${page}`);

      return upcomingMovies;
    },
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Error to catch data</h1>;

  return (
    <div>
      <HeaderMenu title={`UPCOMING #${page}`} />
      <MovieList api={data.results} />
      <Pagination page={page} setPage={setPage} lastPage={data?.total_pages} />
    </div>
  );
};

export default Page;
