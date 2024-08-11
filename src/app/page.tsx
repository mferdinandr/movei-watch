import MovieList from '@/components/MovieList';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Home = async () => {
  const response = await fetch(`${BASE_URL}/popular?api_key=${API_KEY}`);

  const movies = await response.json();

  return (
    <div>
      <h1>Paling Populer</h1>
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-2">
        {movies.results.map((movie: any) => (
          <MovieList
            key={movie.id}
            title={movie.original_title}
            id={movie.id}
            imageURL={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        ))}
      </div>
      <h1>Hai</h1>
    </div>
  );
};

export default Home;
