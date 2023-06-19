import { ClientOnly } from "remix-utils";
import Spinner from "~/components/Spinner";
import Tracks from "~/components/Tracks";

export default function LikedTitles() {
    return (
        <div>
            <ClientOnly fallback={
                <div className="h-full">
                    <Spinner />
                </div>}
            >
                {() => <Tracks />}
            </ClientOnly>
        </div>
    );
}