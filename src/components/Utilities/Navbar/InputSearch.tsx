'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const InputSearch = ({ back }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [eror, setEror] = useState(false);

  useEffect(() => {
    if (back) {
      setEror(false);
    }
  }, [back]);

  const handleSearch = (e: any) => {
    const keyword = searchRef.current?.value as string;

    if (e.key === 'Enter' || e.type === 'click') {
      if (keyword.length >= 3) {
        e.preventDefault();
        router.push(`/search/${encodeURIComponent(keyword)}`);
        setEror(false);
      } else {
        setEror(true);
      }
    }
  };

  return (
    <div className="relative sm:w-[40%] lg:w-1/4">
      <input
        placeholder="Cari film...."
        className="py-2 pl-8 font-medium w-full rounded-lg bg-color-dark text-color-accent"
        ref={searchRef}
        type="search"
        onKeyDown={handleSearch}
      />
      {eror && (
        <p className="absolute text-color-eror top-[0.5rem] xl:right-[2.6rem] right-10">
          Harus lebih dari 2 kata
        </p>
      )}
      <button className="absolute end-2 top-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} color="#EEEEEE" />
      </button>
    </div>
  );
};

export default InputSearch;
