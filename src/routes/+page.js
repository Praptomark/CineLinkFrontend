export const load = async () => {
    const movie_response = await fetch("http://127.0.0.1:8000/api/movies/")
    const movie = await movie_response.json()

    const user_response = await fetch("http://127.0.0.1:8000/api/user/")
    const user = await user_response.json()
    
    return { movie, user };
};