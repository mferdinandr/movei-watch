'use client';
import React, { useState } from 'react';
import InputSearch from './InputSearch';
import Link from 'next/link';
import UserActionButton from './UserActionButton';

const Navbar = () => {
  const [back, setBack] = useState(false);

  const handleLogoClick = () => {
    setBack(true);
    setTimeout(() => setBack(false), 100);
  };

  return (
    <header className="flex md:flex-row flex-col justify-between md:items-center p-5 bg-color-primary fixed right-0 left-0 space-y-3 lg:space-y-0 shadow-md z-50">
      <Link
        href={'/'}
        className="font-bold font-sans text-4xl"
        onClick={handleLogoClick}
      >
        Movei-Watch
      </Link>
      <InputSearch back={back} />
      <UserActionButton />
    </header>
  );
};

export default Navbar;
