export const load = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/movies/")
    const movie = await response.json()
    return { movie };
};