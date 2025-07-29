'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ErrorPageProps {
  message?: string;
}

export default function ErrorPage({ message = 'Ein unerwarteter Fehler ist aufgetreten.' }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-max mx-auto"
      >
        <main className="sm:flex">
          <p className="text-4xl font-bold text-primary-600 sm:text-5xl">500</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
                Oops!
              </h1>
              <p className="mt-3 text-base text-gray-500">{message}</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Zurück zur Startseite
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Seite neu laden
              </button>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
