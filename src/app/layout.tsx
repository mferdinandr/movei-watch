import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';

const gabarito = Gabarito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        <div className="sm:pt-[5rem] pt-32 md:mx-20 mx-3">{children}</div>
      </body>
    </html>
  );
}
