import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "",
  publicRoutes: ["/"],
  secretKey: "", // TODO: put your secret key
  debug: true,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
