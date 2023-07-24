//session keys
export const BEARER_TOKEN_KEY = "bearerToken";
export const CODE_VERIFIER_KEY = "code_verifier";

// Redirect URI registered in spotify's app account, used for granting authorization.
export const PROTOCOL =  process.env.NODE_ENV === 'production' ? "https://" : 'http://';
export const HOSTNAME = process.env.NODE_ENV === 'production' ? process.env.HOSTNAME : 'localhost';
export const SUBDOMAIN = process.env.NODE_ENV === 'production' ? ".netlify.app" : '';
export const PORT = process.env.NODE_ENV === 'production' ?  '' : ':8888';

export const REDIRECT_URI = PROTOCOL + HOSTNAME + SUBDOMAIN + PORT + "/requestAccessToken";
export const PLAYLIST_LIMIT = 20;

//Spotify authorization scope
export const scope = {
    playlists: 'playlist-read-private playlist-read-collaborative',
    savedSongs: 'user-library-read'
}