import { writable, derived } from 'svelte/store';

// Create a writable store for the JWT token
export const jwtToken = writable(null);

// Function to get the value of a cookie by name
function getCookie(name) {
    if (import.meta.env.SSR) {
        // Handle server-side logic or return a default value
        return null;
    }

    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map((c) => c.trim());
        if (cookieName === name) {
            return cookieValue || null; // Return null if cookieValue is falsy
        }
    }
    return null;
}

// Create a derived store for isLoggedIn based on the presence of the JWT token
export const isLoggedIn = derived(jwtToken, $jwtToken => $jwtToken !== null);

// Create a derived store for isSuperUser (assuming you have some logic for this based on the JWT token)
export const isSuperUser = derived(jwtToken, $jwtToken => {
    // Add your logic to determine if the user is a superuser based on the JWT token
    // For example, you can decode the token and check for a specific claim.
    return false; // Replace with your logic
});

// Set the initial value of jwtToken if running on the client side
if (!import.meta.env.SSR) {
    jwtToken.set(getCookie('jwt_token'));
}

console.log(jwtToken);
console.log(isLoggedIn);
