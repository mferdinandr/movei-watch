import MovieList from '@/components/MovieList';
import Header from '@/components/MovieList/Header';
import { fetchApi } from '@/lib/api-libs';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Page = async () => {
  const topMovies = await fetchApi('popular');

  return (
    <div className="my-2 flex flex-col space-y-10">
      <section>
        <Header
          title={'Paling Populer'}
          type={'main'}
          linkTitle="Lihat semua"
          linkHref="/populer"
        />
        <MovieList api={topMovies.results.slice(0, 10)} />
      </section>
    </div>
  );
};

export default Page;
