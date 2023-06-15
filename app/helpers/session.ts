import { BEARER_TOKEN_STORAGE_KEY } from '~/../globals.ts';
import { fetchAuthorizationCode } from '~/api/login.ts';
import { getSession } from '~/session';

export const getBearerToken = async (request: Request) => {
    const session = await getSession(request.headers.get('Cookie'));
    console.log('getBearerToken: ', session.get('bearerToken'));
    return session.get(BEARER_TOKEN_STORAGE_KEY);
}

export const requestPermission = async (request: Request) => {
    return await fetchAuthorizationCode(request);
}

export const logUserOut = async (request: Request) => {
    const session = await getSession(request.headers.get('Cookie'));
    session.set(BEARER_TOKEN_STORAGE_KEY, '');
}