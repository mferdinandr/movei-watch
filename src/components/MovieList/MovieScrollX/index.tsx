import Image from 'next/image';
import Link from 'next/link';
import Text from '@/components/Text';
import Header from '../Header';

const MovieScrollX = ({ api }: { api: any }) => {
  return (
    <div>
      {api.length > 0 && (
        <Header
          title={'Collection'}
          type={'main'}
          linkTitle="Show More"
          linkHref="/user/dashboard/collections"
        />
      )}
      <div className="flex overflow-x-auto whitespace-nowrap space-x-2 md:space-x-3 py-2">
        {api?.length > 0 &&
          api.map((data: any) => {
            const posterPath = data.poster_path
              ? data.poster_path.startsWith('/')
                ? data.poster_path
                : `/${data.poster_path}`
              : '';

            return (
              <Link
                key={data.id}
                href={`/movie/${data.movie_id}`}
                className="shadow-xl rounded-lg cursor-pointer border flex-shrink-0  hover:text-color-primary transition-all bg-color-accent text-color-dark h-max object-cover w-[200px]"
              >
                {data.poster_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    alt={`${data.original_title} Image`}
                    width={350}
                    height={350}
                    className="p-1 rounded-xl max-h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="p-1 h-[295px] border-b shadow-xl px-1 pt-1 rounded-xl flex items-center text-center justify-center">
                    <Text
                      title="No Image Available"
                      className="text-color-secondary "
                    />
                  </div>
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MovieScrollX;
