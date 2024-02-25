"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../components/auth";

const AuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export default AuthSession;
