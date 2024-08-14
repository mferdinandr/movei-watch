'use client';
import MovieList from '@/components/MovieList';
import Header from '@/components/MovieList/Header';
import { searchDataApi } from '@/lib/api-libs';
import Pagination from '@/components/Utilities/Pagination';
import { useEffect, useState } from 'react';

type Params = {
  keyword: string;
};

const Page = ({ params }: { params: Params }) => {
  const [data, setData] = useState<MovieApiResponse>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [page, setPage] = useState<number>(1);
  const { keyword } = params;

  useEffect(() => {
    const fetchSearchMovie = async () => {
      const searchedMovie = await searchDataApi(keyword, page);
      setData(searchedMovie);
    };
    fetchSearchMovie();
  }, [page]);

  return (
    <div className="my-2">
      <section>
        <Header
          title={`Pencarian film untuk '${decodeURIComponent(keyword)}'`}
          type={'main'}
          linkHref="/populer"
        />
        <MovieList api={data.results} />
        {data.results.length > 1 && (
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
