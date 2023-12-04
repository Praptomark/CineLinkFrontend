<script>
    import MovieCard from "$lib/movie_card.svelte";
    
    async function upcoming_movies(){
        const response = await fetch("http://127.0.0.1:8000/api/movies/")
        const upcoming_movie_data = response.json()
        return (upcoming_movie_data)
    }

    async function ongoing_movies(){
        const response = await fetch("http://127.0.0.1:8000/api/schedules/")
        const ongoing_movie_data = response.json()
        return (ongoing_movie_data)
    }
    console.log(upcoming_movies())
    console.log(ongoing_movies())
</script>

<main>
    <div
        class="flex flex-col items-center w-full relative justify-center h-[35rem]"
    >
        <img
            src="/pexels-pavel-danilyuk-7234227.jpg"
            alt="theater"
            class="object-cover object-center w-full h-full brightness-50 relative"
        />
        <div class="flex flex-col items-center absolute gap-3">
            <h1 class="text-white font-trainone font-bold text-9xl">
                CineLink
            </h1>
            <hr class="w-[10rem]" />
            <p class="text-white font-opensans font-medium">
                Your personal online movie booking site
            </p>
        </div>
    </div>

    <div class="w-full flex flex-col items-center justify-center h-10 gap-1">
        <h1 class="font-opensans font-medium cursor-default">
            Upcoming Movies
        </h1>
        <div class="h-0 w-20 border border-black" />
    </div>
    <div class="flex items-center gap-3 overflow-x-auto snap-x">
        <div class="flex items-center h-[20rem] px-3 gap-5">
            {#await upcoming_movies()}
                <h1 class="font-nunito text-center">Loading Movies...!!!</h1>
            {:then upcoming_movie_data} 
                {#each upcoming_movie_data as movie}
                    {#if movie.upcoming == true}
                        <MovieCard movie_title={movie.title} movie_poster={movie.poster}/>
                    {/if}
                {/each}
            {/await}
        </div>
    </div>

    <div class="w-full flex flex-col items-center justify-center h-10 gap-1">
        <h1 class="font-opensans font-medium cursor-default">
            Ongoing Movies
        </h1>
        <div class="h-0 w-20 border border-black" />
    </div>
    <div class="flex items-center gap-3 overflow-x-auto snap-x">
        <div class="flex items-center h-[20rem] px-3 gap-5">
            {#await ongoing_movies()}
                <h1 class="font-nunito text-center">Loading Movies...!!!</h1>
            {:then ongoing_movie_data} 
                {#each ongoing_movie_data as film}
                    <MovieCard movie_title={film.movie.title} movie_poster={film.movie.poster}/>
                {/each}
            {/await}
        </div>
    </div>
</main>
