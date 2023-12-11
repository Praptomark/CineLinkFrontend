<script>
    import { goto } from "$app/navigation";
    let username = ""
    let password = ""
    let register_error = false

    async function register() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });
            if (response.ok) {
                await goto("/corfirmationpage/forlogin")
            } else {
                register_error = true
            }

            const result = await response.json();
            console.log("Data sent successfully:", result);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
</script>

<div class="flex flex-col items-center justify-center py-[10rem] gap-3">
    {#if register_error}
        <h1 class="font-nunito">Account with {username} already existed</h1>
    {/if}
    <form on:submit|preventDefault={register} class="flex flex-col items-center gap-5 border-2 p-4 rounded-lg">
        <label class="font-nunito flex items-center gap-2">
            Username:
            <input bind:value={username} type="text" class="border-2 rounded-lg text-center" />
        </label>
        <label class="font-nunito flex items-center gap-2">
            Password:
            <input bind:value={password} type="text" class="border-2 rounded-lg text-center" />
        </label>
        <button type="submit" class=" bg-green-500 py-2 px-4 rounded-md font-nunito text-white font-medium hover:bg-green-600 active:bg-green-500">Register</button>
    </form>
    <p class="font-nunito">Already have account <a href="/forAuth/login" class="font-nunito text-violet-400">Login</a></p>
</div>
