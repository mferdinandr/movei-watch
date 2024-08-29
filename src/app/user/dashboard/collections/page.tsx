import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@/components/Text';
import Header from '../Header';

import { getCollection } from '@/lib/auth-libs';
import prisma from '@/lib/prisma';

const Page = async () => {
  const user = await getCollection();
  const collections = await prisma.collection.findMany({
    where: { user_email: String(user) },
  });

  return (
    <div className="">
      <Header title="My Collections" />
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 md:gap-3 gap-2">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/movie/${collection.movie_id}`}
            className="shadow-xl rounded-lg cursor-pointer border flex flex-col bg-color-accent hover:text-color-primary transition-all text-color-dark"
          >
            {collection.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500/${collection.poster_path}`}
                alt={`${collection.movie_title} Image`}
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
              {collection.movie_title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
