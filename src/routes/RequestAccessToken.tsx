import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom"
import { fetchBearerToken } from "../api/login"
import { CLIENT_ID } from "../globals";

export const requestAccessTokenLoader = async ({ request }: LoaderFunctionArgs) => {
    //get code from params
    // const code = params.get('code');
    //    return await fetchBearerToken('') // should become fetchBearerToken(code);
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    return await fetchBearerToken(CLIENT_ID, code ?? '');
}

export function RequestAccessToken() {
    return (
        <>
        </>
    )
}