'use client';
import { useSession } from 'next-auth/react';
import React from 'react';

const Page = () => {
  const { data } = useSession();

  if (data) {
    return <div>Dashboard</div>;
  } else {
    return <h1>Login dulu</h1>;
  }
};

export default Page;
