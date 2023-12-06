<script>
    import { onMount } from "svelte";
    import { isLoggedIn, isSuperUser } from "$lib/auth"
    import { goto } from "$app/navigation";

    // Form variables
    let username = "";
    let password = "";

    // Function to handle login
    const login = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (response.ok) {
            const data = await response.json();

            document.cookie = `jwt_token=${data.token}; expires=${new Date(data.expiry).toUTCString()}; path=/`;

            // Set store variables
            isLoggedIn.set(true);

            // Fetch user info
            await fetchUserInfo();
            goto("/")
        } else {
            console.error("Login failed");
        }
    };

    // Function to fetch user info
    const fetchUserInfo = async () => {
        const token = localStorage.getItem("jwt_token");

        if (token) {
            const response = await fetch("http://127.0.0.1:8000/api/user/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            if (response.ok) {
                const userData = await response.json();

                // Set isSuperUser based on user info
                isSuperUser.set(userData.is_superuser);
            }
        }
    };

    // Check for stored token on component mount
    onMount(async () => {
        const storedToken = localStorage.getItem("jwt_token");

        if (storedToken) {
            // Set store variables
            isLoggedIn.set(true);

            // Fetch user info
            await fetchUserInfo();
        }
    });
</script>

<!-- Your Svelte component HTML -->
<div class="flex flex-col items-center justify-center py-[10rem] gap-3">
    <form
        on:submit|preventDefault={login}
        class="flex flex-col items-center gap-5 border-2 p-4 rounded-lg"
    >
        <label class="font-nunito flex items-center gap-2">
            Username:
            <input
                bind:value={username}
                type="text"
                class="border-2 rounded-lg text-center"
            />
        </label>
        <label class="font-nunito flex items-center gap-2">
            Password:
            <input
                bind:value={password}
                type="password"
                class="border-2 rounded-lg text-center"
            />
        </label>
        <button
            type="submit"
            class="bg-green-500 py-2 px-4 rounded-md font-nunito text-white font-medium hover:bg-green-600 active:bg-green-500"
            >Login</button
        >
    </form>
    <p class="font-nunito">
        Need an account <a
            href="/forAuth/register"
            class="font-nunito text-violet-400">Register</a
        >
    </p>
</div>
