<script>
    export let data
    import MovieCard from "$lib/movie_card.svelte";
    
    const movies = data.movie
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
            Upcomming Movies
        </h1>
        <div class="h-0 w-20 border border-black" />
    </div>
    <div class="flex items-center gap-3 overflow-x-auto snap-x">
        <div class="flex items-center h-[20rem] px-3 gap-5">
            {#each movies as movie}
                {#if movie.upcomming == true}
                    <MovieCard movie_title={movie.title} movie_poster={movie.poster}/>
                {/if}
            {/each}
        </div>
    </div>
</main>
