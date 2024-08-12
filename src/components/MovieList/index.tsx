import Image from 'next/image';
import Link from 'next/link';

type MovieListProps = {
  imageURL: string;
  title: string;
  id: number;
};

const MovieList = ({ api }) => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-2">
      {api.results.map((data) => {
        return (
          <Link
            key={data.id}
            href={`/${data.id}`}
            className="shadow-xl rounded-lg cursor-pointer border border-slate-300 flex flex-col"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={`${data.original_title} Image`}
              width={350}
              height={350}
              className="p-1 rounded-xl min-h-[309.66px] object-cover"
              priority
            />
            <h3 className="font-bold text-sm md:text-md lg:text-lg xl:text-xl text-center p-2 my-auto">
              {data.original_title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
