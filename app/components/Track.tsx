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
        <div
            style={{ height: images[0].height + 'px' }}
            className="bg-black border-l-2 border-r-2  
            flex flex-row flex-shrink-0 
            mt-5
            justify-evenly border-gray-500"
        >
            <div className="self-center border rounded p-10">
                {id + 1}
            </div>
            <div style={{
                backgroundImage: `url(${images[0].url})`,
                width: images[0].width,
                height: images[0].height
            }}>
            </div>
            <div className="flex 
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
            <div className="self-center">
                <div className="flex 
                justify-center items-center text-xs 
                font-semibold text-black
                bg-green-500 rounded-full
                w-16 h-16
                px-4 py-2"
                >
                    <div className="flex 
                    space-x-3 p-2"
                    >
                        <button>
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                                fill="black"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}