import { Outlet } from "@remix-run/react";

export default function Root() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div id="root">
                    <Outlet />
                </div>
            </body>
        </html>
    )
}