/*
 * 3.
 * In your middleware file, import the configuration object from your first auth.config.ts file
 * and use it to lazily initialize Auth.js there.
 * In effect, initialize Auth.js separately with all of your common options,
 * but without the edge incompatible adapter.
 *
 * The main idea, is to separate the part of the configuration that is edge-compatible from the rest,
 * and only import the edge-compatible part in Middleware/Edge pages/routes.
 */

import NextAuth from 'next-auth'
import authConfig from '@/auth.config'
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/auth/login', nextUrl))
  }

  return
})

export const config = {
  // matcher: ['/auth/login', '/auth/register'],
  // matcher from nextjs
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  // matcher from clerk (invoke in every public/private route) and decide it here
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

/* TIP: everything you put here will not be used to check if it is public or private
 * it will simple be used to invoke the middleware
 * this example ['/auth/login'] will not be protected or public
 * instead it will simple invoke the auth() function,
 * it's a simple matcher to invoke the middleware
 */
