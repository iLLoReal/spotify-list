import { LoaderArgs } from "@remix-run/node";
import { fetchBearerToken } from "~/api/authorize";

export const loader = async ({ request }: LoaderArgs) => {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    return await fetchBearerToken(request, code || '');
}

export function RequestAccessToken() {
    return (
        <>
        </>
    )
}