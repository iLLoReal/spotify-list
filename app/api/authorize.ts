import { redirect } from '@remix-run/node';
import axios from 'axios';
import crypto from 'crypto';
import { BEARER_TOKEN_KEY, CODE_VERIFIER_KEY, REDIRECT_ENDPOINT, scope } from "~/../globals";
import { commitSession, getSession } from '~/session';

export const fetchBearerToken = async (request: Request, authorizationCode: string = '') => {
    const session = await getSession(request.headers.get('Cookie'));
    const redirect_uri = (new URL(request.url)).origin + REDIRECT_ENDPOINT;

    let codeVerifier = session.get('code_verifier');
    if (!codeVerifier)
        {
            throw new Error('session not set');
        }
    if (authorizationCode && codeVerifier) {
        let body = new URLSearchParams({
            grant_type: 'authorization_code',
            code: authorizationCode,
            redirect_uri: redirect_uri,
            client_id: process.env.CLIENT_ID || '',
            client_secret: process.env.CLIENT_SECRET || '',
            code_verifier: codeVerifier
        });
        await axios.post('https://accounts.spotify.com/api/token', body, {
            headers: {
                'Authorization': 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(response => {
            if (!(response.status === 200)) {
                throw new Error('HTTP status ' + response.status);
            }
            console.log(response.data);
            return response.data;
        }).then((data) => {
            session.set(BEARER_TOKEN_KEY, data.access_token);
        }).catch(error => {
            console.error('Error:', error);
        });
    }
    console.log(session.data);
    return redirect('/authorize', {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });
}

export const fetchAuthorizationCode = async (request: Request) => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    let state = generateRandomString(16);
    const redirect_uri = (new URL(request.url)).origin + REDIRECT_ENDPOINT;

    const session = await getSession(request.headers.get('Cookie'));
    session.set('code_verifier', codeVerifier);
    let args = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.CLIENT_ID || '',
        scope: scope.savedSongs,
        redirect_uri: redirect_uri,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
    });
    return redirect('https://accounts.spotify.com/authorize?' + args, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });
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
    const digest = crypto
        .createHash('sha256')
        .update(data)
        .digest();
    return base64encode(Array.from(new Uint8Array(digest)));
}
