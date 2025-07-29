/**
 * @module auth
 * @description Authentifizierungskonfiguration für NextAuth.js
 */

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions, DefaultSession } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { prisma } from './prisma';

/**
 * Erweitert die NextAuth Session um zusätzliche Benutzerfelder
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      id: string;
    } & DefaultSession['user']
  }
}

/**
 * @description NextAuth Konfigurationsoptionen
 * - Nutzt PrismaAdapter für Datenbankintegration
 * - Konfiguriert GitHub OAuth Provider
 * - Setzt JWT als Sessionstrategie
 * - Definiert benutzerdefinierte Anmeldeseite
 */
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    /**
     * @description Fügt die Benutzer-ID zum Session-Objekt hinzu
     * @param session - Aktuelle Session
     * @param token - JWT Token
     * @returns Erweiterte Session mit Benutzer-ID
     */
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub!;
      }
      return session;
    }
  }
};
