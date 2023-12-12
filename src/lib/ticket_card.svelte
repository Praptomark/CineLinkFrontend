<script>
    export let username = "Username"
    export let hallroom = "hallroom"
    export let movie = "movie"
    export let seat_number = 0
    export let show_date = "date"
    export let start_time = "start time"
    export let end_time = "end time"
    export let ticket_number = "ticket"

</script>

<div class="rounded flex items-center w-[35rem] gap-2 justify-around border-2 border-purple-500">
    <div class="flex flex-col items-center gap-2 justify-around">
        <div class="flex items-center gap-5 justify-around font-opensans font-medium py-3">
            <h1>{username}</h1>
            <div>
                <h1>Hall Room: {hallroom}</h1>
                <h1>Movie: {movie}</h1>
                <h1>Seat: {seat_number}</h1>
            </div>
            <div>
                <h1>Date: {show_date}</h1>
                <h1>Start: {start_time}</h1>
                <h1>End: {end_time}</h1>
            </div>
        </div>
        <h1 class=" font-titilliumweb font-medium py-2 text-lg">{ticket_number}</h1>
    </div>
</div>