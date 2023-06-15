import { useParams } from "@remix-run/react";

export default function LikedTitleById() {
    const { titleId } = useParams();

    return (
        <div>
            Title id : {titleId}
        </div>
    )
}
