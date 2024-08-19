'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = () => {
  const { data } = useSession();

  if (!data) {
    redirect('/');
  }

  return <div>Dashboard</div>;
};

export default Page;
