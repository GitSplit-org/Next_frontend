// pages/auth/signin.js
import { getServerSession } from "next-auth";
import { providers, signIn, getServerSessionn } from "next-auth/react";

export default function SignIn({ providers }) {
  const { data: session } = getServerSession();

  if (session) {
    // If the user is already authenticated, redirect to the home page
    router.push("/");
    return null;
  }
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
