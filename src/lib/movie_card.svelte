<script>
    export let movie_poster = "/pexels-pavel-danilyuk-7234294.jpg"
    export let movie_title = "Some Movie"
    export let movie_link = ""
</script>

<div class="snap-center flex flex-col gap-1 w-[11rem] h-[17rem]">
    <a href={movie_link} target="_blank" class="rounded-lg w-full h-full overflow-hidden">
        <img src="http://127.0.0.1:8000/{movie_poster}" alt="movie poster" class="rounded-lg w-full h-full hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out object-cover object-center">
    </a>
    <p class="font-opensans font-medium">{movie_title}</p>
</div>