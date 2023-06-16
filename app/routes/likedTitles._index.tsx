import { LoaderArgs, redirect } from "@remix-run/node";
import { getBearerToken } from "~/helpers/session";

export const loader = async ({ request }: LoaderArgs) => {
    if (!await getBearerToken(request)) {
        return redirect('/authorize');
    }
    return null;
}

export default function LikedTitles() {
    return (
        <div>
            Les musiques de spotify ont été chargées.
        </div>
    )
}