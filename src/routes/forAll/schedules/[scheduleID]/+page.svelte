<script>
    import { page } from "$app/stores";
    import SeatsButton from "$lib/seats_button.svelte";

    const scheduleID = $page.params.scheduleID;

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

    async function schedules_by_id() {
        const response = await fetch(
            `http://127.0.0.1:8000/api/schedules/${scheduleID}`,
        );
        const upcoming_movie_data = response.json();
        return upcoming_movie_data;
    }

    async function seats() {
        const response = await fetch(`http://127.0.0.1:8000/api/seats/`);
        const seat = response.json();
        return seat;
    }

    // console.log(seats());
</script>

<div>
    <div>
        {#await schedules_by_id()}
            <h1>Loading Movie Info...</h1>
        {:then upcoming_movie_data}
            <div
                class="flex items-center justify-around font-opensans font-medium py-5"
            >
                <img
                    src="http://127.0.0.1:8000{upcoming_movie_data.movie
                        .poster}"
                    alt="movie poster"
                    class=" w-[14rem] h-[20rem] object-cover object-center"
                />
                <div class="flex flex-col gap-2">
                    <h1>Hall: {upcoming_movie_data.hallroom.hallroom_name}</h1>
                    <h1>Show Date: {upcoming_movie_data.show_date}</h1>
                </div>
                <div class="flex flex-col gap-2">
                    <h1>Movie Title: {upcoming_movie_data.movie.title}</h1>
                    <h1>
                        Movie Duration: {upcoming_movie_data.movie
                            .movie_duration}
                    </h1>
                    <h1>Genre: {upcoming_movie_data.movie.genre}</h1>
                    <h1>Language: {upcoming_movie_data.movie.language}</h1>
                </div>
                <div class="flex flex-col gap-2">
                    <h1>
                        Start Time: {tConvert(upcoming_movie_data.start_time)}
                    </h1>
                    <p class="text-center">to</p>
                    <h1>End Time: {tConvert(upcoming_movie_data.end_time)}</h1>
                </div>
            </div>
        {/await}
    </div>
    <div class="h-0 w-full border border-black" />
    <div class="px-10 py-6">
        <div
            class="border-8 h-[10rem] border-purple-500 flex flex-col justify-center items-center"
        >
            <h1 class="font-nunito font-bold text-7xl">SCREEN</h1>
        </div>
        <div class="flex flex-wrap gap-2 justify-center py-10">
            {#await seats()}
                <h1>Loading...</h1>
            {:then seat} 
                {#each seat as sit}
                    {#if sit.schedule.id == scheduleID}
                        <SeatsButton seat_id={sit.id} seat_number={sit.seat_number} is_booked={sit.is_booked}/>
                    {/if}
                {/each}
            {/await}
        </div>
    </div>
</div>
