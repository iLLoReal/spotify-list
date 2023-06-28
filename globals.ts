//session keys
export const BEARER_TOKEN_KEY = "bearerToken";
export const CODE_VERIFIER_KEY = "code_verifier";

// Redirect URI registered in spotify's app account, used for granting authorization.
export const SUBDOMAIN = ".netlify.app";
export const REDIRECT_URI = process.env.HOSTNAME + SUBDOMAIN + "/requestAccessToken";

export const PLAYLIST_LIMIT = 20;

//Spotify authorization scope
export const scope = {
    playlists: 'playlist-read-private playlist-read-collaborative',
    savedSongs: 'user-library-read'
}