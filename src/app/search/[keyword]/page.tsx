import MovieList from '@/components/MovieList';
import Header from '@/components/MovieList/Header';
import { searchDataApi } from '@/lib/api-libs';

type Params = {
  keyword: string;
};

const Page = async ({ params }: { params: Params }) => {
  const { keyword } = params;

  const searcedMovies = await searchDataApi(keyword);

  return (
    <div className="my-2">
      <section>
        <Header
          title={`Pencarian film untuk '${decodeURIComponent(keyword)}'`}
          type={'main'}
          linkHref="/populer"
        />
        <MovieList api={searcedMovies.results} />
      </section>
    </div>
  );
};

export default Page;
