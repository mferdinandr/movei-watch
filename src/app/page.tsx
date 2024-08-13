import MovieList from '@/components/MovieList';
import Header from '@/components/MovieList/Header';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Page = async () => {
  const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`);

  const topMovies = await response.json();

  return (
    <div className="my-2">
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
