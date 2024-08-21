import React from 'react';
import Link from 'next/link';

const Button = ({ title, link }: { title: string; link: string }) => {
  return (
    <div>
      <Link href={link} className="bg-color-primary px-3 py-2 rounded-md">
        {title}
      </Link>
    </div>
  );
};

export default Button;
