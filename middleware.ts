import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/profile") || pathname.startsWith("/dashboard")) {
    const { userId } = await auth();

    if (!userId) {
      const signInUrl = new URL("/sign-in", req.nextUrl);
      signInUrl.searchParams.set("redirect_url", req.nextUrl.pathname); 
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all routes except static assets and public files.
     * Adjust further if needed to include/exclude specific routes.
     */
    "/((?!_next|.*\\..*|favicon.ico).*)",
  ],
};
