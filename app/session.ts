import { createCookieSessionStorage } from "@remix-run/node";

export type SessionData = {
  loggedIn: boolean;
  code_verifier: string;
  client_id: string;
  bearerToken: string;
};

export type SessionFlashData = {
  error: string;
};


const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>(
    {
      cookie: {
        name: "__session",
        domain: "localhost",
        httpOnly: true,
        maxAge: 60,
        path: "/",
        sameSite: "lax",
        secrets: ["s3cret1"],
        secure: process.env.NODE_ENV === "production" ? true : false,
      },
    }
  );
export { getSession, commitSession, destroySession };