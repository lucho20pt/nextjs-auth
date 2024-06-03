import { auth } from '@/auth'

export default auth((req) => {
  // req.auth
  console.log('ROUTE: ', req.nextUrl.pathname)
  const isLoggedIn = !!req.auth
  console.log('IS LOGGEDIN', isLoggedIn)
})

export const config = {
  // matcher: ['/auth/login', '/auth/register'],
  // matcher from nextjs
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  // matcher from clerk (invoke in every public/private route) and decide it here
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

// TIP: everything you put here will not be used to check if it is public or private
// it will simple be used to invoke the middleware
// this example ['/auth/login'] will not be protected or public
// instead it will simple invoke the auth() function,
// it's a simple matcher to invoke the middleware
