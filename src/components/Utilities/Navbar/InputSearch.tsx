'use client';

import React, { useRef } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (e: any) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const keyword = searchRef.current?.value as string;
      e.preventDefault();
      router.push(`/search/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="relative md:w-1/4">
      <input
        placeholder="Cari film...."
        className="border border-slate-500 py-2 px-3 font-medium w-full rounded-lg bg-color-dark text-color-accent"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute end-2 top-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} color="#EEEEEE" />
      </button>
    </div>
  );
};

export default InputSearch;
