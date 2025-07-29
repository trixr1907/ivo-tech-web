'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, signOut } from 'next-auth/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header className=\
fixed
w-full
bg-white/95
backdrop-blur-sm
z-50
shadow-sm
border-b
border-gray-200\>
      <nav className=\mx-auto
flex
max-w-7xl
items-center
justify-between
p-6
lg:px-8\ aria-label=\Global\>
        <div className=\flex
lg:flex-1\>
          <Link href=\/\ className=\-m-1.5
p-1.5
text-2xl
font-bold
text-primary-600
hover:text-primary-700
transition-colors\>
            Ivo Tech
          </Link>
        </div>
        <div className=\flex
lg:hidden\>
          <button
            type=\button\
            className=\-m-2.5
inline-flex
items-center
justify-center
rounded-md
p-2.5
text-gray-700\
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className=\sr-only\>Menü öffnen</span>
            <Bars3Icon className=\h-6
w-6\ aria-hidden=\true\ />
          </button>
        </div>
        <div className=\hidden
lg:flex
lg:gap-x-12\>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=\text-sm
font-semibold
leading-6
text-gray-900
hover:text-primary-600
transition-colors\
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className=\hidden
lg:flex
lg:flex-1
lg:justify-end
lg:gap-x-6\>
          {status === 'loading' ? (
            <div className=\h-6
w-6
animate-spin
rounded-full
border-2
border-gray-900
border-t-transparent\ />
          ) : session ? (
            <>
              <Link
                href=\/dashboard\
                className=\text-sm
font-semibold
leading-6
text-gray-900
hover:text-primary-600
transition-colors\
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className=\text-sm
font-semibold
leading-6
text-gray-900
hover:text-primary-600
transition-colors\
              >
                Abmelden
              </button>
            </>
          ) : (
            <Link
              href=\/auth/signin\
              className=\text-sm
font-semibold
leading-6
text-gray-900
hover:text-primary-600
transition-colors\
            >
              Anmelden
            </Link>
          )}
        </div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className=\fixed
inset-y-0
right-0
z-50
w-full
overflow-y-auto
bg-white
px-6
py-6
sm:max-w-sm
sm:ring-1
sm:ring-gray-900/10\
          >
            <div className=\flex
items-center
justify-between\>
              <Link href=\/\ className=\-m-1.5
p-1.5
text-2xl
font-bold\>
                Ivo Tech
              </Link>
              <button
                type=\button\
                className=\-m-2.5
rounded-md
p-2.5
text-gray-700\
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className=\sr-only\>Menü schließen</span>
                <XMarkIcon className=\h-6
w-6\ aria-hidden=\true\ />
              </button>
            </div>
            <div className=\mt-6
flow-root\>
              <div className=\-my-6
divide-y
divide-gray-500/10\>
                <div className=\space-y-2
py-6\>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className=\-mx-3
block
rounded-lg
px-3
py-2
text-base
font-semibold
leading-7
text-gray-900
hover:bg-gray-50\
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {session ? (
                    <>
                      <Link
                        href=\/dashboard\
                        className=\-mx-3
block
rounded-lg
px-3
py-2
text-base
font-semibold
leading-7
text-gray-900
hover:bg-gray-50\
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setMobileMenuOpen(false);
                        }}
                        className=\-mx-3
block
rounded-lg
px-3
py-2
text-base
font-semibold
leading-7
text-gray-900
hover:bg-gray-50
w-full
text-left\
                      >
                        Abmelden
                      </button>
                    </>
                  ) : (
                    <Link
                      href=\/auth/signin\
                      className=\-mx-3
block
rounded-lg
px-3
py-2
text-base
font-semibold
leading-7
text-gray-900
hover:bg-gray-50\
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Anmelden
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
