/*
 * 1.
 * Create an auth.config.ts file which exports an object containing your Auth.js configuration options.
 * You can put all common configuration here which does not rely on the adapter.
 * Notice this is exporting a configuration object only, we’re not calling NextAuth() here.
 */

import type { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export default { providers: [GitHub, Google] } satisfies NextAuthConfig
