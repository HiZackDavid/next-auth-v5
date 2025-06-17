import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { authorizeUser } = await import("@/lib/auth/authorizeUser");
        return authorizeUser(credentials);
      },
    }),
  ],
} satisfies NextAuthConfig;
