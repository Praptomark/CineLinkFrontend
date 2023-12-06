<script>
    import { onMount } from "svelte";

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

    async function get_cartproducts() {
        const token = getCookie("jwt_token");
        let response = await fetch(`http://127.0.0.1:8000/api/cartproducts/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        const responseData = await response.json();
        return(responseData)
    }

    async function make_cart() {
        const token = getCookie("jwt_token");
        let response = await fetch(`http://127.0.0.1:8000/api/create-cart/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        const responseData = await response.json();
        return(responseData)
    }
    console.log(get_cartproducts())
</script>

<div class="flex flex-col items-center py-5">
    <div>
        <button on:click={make_cart} class="font-opensans text-white bg-purple-700 py-5 px-10 text-center font-semibold rounded-lg text-xl active:bg-purple-700 hover:bg-purple-500">checkout</button>
    </div>
    <div class="flex flex-col items-center gap-3 py-5">
        {#await get_cartproducts()}
            <h1>Loading...</h1>
        {:then responseData}
            {#each responseData as sits}
                <div class="flex font-opensans font-medium border-2 border-purple-500 rounded-lg w-[70rem] justify-around items-center">
                    <h1>Seat number: {sits.seat.seat_number}</h1>
                    <div>
                        <h1>Hall: {sits.seat.schedule.hallroom.hallroom_name}</h1>
                        <h1>Movie: {sits.seat.schedule.movie.title}</h1>
                    </div>
                    <div>
                        <h1>Date: {sits.seat.schedule.show_date}</h1>
                        <h1>Start Time: {sits.seat.schedule.start_time}</h1>
                        <h1>End Time: {sits.seat.schedule.end_time}</h1>
                    </div>
                </div>
            {/each}
        {/await}
    </div>
</div>
