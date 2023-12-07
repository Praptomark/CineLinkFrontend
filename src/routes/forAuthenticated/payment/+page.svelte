<script>
    import { goto } from "$app/navigation";

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

async function booked() {
    const token = getCookie("jwt_token");
    let response = await fetch(`http://127.0.0.1:8000/api/booking/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
    });
    await goto("/")
    const responseData = await response.json();
    return(responseData)
}
</script>

<div>
    <div class="flex flex-col items-center justify-center py-[10rem]">
        <button on:click={booked} class="py-3 px-5 rounded-xl font-opensans font-semibold bg-purple-500 text-white">PAY</button>
    </div>
</div>