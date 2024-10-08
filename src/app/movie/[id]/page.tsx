'use client';
import { fetchApi } from '@/lib/api-libs';
import React from 'react';
import Text from '@/components/Text';
import Image from 'next/image';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Header from '@/components/MovieList/Header';
import MovieList from '@/components/MovieList';
import CollectionButton from '@/components/Button/CollectionButton';
import { useSession } from 'next-auth/react';
import CommentInput from './CommentInput';
import CommentsBox from './CommentsBox';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/app/loading';

type Params = {
  id: string;
};

type videoParams = {
  name: string;
  key: string;
  type: string;
};

const Page = ({ params: { id } }: { params: Params }) => {
  const user = useSession();

  const { data, isLoading, error } = useQuery({
    queryKey: ['detailMovie', id],
    queryFn: async () => {
      const movieData = await fetchApi(id);
      const videoData = await fetchApi(`${id}/videos`);
      const recomendationMovies = await fetchApi(`${id}/recommendations`);

      let trailerKey = null;
      if (videoData.results) {
        let officialTrailer = videoData.results.find(
          (video: videoParams) =>
            video.type === 'Trailer' && video.name === 'Official Trailer'
        );

        if (!officialTrailer) {
          officialTrailer = videoData.results.find(
            (video: videoParams) => video.type === 'Trailer'
          );
        }

        trailerKey = officialTrailer ? officialTrailer.key : null;
      }

      return {
        movie: movieData,
        trailerKey,
        recomendationMovies: recomendationMovies.results,
      };
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <h1>Cannot Load Detail Movie</h1>;

  const { movie, recomendationMovies, trailerKey }: any = data;

  const releaseYear = movie.release_date.split('-')[0];

  return (
    <div className="text-color-accent h-[1200px]">
      <div>
        <div className="sm:flex items-center md:justify-between lg:justify-start gap-7">
          {movie?.homepage ? (
            <a href={`${movie?.homepage}`} target="_blank">
              <Text
                title={`${movie?.original_title} - ${releaseYear}`}
                type="main"
                className="text-2xl underline pb-1"
              />
            </a>
          ) : (
            <Text
              title={`${movie?.original_title} - ${releaseYear}`}
              type="main"
              className="text-2xl pb-1"
            />
          )}
          {user.data && (
            <CollectionButton
              movie_id={Number(movie?.id)}
              user_email={String(user.data?.user?.email)}
              poster_path={String(movie?.poster_path)}
              movie_title={String(movie?.original_title)}
            />
          )}
        </div>
        <div>
          <ul className="flex space-x-3 text-color-primary  ">
            {movie?.genres.map((data: any, index: number) => (
              <li
                key={index}
                className="text-sm md:text-base hover:text-color-accent"
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex lg:flex-row flex-col items-center space-x-6">
        {movie?.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie?.original_title} image`}
            width={300}
            height={300}
            className="rounded-lg mb-3"
            priority
          />
        ) : (
          <div className="w-[300px] h-[450px] bg-gray-200 flex items-center justify-center rounded-lg mb-3">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}

        <div>
          <Text title={`${movie?.overview}`} />
          <Text title="Production Companies :" className="font-bold mt-1" />
          <ul className="grid auto-cols-max xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
            {movie?.production_companies.map((data: any, index: number) => (
              <li
                key={index}
                className="border text-sm md:text-base border-color-primary rounded-xl flex items-center justify-center text-center px-[0.3rem] py-1"
              >
                {data.name}
                {data.origin_country ? ` - ${data.origin_country}` : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Text title="Comment" type="main" />

      <CommentsBox movie_id={id} />

      {user.data && (
        <div>
          <CommentInput
            movie_id={Number(movie?.id)}
            user_email={String(user.data?.user?.email)}
            username={String(user.data?.user?.name)}
            movie_title={String(movie?.original_title)}
          />
        </div>
      )}

      <VideoPlayer id={trailerKey} />

      <div className="md:mt-14 xl:mt-16 mt-10 pb-14">
        <Header title={'Recomendation'} type={'main'} />
        <MovieList api={recomendationMovies.slice(0, 10)} />
      </div>
    </div>
  );
};

export default Page;
