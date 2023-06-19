import { Item } from "~/types/spotify";
import SpotifyPlayButton from "./SpotifyPlayButton";

type TrackProps = {
    item: Item,
    id: number
}

export default function Track({ item, id }: TrackProps) {
    const { artists } = item.track;
    const { name: trackName } = item.track;
    const { genres } = item.track.album;
    const { images } = item.track.album;
    return (
        <div
            style={{ height: images[0].height + 'px' }}
            className="bg-black border-l-2 border-r-2  
            flex flex-row flex-shrink-0 
            mt-5 justify-evenly border-gray-500"
        >
            <div style={{ maxWidth: '5vw', minWidth: '5vw' }} className="self-center border rounded p-10">
                {id + 1}
            </div>
            <div style={{
                backgroundImage: `url(${images[0].url})`,
                width: images[0].width,
                height: images[0].height,
                maxWidth: '40vw',
                minWidth: '40ww',
                objectFit: 'contain',
            }}>
            </div>
            <div style={{ maxWidth: '30vw', minWidth: '30vw' }} className="flex 
            flex-col justify-around"
            >
                <div>
                    Auteur : {artists.at(0)?.name}
                </div>
                <div>
                    Musique: {trackName}
                </div>
                <div>
                    Genres : {genres ? genres.map((genre: string, id: number) => <span key={'genres/' + id}>{genre}{id !== genres.length - 1 ? ',' : ''} </span>) : 'Pas de genres'}
                </div>
            </div>
            <SpotifyPlayButton />
        </div>

    )
}