<script>
    import { onMount } from "svelte";

    onMount(() => {
        // Clear cookies
        document.cookie.split(";").forEach(cookie => {
            const [name, _] = cookie.split("=").map(c => c.trim());
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    });
</script>


<div class="py-[9.1rem] flex flex-col items-center justify-center">
    <h1 class="font-opensans font-medium text-xl">
        Logout Succesfull, You can <a
            href="/forAuth/login"
            class=" text-green-500">LOGIN</a
        > now
    </h1>
</div>
