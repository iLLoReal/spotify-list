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

let cookieName = process.env.NODE_ENV === 'production' ? '__prod_session' : '__dev_session';

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>(
    {
      cookie: {
        name: cookieName,
        domain: process.env.HOSTNAME,
        httpOnly: true,
        maxAge: 60,
        path: "/",
        sameSite: "none",
        secrets: [process.env.COOKIE_SECRET || "s3cret1"],
        secure: process.env.NODE_ENV === "production" ? true : false,
      },
    }
  );
export { getSession, commitSession, destroySession };