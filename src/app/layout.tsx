'use client';

import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/provider';

import Navbar from '@/components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const gabarito = Gabarito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <QueryClientProvider client={queryClient}>
          <Providers>
            <Navbar />
            <div className="xl:pt-[5rem] lg:pt-[6rem] md:pt-[5.5rem] pt-[10.5rem] md:mx-20 mx-5">
              {children}
            </div>
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
