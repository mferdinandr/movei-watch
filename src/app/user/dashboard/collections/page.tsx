'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@/components/Text';
import Header from '../Header';

const Page = () => {
  return (
    <div className="">
      <Header title="My Collections" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <Link
          href={''}
          className="border border-color-primary relative rounded-md"
        >
          <Image
            src={''}
            alt=""
            height={500}
            width={350}
            className="w-full h-full rounded-md"
          />
          <div className="absolute bottom-0 w-full flex items-center justify-center rounded-b-md bg-color-secondary">
            <Text title="Judul" className="text-color-primary" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
