import { useParams } from "@remix-run/react";

export default function LikedTitleById() {
    const { titleId } = useParams();

    return (
        <div>
            Id: {titleId}
        </div>
    )
}
