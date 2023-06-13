import { redirect } from "react-router-dom";
import { getBearerToken } from "../../helpers/session";

export const likedTitlesLoader = async () => {
    if (!getBearerToken())
        return redirect('/login');
    return null;
}

export default function LikedTitles() {
    return (
        <div>
            Les musiques de spotify ont été chargées.
        </div>
    )
}