'use client';
import React from 'react';
import { FileSearch } from '@phosphor-icons/react';
import Text from '@/components/Text';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-center items-center mt-[-8rem] ">
      <div className="flex flex-row gap-2 items-center justify-center`">
        <FileSearch size={50} color="#EEEEEE" />
        <Text type="second" title="Page Not Found" className="md:text-4xl" />
      </div>
      <button
        onClick={() => router.back()}
        className="text-color-primary underline MD:text-xl"
      >
        Kembali
      </button>
    </div>
  );
};

export default Page;
