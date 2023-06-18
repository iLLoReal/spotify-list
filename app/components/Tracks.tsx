import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { Item } from "~/types/spotify";
import Spinner from "./Spinner";

export default function Tracks() {
    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.state === "idle" && fetcher.data == null) {
            fetcher.load("/fetchTracks");
        }
    }, [fetcher]);

    return (
        <div>
            {
                !fetcher.data &&
                <div>
                    <Spinner />
                </div>
            }
            {
                fetcher.data?.map((item: Item, id: number) => {
                    const { artists } = item.track;
                    const { name: trackName } = item.track;
                    const { genres } = item.track.album;
                    return (
                        <div key={"playlist/" + id}>
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
                })
            }
        </div>
    )
}