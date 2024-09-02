import { getCollection } from '@/lib/auth-libs';
import prisma from '@/lib/prisma';
import React, { useState } from 'react';
import Header from '../Header';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

const Page = async () => {
  const user = await getCollection();

  const comments = await prisma.comment.findMany({
    where: { user_email: String(user) },
  });

  return (
    <div>
      <Header title="My Comments" />
      <div className="flex flex-col gap-2">
        <h1 className="text-color-accent">
          Total Comments : {comments.length}
        </h1>
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-2 relative">
            <Link
              className="bg-color-accent rounded-md px-3 py-2 w-full"
              href={`/movie/${comment.movie_id}`}
            >
              <h1 className="font-bold">{comment.movie_title}</h1>
              <h1>{comment.comment}</h1>
            </Link>
            <DeleteButton movie_id={comment.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
