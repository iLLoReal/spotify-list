export default function SpotifyPlayButton() {
    return (
        <div style={{maxWidth: '25vw'}} className="self-center">
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
    )
}