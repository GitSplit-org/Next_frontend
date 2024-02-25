import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_APP_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
  ],
};
