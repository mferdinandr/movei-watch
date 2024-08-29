import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const UserActionButton = () => {
  const { data } = useSession();

  if (data) {
    return (
      <div className="dropdown inline-block relative">
        <button className="font-semibold px-4 rounded inline-flex items-center mb-1">
          <span className="mr-1">{data.user?.name}</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
          </svg>
        </button>

        <ul className="dropdown-menu absolute md:text-end md:right-6 w-28 md:w-[70%] rounded-md mb-1 h-max hidden text-sm md:text-md md:ml-0 ml-3 bg-color-secondary lg:py-1">
          <Link href={'/user/dashboard'}>
            <li className="bg-color-secondary text-color-accent hover:bg-color-primary hover:text-color-accent cursor-pointer border border-color-secondary hover:border-color-accent rounded-md py-1 pr-4 md:pl-0 pl-3">
              Dashboard
            </li>
          </Link>
          <button
            onClick={() => signOut()}
            className="bg-color-secondary text-color-accent hover:bg-color-primary hover:text-color-accent cursor-pointer border border-color-secondary hover:border-color-accent rounded-md py-1 pr-4 md:pl-0 pl-3 w-full md:text-end text-start"
          >
            <li>Sign Out</li>
          </button>
        </ul>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="border border-color-dark rounded-md px-3 py-1 hover:bg-color-secondary hover:text-color-primary md:w-auto w-1/3"
    >
      Sign In
    </button>
  );
};

export default UserActionButton;
