import React from 'react';
import Text from '@/components/Text';
import Link from 'next/link';

type HeaderProps = {
  title: string;
  type?: string;
  linkHref?: string;
  linkTitle?: string;
};

const Header = ({ title, type, linkHref, linkTitle }: HeaderProps) => {
  return (
    <div className="flex justify-between px-2 items-center">
      <Text title={title} type={type} />
      <Link href={`${linkHref}`} className="text-blue-600 underline">
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
