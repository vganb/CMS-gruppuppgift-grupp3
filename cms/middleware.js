<<<<<<< HEAD
import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const allowedOrigins = ['*']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const isProtectedRoute = createRouteMatcher([
  '/posts',
])

const isAdminRoute = createRouteMatcher([
  '/admin(.*)',
]);


export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) || isAdminRoute(req)) auth().protect();

  // if (isAdminRoute(req)) {
  //   const { userId } = auth()
  //   const preloaded = await preloadQuery(api.admins.checkAdmin, { userId })
  //   const isAdmin = preloadedQueryResult(preloaded)

  //   if(!isAdmin)
  //     return NextResponse.redirect(new URL('/', req.url))
  // }

  const origin = req.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin) || allowedOrigins.includes('*')
 
  // Handle preflighted requests
  const isPreflight = req.method === 'OPTIONS'
 
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }
 
  // Handle simple requests
  const response = NextResponse.next()
 
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
 
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
 
  return response

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

=======
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
>>>>>>> 32e54692adc20af4b3b04fedb5613f0f0d1a1235
