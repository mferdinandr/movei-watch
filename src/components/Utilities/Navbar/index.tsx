import React from 'react';
import InputSearch from './InputSearch';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex sm:flex-row flex-col justify-between p-5 bg-slate-200 fixed right-0 left-0 space-y-3 sm:space-y-0 shadow-md z-50">
      <Link href={'/'} className="font-bold font-sans text-4xl text-slate-700 ">
        Movei-Watch
      </Link>
      <InputSearch />
    </header>
  );
};

export default Navbar;
