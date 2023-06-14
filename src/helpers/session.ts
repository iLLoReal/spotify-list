import { fetchAuthorizationCode, fetchBearerToken } from '../api/login.ts';
import { BEARER_TOKEN_STORAGE_KEY, CLIENT_ID } from '../globals.ts';

export const getBearerToken = () => {
    return localStorage.getItem(BEARER_TOKEN_STORAGE_KEY);
}

export const requestPermission = async () => {
    return await fetchAuthorizationCode(CLIENT_ID);
}

export const logUserOut = () => {
    localStorage.removeItem(BEARER_TOKEN_STORAGE_KEY);
}