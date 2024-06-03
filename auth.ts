/*
 * 2.
 * Next, create an auth.ts file and add your adapter and the jwt session strategy there.
 * This is the auth.ts configuration file you will import from in the rest of your application,
 * other than in the middleware.
 */

import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from '@/lib/db'
import authConfig from '@/auth.config'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' }, // prisma cannot use database strategy, cause don't work on the edge
  ...authConfig,
})
