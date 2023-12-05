/** @type {import('./$types').PageLoad} */
export async function load() {
    const response = await fetch("http://127.0.0.1:8000/api/schedules/")
    const schedule = response.json()
    return { schedule };
};