<script>
    async function logout() {
        // Get the token from local storage
        const token = localStorage.getItem("token");

        // Make the API request to logout
        const response = await fetch("http://127.0.0.1:8000/api/logout/", {
            method: "POST", // or 'DELETE' depending on your server implementation
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
        });

        // Check if the response status is 200
        if (response.status === 200) {
            // Logout successful, delete from local storage and cookie storage
            localStorage.removeItem("token");
            // Additional code for clearing cookies if needed
            // document.cookie = "";

            console.log("Logout successful");
        }
    }
</script>

<button
    on:click={logout}
    class="py-2 px-4 rounded-lg bg-yellow-500 font-medium font-nunito"
    >Logout</button
>
