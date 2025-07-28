import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic">
              <p>Ivo Tech GmbH</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p className="mt-2">Tel: +49 (0) 123 456789</p>
              <p>E-Mail: info@ivo-tech.com</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-blue-400 transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-blue-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-blue-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="hover:text-blue-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-blue-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-blue-400 transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Ivo Tech GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
