import { useParams } from "react-router-dom";

export const likedTitleByIdLoader = () => {
    return null;
}

export default function LikedTitleById() {
    const { titleId } = useParams();

    return (
        <div>
            Title id : {titleId}
        </div>
    )
}