'use client';
import { useSession } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

const Page = () => {
  const { data } = useSession();

  return (
    <div className="flex flex-col text-center items-center text-color-accent gap-2 mt-4">
      {data && (
        <Image
          src={`${data?.user?.image}`}
          width={200}
          height={200}
          alt="image"
          className="rounded-xl lg:mt-0 mt-5"
        />
      )}
      <div className="my-2">
        <h3 className="font-bold">{data?.user?.name}</h3>
        <h4>{data?.user?.email}</h4>
      </div>
      <div className="flex gap-4">
        <Button title={'My Collection'} link="/user/dashboard/collections" />
        <Button title={'My Comments'} link="/user/dashboard/comments" />
      </div>
    </div>
  );
};

export default Page;
