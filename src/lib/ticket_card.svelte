<script>
    import Icon from '@iconify/svelte';

    export let username = "Username"
    export let hallroom = "hallroom"
    export let movie = "movie"
    export let seat_number = 0
    export let show_date = "date"
    export let start_time = "start time"
    export let end_time = "end time"
    export let ticket_number = "ticket"
    export let ticket_id = ""

    // Function to get the value of a cookie by name
    function getCookie(name) {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    export async function delete_ticket() {
        const token = getCookie("jwt_token");
        const response = await fetch("http://127.0.0.1:8000/api/delete-book/",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify({
                    booked_id: Number(ticket_id),
                }),
            },
        );
        if (response.ok) {
            const responseData = await response.json();
            // Handle the response data as needed
            console.log("Success:", responseData);
        } else {
            // Handle errors
            console.error("Error:", response.statusText);
        }
    }

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
    <button on:click={delete_ticket}><Icon icon="ic:round-delete" color="red" width="30" height="30" /></button>
</div>