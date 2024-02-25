// pages/index.js
import { getSession } from 'next-auth';

export default function Home({ session }) {
  return (
    <div>
      {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>You are not authenticated. Sign in to view your content.</p>
      )}
    </div>
  );
}5

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
