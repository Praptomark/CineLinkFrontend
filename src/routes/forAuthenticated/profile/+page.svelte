<script>
    import { goto } from "$app/navigation";
    import TicketCard from "$lib/ticket_card.svelte";

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

    async function logout() {
        // Get the token from local storage
        const token = getCookie("jwt_token");

        // Make the API request to logout
        const response = await fetch("http://127.0.0.1:8000/api/logout/", {
            method: "POST", // or 'DELETE' depending on your server implementation
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
        });

        // Check if the response status is 200
        if (response.ok) {
            // Logout successful, delete from local storage and cookie storage
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;

                window.location.reload()
                goto("/")

                console.log("Logout successful");
            }
    }}

    async function get_user() {
        const token = getCookie("jwt_token");
        let response = await fetch(`http://127.0.0.1:8000/api/user/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        const responseData = await response.json();        
        return(responseData)
    }

    async function booked_tickets() {
        const token = getCookie("jwt_token");
        let response = await fetch(`http://127.0.0.1:8000/api/booked/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        const responseData = await response.json();        
        return(responseData)
    }
</script>

<div class="flex w-full p-10 gap-10 justify-around">
    <div>
        <button on:click={logout} class="bg-yellow-500 py-2 px-5 rounded-md text-lg font-opensans font-medium">Logout</button>
        <!-- <button on:click={logout} class="bg-green-500 py-2 px-5 rounded-md text-lg font-opensans font-medium">Edit profile</button> -->
    </div>
    <div class="font-opensans font-medium">
        {#await get_user()}
            <h1>Loading...</h1>
        {:then responseData} 
            <h1>Username: {responseData.username}</h1>
        {/await}
    </div>
    <div class="p-5 rounded-md border-2 border-black flex flex-col items-center gap-4">
        {#await booked_tickets()}
            <h1>Loading...</h1>
        {:then responseData} 
            {#each responseData as ticket}
                <TicketCard 
                username={ticket.user.username} 
                hallroom={ticket.seat.schedule.hallroom.hallroom_name} 
                movie={ticket.seat.schedule.movie.title}
                seat_number={ticket.seat.seat_number}
                show_date={ticket.seat.schedule.show_date}
                start_time={ticket.seat.schedule.start_time}
                end_time={ticket.seat.schedule.end_time}
                ticket_number={ticket.ticket_number}
                />
            {/each}
        {/await}
    </div>
</div>