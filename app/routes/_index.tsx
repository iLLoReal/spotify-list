
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, Link, V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { getBearerToken, logUserOut } from "../helpers/session";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export const action = async ({ request }: ActionArgs) => {
  return await logUserOut(request);
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
      <h1>Spotify-Likes</h1>
      {
        authorizationGranted ?
          <Form method="post">
            <button type="submit">LOGOUT</button>
          </Form> :
          <div>
            <Link to={'/authorize'}>Log in to spotify !</Link>
          </div>
      }
    </>
  )
}
