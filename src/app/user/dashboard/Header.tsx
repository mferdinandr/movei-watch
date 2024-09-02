'use client';
import React from 'react';
import Text from '@/components/Text';
import { useRouter } from 'next/navigation';

const Header = ({ title }: { title: string }) => {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between mb-5 mt-7">
      <button
        onClick={handleBack}
        className="bg-color-primary text-color-accent px-3 rounded-lg"
      >
        Back
      </button>
      <Text title={title} />
    </div>
  );
};

export default Header;
