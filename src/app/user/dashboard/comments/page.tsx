import { getCollection } from '@/lib/auth-libs';
import prisma from '@/lib/prisma';
import React from 'react';
import Header from '../Header';
import Link from 'next/link';

const page = async () => {
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
          <Link
            key={comment.id}
            className="bg-color-accent rounded-md px-3 py-2"
            href={`/movie/${comment.movie_id}`}
          >
            <h1 className="font-bold">{comment.movie_title}</h1>
            <h1>{comment.comment}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
