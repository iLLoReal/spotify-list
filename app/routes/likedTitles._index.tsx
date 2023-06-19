import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { ClientOnly } from "remix-utils";
import Spinner from "~/components/Spinner";
import Tracks from "~/components/Tracks";
import { getBearerToken, logUserOut } from "~/helpers/session";

export const action = async ({ request }: ActionArgs) => {
    return await logUserOut(request);
}

export const loader = async ({ request }: LoaderArgs) => {
    const bearerToken = await getBearerToken(request);
    if (!bearerToken && process.env.NODE_ENV === "production") {
        return redirect('/authorize');
    }
    return true;
}

export default function LikedTitles() {
    return (
        <div>
            <ClientOnly fallback={
                <div className="h-full">
                    <Spinner />
                </div>}
            >
                {() => <Tracks />}
            </ClientOnly>
        </div>
    );
}