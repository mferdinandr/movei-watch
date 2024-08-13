'use client';
import React from 'react';
import { FileSearch } from '@phosphor-icons/react';
import Link from 'next/link';
import Text from '@/components/Text';

const Page = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center mt-[-8rem] ">
      <div className="flex flex-row gap-2 items-center justify-center`">
        <FileSearch size={50} color="#EEEEEE" />
        <Text type="second" title="Page Not Found" className="md:text-4xl" />
      </div>
      <Link href={'/'} className="text-color-primary underline MD:text-xl">
        Kembali
      </Link>
    </div>
  );
};

export default Page;
