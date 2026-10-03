import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  // Make everything public except what you explicitly want to lock down, 
  // or explicitly whitelist your sign-in, sign-up, and root pages.
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)"],
  
  afterAuth(auth, req) {
    const { userId } = auth;
    const currentPath = req.nextUrl.pathname;

    console.log("Middleware Path:", currentPath, "User:", userId);

    // If the user is signed in and hits the sign-in page, push them to the admin dashboard
    if (userId && currentPath.startsWith("/sign-in")) {
      return NextResponse.redirect(new URL("/dashboard/admin", req.url));
    }

    // Allow all other requests to proceed normally without token-flicker redirects
    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next|favicon.ico).*)', '/', '/(api|trpc)(.*)'],
};