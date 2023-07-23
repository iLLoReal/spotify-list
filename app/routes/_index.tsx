
import { redirect } from "@remix-run/node";
import { Form, Link, V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export const action = () => {
  console.log('Action');
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
