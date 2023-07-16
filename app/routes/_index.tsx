
import { redirect } from "@remix-run/node";
import { Link, V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export const action = () => {
  return redirect('/authorize');
}

export default function Index() {

  return (
    <div className="h-full 
    flex flex-col justify-center 
    items-center"
    >
      <div>
        <button type="submit">Démarrer</button>
      </div>
    </div>
  )
}
