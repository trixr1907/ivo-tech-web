'use client';

import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900'></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>Zugriff verweigert</h2>
          <p className='text-gray-600'>Bitte melden Sie sich an, um das Dashboard zu sehen.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <div className='flex items-center space-x-4 mb-6'>
          {session.user?.image && (
            <img
              src={session.user.image}
              alt={session.user.name || \
Avatar\}
              className='h-12 w-12 rounded-full'
            />
          )}
          <div>
            <h2 className='text-2xl font-bold'>{session.user?.name}</h2>
            <p className='text-gray-600'>{session.user?.email}</p>
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='text-lg font-semibold mb-4'>Dashboard Übersicht</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h4 className='font-medium'>Letzte Aktivität</h4>
              <p className='text-gray-600'>Anmeldung am {new Date().toLocaleDateString(\de-DE\)}</p>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h4 className='font-medium'>Status</h4>
              <p className='text-green-600'>Aktiv</p>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h4 className='font-medium'>Rolle</h4>
              <p className='text-gray-600'>Benutzer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
