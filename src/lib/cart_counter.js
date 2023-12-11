// cartcounter.js
import { writable } from 'svelte/store';

// Create a writable store with an initial value of 0
export const cartCounter = writable(0);

// Function to update the cart counter value
export function updateCartCounter(value) {
    cartCounter.set(value);
}
