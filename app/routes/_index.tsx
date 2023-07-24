
import { LoaderArgs, redirect } from "@remix-run/node";
import { Form, V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { getSession } from "~/session";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export const loader = async ({request}: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const codeVerifer = session.get('code_verifier');
  return codeVerifer || null;
}

export const action = () => {
  return redirect('/authorize');
}

export default function Index() {
  const data = useLoaderData();
  console.log('codeVerifier: ', data);
  return (
    <div className="h-full 
    flex flex-col justify-center 
    items-center"
    >
      <Form method="post">
        <button type="submit">Démarrer</button>
      </Form>
    </div>
  )
}
