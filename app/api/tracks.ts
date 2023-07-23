import axios from "axios";
import fakeTracks from '~/mockDb/fakeTracks.json';
import { getSession } from "~/session";
import { Item } from "~/types/spotify";

const delay = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export const fetchTracks = async (request: Request) => {
    const session = await getSession(request.headers.get('Cookie'));
    const bearerToken = session.get('bearerToken');
    let likedTitles: { data: { items: Item[] } };

    if (process.env.NODE_ENV === "production") {
        likedTitles = await axios.get(`https://api.spotify.com/v1/me/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + bearerToken,
            }
        })
    } else {
        likedTitles = {
            data: {
                items: [{
                    track: fakeTracks,
                    added_at: "2023"
                }]
            }
        }
        await delay(2000);
    }
    console.log(likedTitles.data.items);
    return likedTitles.data.items as Item[];
}