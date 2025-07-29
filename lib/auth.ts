import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"
import { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Provider-Konfiguration hier hinzufügen
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
}
