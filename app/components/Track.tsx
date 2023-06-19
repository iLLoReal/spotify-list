import { Item } from "~/types/spotify";

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
        <div style={{ height: images[0].height + 'px' }} className="bg-gray-200 flex flex-row flex-shrink-0 justify-evenly border-gray-500">
            <div className="self-center">
                {id + 1}
            </div>
            <div style={{
                backgroundImage: `url(${images[0].url})`,
                width: images[0].width,
                height: images[0].height
            }}>
            </div>
            <div className="flex flex-col justify-around">
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
            <div className="self-center">
                <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
                    <div className="flex space-x-3 p-2">
                        <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}