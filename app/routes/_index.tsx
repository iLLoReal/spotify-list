
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { Form, Outlet, V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { getBearerToken, logUserOut } from "../helpers/session";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export const action = async ({request}: ActionArgs) => {
  await logUserOut(request);
  return redirect('/authorize');
}

export const loader = async ({ request }: LoaderArgs): Promise<{ authorizationGranted: boolean }> => {
  const bearerToken = await getBearerToken(request);
  if (bearerToken)
    return { authorizationGranted: true };
  return { authorizationGranted: false };
}

export default function Index() {
  const { authorizationGranted } = useLoaderData();

  return (
    <>
      {
        authorizationGranted &&
        <Form method="POST">
          <button type="submit">LOGOUT</button>
        </Form>
      }
      <h1>Spotify-Likes</h1>
      <div>
        <Outlet />
      </div>
    </>
  )
}
