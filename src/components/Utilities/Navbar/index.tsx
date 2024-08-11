import React from 'react';

const Navbar = () => {
  return (
    <header className="flex sm:flex-row flex-col justify-between p-5 bg-slate-200 fixed right-0 left-0 space-y-3 sm:space-y-0 shadow-md">
      <h1 className="font-bold font-sans text-4xl text-slate-700">
        Movei-Watch
      </h1>
      <input
        type="search"
        className="border border-slate-500 py-2 px-3 font-medium xl:w-1/4 md:w-1/3 rounded-lg bg-slate-50"
      />
    </header>
  );
};

export default Navbar;
