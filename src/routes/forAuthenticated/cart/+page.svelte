<script>
    import { goto } from "$app/navigation";
    import { cartCounter, updateCartCounter } from "$lib/cart_counter"
    import { jwtToken } from "$lib/auth";

    async function get_cart() {
        const token = $jwtToken
        let response = await fetch(`http://127.0.0.1:8000/api/cart/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        const responseData = await response.json();
        // Update the total items in the store
        updateCartCounter(responseData.length);
        
        return(responseData)
    }

    function payment_function() {
        goto("/forAuthenticated/payment")
    }
    console.log(get_cart())
</script>

<div class="flex flex-col items-center py-5">
    <div class="flex items-center justify-around gap-40">
        <h1 class="font-opensans font-medium text-lg">Total Items: {$cartCounter}</h1>

        <button on:click={payment_function} class="font-opensans text-white bg-purple-700 py-5 px-10 text-center font-semibold rounded-lg text-xl active:bg-purple-700 hover:bg-purple-500">checkout</button>

        <h1 class="font-opensans font-medium text-lg">Total Amount: {$cartCounter * 400} Taka</h1>
    </div>
    <div class="flex flex-col items-center gap-3 py-5">
        {#await get_cart()}
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
