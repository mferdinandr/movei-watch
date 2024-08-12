import React from 'react';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className="flex sm:flex-row flex-col justify-between p-5 bg-slate-200 fixed right-0 left-0 space-y-3 sm:space-y-0 shadow-md z-50">
      <h1 className="font-bold font-sans text-4xl text-slate-700 ">
        Movei-Watch
      </h1>
      <InputSearch />
    </header>
  );
};

export default Navbar;
