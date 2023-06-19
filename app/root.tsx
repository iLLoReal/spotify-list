import { ActionArgs, LinksFunction, LoaderArgs, redirect } from "@remix-run/node";
import { Form, Links, LiveReload, Outlet, Scripts, useActionData, useLoaderData } from "@remix-run/react";

import global from '~/styles/global.css';
import tailwind from '~/tailwind.css';
import { getBearerToken, logUserOut } from "./helpers/session";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: global },
    { rel: "stylesheet", href: tailwind },
];

export const action = async ({ request }: ActionArgs) => {
    return await logUserOut(request);
}

export const loader = async ({ request }: LoaderArgs) => {
    const bearerToken = await getBearerToken(request);
    return bearerToken ? true : false;
}

export default function Root() {
    const authorizationGranted = useLoaderData();
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Links />
            </head>
            <body>
                <div id="root" className="bg-[#121212]">
                    {
                        authorizationGranted &&
                        <div className="flex flex-col 
                        justify-center items-center"
                        >
                            <Form method="post" className="p-2 m-5 
                            bg-green-500 text-black rounded-full"
                            >
                                <button type="submit">Se déconnecter</button>
                            </Form>
                        </div>
                    }
                    Titres Spotify likés
                    <Outlet />
                    <Scripts />
                    <LiveReload />
                </div>
            </body>
        </html>
    )
}