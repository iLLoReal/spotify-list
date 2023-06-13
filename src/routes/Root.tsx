import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <h1>Spotify-Likes</h1>
            <div>
                <Outlet />
            </div>
        </>
    )
}