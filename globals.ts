export const BEARER_TOKEN_STORAGE_KEY = "bearerToken";

export const REDIRECT_URI = "http://localhost:3000/requestAccessToken";
// Redirect URI registered in spotify's app account, used for granting authorization.

export const PLAYLIST_LIMIT = 20;

//Authorization scope
export const scope = {
    playlists: 'playlist-read-private playlist-read-collaborative',
    savedSongs: 'user-library-read'
}