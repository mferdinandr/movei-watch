'use client';
import MovieList from '@/components/MovieList';
import Header from '@/components/MovieList/Header';
import { searchDataApi } from '@/lib/api-libs';
import Pagination from '@/components/Utilities/Pagination';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

type Params = {
  keyword: string;
};

const Page = ({ params: { keyword } }: { params: Params }) => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['keywordMovies', keyword],
    queryFn: async () => {
      const keywordMovies = await searchDataApi(keyword, page);

      return keywordMovies;
    },
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Error to catch data</h1>;

  return (
    <div className="my-2">
      <section>
        <Header
          title={`Result for '${decodeURIComponent(keyword)}'`}
          type={'main'}
          linkHref="/populer"
        />
        <MovieList api={data?.results} />
        {data?.results.length > 1 && (
          <Pagination
            page={page}
            setPage={setPage}
            lastPage={data?.total_pages}
          />
        )}
      </section>
    </div>
  );
};

export default Page;
