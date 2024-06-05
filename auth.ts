/*
 * 2.
 * Next, create an auth.ts file and add your adapter and the jwt session strategy there.
 * This is the auth.ts configuration file you will import from in the rest of your application,
 * other than in the middleware.
 */

import NextAuth from 'next-auth'
import authConfig from '@/auth.config'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from '@/lib/db'
import { getUserById } from './data/user'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      return session
    },
    async jwt({ token }) {
      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' }, // prisma cannot use database strategy, cause don't work on the edge
  ...authConfig,
})
