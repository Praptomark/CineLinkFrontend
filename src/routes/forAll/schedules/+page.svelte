<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import ScheduleCard from '$lib/schedule_card.svelte';

    let schedule_info = data.schedule
    console.log(schedule_info)
</script>

<div class="flex flex-col items-center gap-3 py-4">
    {#each schedule_info as shows}
        <ScheduleCard 
        movie_title={shows.movie.title} 
        movie_poster={shows.movie.poster} 
        hall_name={shows.hallroom.hallroom_name}
        movie_duration={shows.movie.duration}
        show_date={shows.show_date}
        genre={shows.movie.genre}
        language={shows.movie.language}
        start_time={shows.start_time}
        end_time={shows.end_time}
        book_button={`/forAll/schedules/${shows.id}`}
        />
    {/each}
</div>
