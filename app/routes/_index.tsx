
import { Link, V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "spotify-list" }];
};

export default function Index() {

  return (
    <div className="h-full 
    flex flex-col justify-center 
    items-center"
    >
      <div>
        <Link to={'/authorize'}>Démarrer</Link>
      </div>
    </div>
  )
}
