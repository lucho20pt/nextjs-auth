/*
 * 1.
 * Create an auth.config.ts file which exports an object containing your Auth.js configuration options.
 * You can put all common configuration here which does not rely on the adapter.
 * Notice this is exporting a configuration object only, we’re not calling NextAuth() here.
 */
import type { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import { LoginSchema } from '@/schema'
import { getUserByEmail } from './data/user'

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email)
          if (!user || !user.password) return null

          const passwordMatch = await bcrypt.compare(password, user.password)
          if (passwordMatch) return user
        }
        return null
      },
    }),
  ],
} satisfies NextAuthConfig
