import { fetchBearerToken } from '../api/login.ts';
import { BEARER_TOKEN_STORAGE_KEY } from '../globals.ts';

export const getBearerToken = () => {
    return localStorage.getItem(BEARER_TOKEN_STORAGE_KEY);
}

export const logUserIn = async ({ username, password }: { username: string, password: string }) => {
    console.log('DEBUG: call to spotify api with ', username, ' with password ', password);
    const bearer_token = await fetchBearerToken(username, password);
    localStorage.setItem(BEARER_TOKEN_STORAGE_KEY, bearer_token);
}

export const logUserOut = () => {
    localStorage.removeItem(BEARER_TOKEN_STORAGE_KEY);
}