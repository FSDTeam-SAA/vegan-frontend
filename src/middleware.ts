import { auth } from "@/auth";
import { NextResponse } from "next/server";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
} from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedin = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const isProtectedRoutes = protectedRoutes.includes(nextUrl.pathname);

  if (isProtectedRoutes) {
    if (!isLoggedin) {
      return Response.redirect(new URL("/onboarding", nextUrl));
    } else {
      return NextResponse.next();
    }
  }

  if (isAuthRoute) {
    if (isLoggedin) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets/).*)"],
};
