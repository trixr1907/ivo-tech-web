import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // Prüfen Sie hier zusätzliche Bedingungen für die Autorisierung
      return !!token;
    },
  },
});

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
