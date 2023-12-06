<script>
    export let movie_poster = "/pexels-pavel-danilyuk-7234294.jpg";
    export let hall_name = "Some Hall";
    export let movie_title = "Some movie";
    export let movie_duration = "0hr 0min";
    export let start_time = 0;
    export let end_time = 0;
    export let movie_link = "";
    export let book_button = "";
    export let show_date = "";
    export let genre = "";
    export let language = "";

    function tConvert(time) {
        // Check correct time format and split into components
        time = time
            .toString()
            .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) {
            // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(""); // return adjusted time or original string
    }
</script>

<div
    class="flex items-center w-[80rem] h-[15rem] border-2 rounded-lg py-3 border-violet-400 justify-around font-opensans bg-slate-700 text-white font-medium"
>
    <a
        href={movie_link} target="_blank"
        class="rounded-lg w-[11rem] h-full overflow-hidden border border-white"
    >
        <img
            src="http://127.0.0.1:8000{movie_poster}"
            alt="poster"
            class="rounded-lg w-full h-full hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out object-cover object-center"
        />
    </a>
    <div class="flex flex-col gap-2">
        <h1>Hall: {hall_name}</h1>
        <h1>Show Date: {show_date}</h1>
    </div>
    <div class="flex flex-col gap-2">
        <h1>Movie Title: {movie_title}</h1>
        <h1>Movie Duration: {movie_duration}</h1>
        <h1>Genre: {genre}</h1>
        <h1>Language: {language}</h1>
    </div>
    <div class="flex flex-col gap-2">
        <h1>Start Time: {tConvert(start_time)}</h1>
        <p class="text-center">to</p>
        <h1>End Time: {tConvert(end_time)}</h1>
    </div>
    <a
        href={book_button}
        class="py-2 px-4 rounded-lg bg-violet-500 hover:bg-violet-400 active:bg-violet-500"
        >BOOK</a
    >
</div>
