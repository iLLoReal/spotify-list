import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { Item } from "~/types/spotify";
import Spinner from "./Spinner";

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
                </div> : <div className="flex-col justify-around">
                Les {fetcher.data?.length} musiques Spotify ont été chargées :
                {fetcher.data.map((item: Item, id: number) => {
                    const { artists } = item.track;
                    const { name: trackName } = item.track;
                    const { genres } = item.track.album;
                    return (
                        <div className=" m-2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={"playlist/" + id}>
                            {id + 1}
                            <div>
                                Auteur : {artists.at(0)?.name}
                            </div>
                            <div>
                                Musique: {trackName}
                            </div>
                            <div>
                                Genres : {genres ? genres.map((genre: string, id: number) => <p key={'genres/' + id}>{genre}</p>) : 'Pas de genres'}
                            </div>
                        </div>
                    )
                })}
                </div>
            }
        </div>
    )
}