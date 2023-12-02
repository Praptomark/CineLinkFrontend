<script>
    export let movie_poster = "/pexels-pavel-danilyuk-7234294.jpg"
    export let movie_title = "Some Movie"
    export let movie_link = ""
</script>

<div class="snap-center flex flex-col gap-1 w-[11rem] h-[16rem]">
    <a href={movie_link} class="rounded-lg w-full h-full">
        <img src="{movie_poster}" alt="movie poster" class="rounded-lg w-full h-full hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out overflow-hidden">
    </a>
    <p class="font-opensans font-medium">{movie_title}</p>
</div>