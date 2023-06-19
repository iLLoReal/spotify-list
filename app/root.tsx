import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet, Scripts } from "@remix-run/react";

import global from '~/styles/global.css';
import tailwind from '~/tailwind.css';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: global },
    { rel: "stylesheet", href: tailwind },
];

export default function Root() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Links />
            </head>
            <body>
                <div id="root">
                    <Outlet />
                    <Scripts />
                    <LiveReload />
                </div>
            </body>
        </html>
    )
}