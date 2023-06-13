import { Form, Outlet, redirect, useLoaderData } from "react-router-dom";
import { getBearerToken, logUserOut } from "../helpers/session";

export const rootAction = () => {
    logUserOut();
    return redirect('/login');
}

export const rootLoader = (): { loggedIn: boolean } => {
    const bearerToken = getBearerToken();
    if (bearerToken)
        return { loggedIn: true };
    return { loggedIn: false };
}

export default function Root() {
    const { loggedIn } = useLoaderData() as typeof rootLoader.arguments;

    return (
        <>
            {
                loggedIn &&
                <Form method="POST">
                    <button type="submit">LOGOUT</button>
                </Form>
            }
            <h1>Spotify-Likes</h1>
            <div>
                <Outlet />
            </div>
        </>
    )
}