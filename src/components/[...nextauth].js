// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.faf9be094651d448f6,
      clientSecret: process.env.f192e9a16d88e33d76088a512385a783b3b6a87a,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = token.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (user) {
        session.user.id = user.id;
        token;
        user;
      }

      return session;
    },
  },
});
