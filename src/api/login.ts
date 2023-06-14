import { redirect } from "react-router-dom";
import { Buffer } from "buffer";
import { BEARER_TOKEN_STORAGE_KEY, CLIENT_ID, REDIRECT_URI } from "../globals";
import axios from 'axios';

export const fetchBearerToken = async (clientId: string, authorizationCode: string = '') => {
    if (authorizationCode) {
        //call to spotify api
        //----Next steps with authorization code request---
        // -> localStorage.setItem('AuthCode', result.body.authCode);
        let codeVerifier = localStorage.getItem('code_verifier');
        if (codeVerifier) {
            let body = new URLSearchParams({
                grant_type: 'authorization_code',
                code: authorizationCode,
                redirect_uri: REDIRECT_URI,
                client_id: clientId,
                client_secret: '',
                code_verifier: codeVerifier
            });

            const response = axios.post('https://accounts.spotify.com/api/token', body, {
                headers: {
                    'Authorization': 'Basic ' +  window.btoa(CLIENT_ID + ':' + ''), //CLIENT_SECRET
                    'Content-Type': 'application/x-www-form-urlencoded',    
                },
            }).then(response => {
                if (!(response.status === 200)) {
                    throw new Error('HTTP status ' + response.status);
                }
                return response.data;
            }).then(data => {
                localStorage.setItem(BEARER_TOKEN_STORAGE_KEY, data.access_token);
            }).catch(error => {
                console.error('Error:', error);
            });
        }
    }
    return redirect('/login');
}

export const fetchAuthorizationCode = async (clientId: string = CLIENT_ID) => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    let state = generateRandomString(16);
    let scope = 'playlist-read-private playlist-read-collaborative';

    localStorage.setItem('code_verifier', codeVerifier);
    let args = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
    });
    return redirect('https://accounts.spotify.com/authorize?' + args);
}

function generateRandomString(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function generateCodeVerifier() {
    const codeVerifier = generateRandomString(128);

    return codeVerifier;
}

async function generateCodeChallenge(codeVerifier: string) {
    function base64encode(string: number[]) {
        return btoa(String.fromCharCode.apply(null, string))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return base64encode(Array.from(new Uint8Array(digest)));
}
