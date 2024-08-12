'use client';

import React, { useRef } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = () => {
    const keyword = searchRef.current?.value.trim();
    if (keyword) {
      router.push(`/search/${encodeURIComponent(keyword)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="bg-red-200 relative">
      <input
        placeholder="Cari film...."
        className="border border-slate-500 py-2 px-3 font-medium w-full rounded-lg bg-slate-50"
        ref={searchRef}
        onKeyDown={handleKeyDown}
      />
      <button className="absolute end-2 top-2">
        <MagnifyingGlass
          size={24}
          enableBackground={'white'}
          onClick={handleSearch}
        />
      </button>
    </div>
  );
};

export default InputSearch;
