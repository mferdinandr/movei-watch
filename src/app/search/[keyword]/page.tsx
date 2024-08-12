import MovieList from '@/components/MovieList';
import Header from '@/components/MovieList/Header';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

type Params = {
  keyword: string;
};

const Page = async ({ params }: { params: Params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${BASE_URL}search/movie?query=${keyword}&api_key=${API_KEY}`
  );

  const searcedMovies = await response.json();

  return (
    <div className="my-2">
      <section>
        <Header
          title={`Pencarian film untuk '${decodeURIComponent(keyword)}'`}
          type={'main'}
          linkHref="/populer"
        />
        <MovieList api={searcedMovies} />
      </section>
    </div>
  );
};

export default Page;
