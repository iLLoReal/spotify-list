import requestPermission from './app/helpers/session';

export async function handler(event) {
    // Perform server-side logic to determine the redirect URL
    const redirectUrl = requestPermission();
  
    return redirectUrl; // Return the redirect function directly
  }