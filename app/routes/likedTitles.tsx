import { Links, Outlet } from "@remix-run/react"


export default function LikedTitles() {
    return (
        <main>
            <Links />
            <Outlet />
        </main>
    )
}
