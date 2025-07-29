'use client';

import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ivo Tech',
  description: 'Ivo Tech Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='de' className='scroll-smooth'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='min-h-screen flex flex-col font-sans antialiased'>
        <SessionProvider>
          <Navigation />
          <ErrorBoundary>
            <div className='flex-1 pt-16'>{children}</div>
          </ErrorBoundary>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
