
import { ActionArgs, redirect } from "@remix-run/node";
import { Form, V2_MetaFunction } from "@remix-run/react";
import { REDIRECT_ENDPOINT } from "globals";
import { commitSession, getSession } from "~/session";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export const action = async ({request}: ActionArgs) => {
  // Tricks pour set le domain du cookie dynamiquement
  const url = new URL(request.url);
  return redirect('/authorize');
}

export default function Index() {
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
