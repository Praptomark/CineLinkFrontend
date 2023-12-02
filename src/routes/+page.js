export const load = async () => {
    const movie_response = await fetch("http://127.0.0.1:8000/api/movies/")
    const movie = await movie_response.json()
    
    return { movie };
};