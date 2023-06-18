import { LoaderArgs, redirect } from "@remix-run/node";
import { ClientOnly } from "remix-utils";
import Spinner from "~/components/Spinner";
import Tracks from "~/components/Tracks";
import { getBearerToken } from "~/helpers/session";

export const loader = async ({ request }: LoaderArgs) => {
    if (!await getBearerToken(request) && process.env.NODE_ENV === 'production') {
        return redirect('/authorize');
    }
    return null;
}

export default function LikedTitles() {
    return (
        <>
            <ClientOnly fallback={
                <div className="spinner">
                    <Spinner />
                </div>}
            >
                {() => <Tracks />}
            </ClientOnly>
        </>
    );
}