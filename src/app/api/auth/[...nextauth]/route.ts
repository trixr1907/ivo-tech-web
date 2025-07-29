/**
 * @module authRoute
 * @description Route für NextAuth.js Konfiguration
 */

import { authOptions } from '@/lib/auth';
import NextAuth from 'next-auth';

// Konfiguriert die Anwendung mit den Authentifizierungsoptionen
const handler = NextAuth(authOptions);

// Exportiert die Handler für GET und POST Anfragen
export { handler as GET, handler as POST };
