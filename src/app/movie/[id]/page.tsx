import { fetchApi } from '@/lib/api-libs';
import React from 'react';
import Text from '@/components/Text';
import Image from 'next/image';

type Params = {
  id: string;
};

const Page = async ({ params: { id } }: { params: Params }) => {
  const movie = await fetchApi(id);
  const releaseYear = movie.release_date.split('-')[0];
  console.log(movie);
  return (
    <div className="text-color-accent">
      <div>
        {movie.homepage ? (
          <a href={`${movie.homepage}`} target="_blank">
            <Text
              title={`${movie.original_title} - ${releaseYear}`}
              type="main"
              className="text-2xl underline pb-1"
            />
          </a>
        ) : (
          <Text
            title={`${movie.original_title} - ${releaseYear}`}
            type="main"
            className="text-2xl pb-1"
          />
        )}
        <div>
          <ul className="flex space-x-3 text-color-primary  ">
            {movie.genres.map((data: any, index: number) => (
              <li key={index} className="text-sm md:text-base">
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex lg:flex-row flex-col items-center space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.original_title} image`}
          width={300}
          height={300}
          className="rounded-lg mb-3"
        />
        <div>
          <Text title={`${movie.overview}`} />
          <Text title="Production Companies :" className="font-bold mt-1" />
          <ul className="grid auto-cols-max xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
            {movie.production_companies.map((data: any, index: number) => (
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
    </div>
  );
};

export default Page;
