import { LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { fetchTracks } from "~/api/tracks";

export const loader = async ({ request }: LoaderArgs) => {
    const tracks = await fetchTracks(request);
    return tracks || null;
}

export function ErrorBoundary({ error }: any) {

    return (
        <div>
            Erreur de récupération des données: {error}
            <div>
                <Link to={"/"}>Revenir à l'acceuil</Link>
            </div>
        </div>
    )
}
export default function FetchTracks() {
    return (
        <>
        </>
    )
}