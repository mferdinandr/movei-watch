import Image from 'next/image';
import Link from 'next/link';
import Text from '../Text';

const MovieList = ({ api }: { api: any }) => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 md:gap-3 gap-2">
      {api.length > 0 ? (
        api.map((data: any) => {
          const posterPath = data.poster_path
            ? data.poster_path.startsWith('/')
              ? data.poster_path
              : `/${data.poster_path}`
            : '';

          return (
            <Link
              key={data.id}
              href={`/movie/${data.id}`}
              className="shadow-xl rounded-lg cursor-pointer border flex flex-col bg-color-accent hover:text-color-primary transition-all "
            >
              {data.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                  alt={`${data.original_title} Image`}
                  width={350}
                  height={350}
                  className="px-1 pt-1 rounded-xl max-h-full h-[300px] xl:h-[480px] object-cover"
                  priority
                />
              ) : (
                <div className="p-1 h-[300px] xl:h-[480px] border-b shadow-xl px-1 pt-1 rounded-xl flex items-center text-center justify-center">
                  <Text
                    title="No Image Available"
                    className="text-color-secondary "
                  />
                </div>
              )}
              <h3 className="font-bold text-sm md:text-md lg:text-lg xl:text-xl text-center p-2 my-auto">
                {data.original_title}
              </h3>
            </Link>
          );
        })
      ) : (
        <Text
          title="Hasil tidak ditemukan"
          type="second"
          className="text-red-500 pl-5"
        />
      )}
    </div>
  );
};

export default MovieList;
