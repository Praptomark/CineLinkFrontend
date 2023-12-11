<script>
    export let seat_id = 0;
    export let seat_number = 0;
    export let is_booked = true;
    let is_selected = false;

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

    async function add_cart() {
        is_selected = !is_selected;
        const token = getCookie("jwt_token");
        const response = await fetch("http://127.0.0.1:8000/api/add-cart/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify({
                    seat_id: Number(seat_id),
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

    export async function delete_cart() {
        is_selected = !is_selected;
        const token = getCookie("jwt_token");
        const response = await fetch("http://127.0.0.1:8000/api/delete-cart/",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify({
                    seat_id: Number(seat_id),
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

<div>
    {#if is_booked}
        <div
            class="w-[4rem] h-[4rem] bg-red-500 flex flex-col justify-center items-center rounded-xl"
        >
            <h1 class="text-white font-medium font-opensans cursor-default">
                {seat_number}
            </h1>
        </div>
    {:else if is_selected}
        <button
            on:click={delete_cart}
            class="w-[4rem] h-[4rem] bg-purple-500 flex flex-col justify-center items-center rounded-xl"
        >
            <h1 class="text-white font-medium font-opensans cursor-default">
                {seat_number}
            </h1>
        </button>
    {:else}
        <button
            on:click={add_cart}
            class="w-[4rem] h-[4rem] bg-green-500 flex flex-col justify-center items-center rounded-xl"
        >
            <h1 class="text-white font-medium font-opensans cursor-default">
                {seat_number}
            </h1>
        </button>
    {/if}
</div>
