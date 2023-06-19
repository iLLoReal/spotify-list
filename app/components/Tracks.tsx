import { useFetcher } from "@remix-run/react";
import { Fragment, useEffect } from "react";
import { Item } from "~/types/spotify";
import Spinner from "./Spinner";
import Track from "./Track";

export default function Tracks() {
    const fetcher = useFetcher<Item[]>();

    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data == null) {
            fetcher.load("/fetchTracks");
        }
    }, [fetcher]);

    return (
        <div className="h-full">
            {!fetcher.data ?
                <div className="h-full">
                    <Spinner />
                </div> : <div className="flex flex-col justify-around">
                    Les {fetcher.data?.length} musiques Spotify ont été chargées :
                    {fetcher.data.map((item: Item, id: number) => {

                        return (
                            <Fragment key={"tracks/" + id}>
                                <Track item={item} id={id} />
                            </Fragment>
                        )
                    })}
                </div>
            }
        </div>
    )
}