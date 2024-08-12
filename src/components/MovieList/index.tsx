import Image from 'next/image';
import Link from 'next/link';
import Text from '../Text';

const MovieList = ({ api }: { api: any }) => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-2">
      {api.results.length > 0 ? (
        api.results.map((data: any) => {
          const posterPath = data.poster_path
            ? data.poster_path.startsWith('/')
              ? data.poster_path
              : `/${data.poster_path}`
            : '';

          return (
            <Link
              key={data.id}
              href={`/${data.id}`}
              className="shadow-xl rounded-lg cursor-pointer border border-slate-300 flex flex-col"
            >
              {data.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                  alt={`${data.original_title} Image`}
                  width={350}
                  height={350}
                  className="p-1 rounded-xl max-h-full h-[300px] xl:h-[350px] object-cover"
                  priority
                />
              ) : (
                <div className="p-1 rounded-xl h-full flex items-center text-center justify-center bg-gray-200">
                  <Text title="No Image Available" />
                </div>
              )}
              <h3 className="font-bold text-sm md:text-md lg:text-lg xl:text-xl text-center p-2 my-auto">
                {data.original_title}
              </h3>
            </Link>
          );
        })
      ) : (
        <h1>Hasil tidak ditemukan</h1>
      )}
    </div>
  );
};

export default MovieList;
