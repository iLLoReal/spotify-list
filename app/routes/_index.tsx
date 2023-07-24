
import { redirect } from "@remix-run/node";
import { Form, V2_MetaFunction } from "@remix-run/react";
import { REDIRECT_URI } from "globals";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export const action = () => {
  return redirect('/authorize');
}

export default function Index() {
  console.log('Redirect_uri: ', REDIRECT_URI);
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
