<script>
    import { goto } from "$app/navigation";
    import { authenticated } from "$lib/auth";

    let username = ""
    let password = ""
    let login_error = false

    async function login() {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    username,
                    password
                }),
            });

            if (response.ok) {
                // Assuming the server returns a JWT token upon successful login
                const { token } = await response.json();

                // Save the token to cookies
                document.cookie = `Token=${token}; path=/`;

                console.log(token)

                authenticated.set(true)

                // Redirect to the home page
                await goto("/forAuthenticated/profile");
            } else {
                // Handle login failure, e.g., display an error message
                login_error = true
                authenticated.set(false)
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }
</script>

<div class="flex flex-col items-center justify-center py-20 gap-3">
    {#if login_error}
        <h1 class="font-nunito">Account with {username} not found</h1>
    {/if}
    <form on:submit|preventDefault={login} class="flex flex-col items-center gap-5 border-2 p-4 rounded-lg">
        <label class="font-nunito flex items-center gap-2">
            Username:
            <input bind:value={username} type="text" class="border-2 rounded-lg text-center" />
        </label>
        <label class="font-nunito flex items-center gap-2">
            Password:
            <input bind:value={password} type="password" class="border-2 rounded-lg text-center" />
        </label>
        <button type="submit" class=" bg-green-500 py-2 px-4 rounded-md font-nunito text-white font-medium hover:bg-green-600 active:bg-green-500">Login</button>
    </form>
    <p class="font-nunito">Need an account <a href="/forAuth/register" class="font-nunito text-violet-400">Register</a></p>
</div>
