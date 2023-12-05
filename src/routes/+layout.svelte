<script>
    import "../app.css";
    import { isLoggedIn, isSuperUser } from '$lib/auth';
</script>


<nav class="fixed w-full flex items-center justify-around bg-purple-600 text-white p-3 -mt-[4rem] z-50">
    <h1 class="font-titilliumweb text-3xl font-bold cursor-default">CineLink</h1>
    <ul class="flex items-center justify-around gap-3 font-medium">
        <li><a class="hover:underline hover:underline-offset-4 active:no-underline" href="/">Home</a></li>
        <li><a class="hover:underline hover:underline-offset-4 active:no-underline" href="/forAll/schedules">Schedules</a></li>
        <li><a class="hover:underline hover:underline-offset-4 active:no-underline" href="/forAll/about">About</a></li>
        {#if $isLoggedIn}
            {#if $isSuperUser}
                <li><a class="hover:underline hover:underline-offset-4 active:no-underline text-orange-500" href="/forAdmin/hallroom">hallroom</a></li>
                <li><a class="hover:underline hover:underline-offset-4 active:no-underline text-orange-500" href="/forAdmin/movies">movies</a></li>
                <li><a class="hover:underline hover:underline-offset-4 active:no-underline text-orange-500" href="/forAdmin/schedules">schedules</a></li>
            {:else}
                <li><a class="hidden" href="/forAdmin/hallroom">hallroom</a></li>
                <li><a class="hidden" href="/forAdmin/movies">movies</a></li>
                <li><a class="hidden" href="/forAdmin/schedules">schedules</a></li>
            {/if}
        {/if}
    </ul>
    <div class="flex items-center gap-3 font-nunito">
        {#if $isLoggedIn}
            <a class="bg-violet-700 px-4 py-2 rounded-xl hover:bg-violet-500 active:bg-violet-700" href="/forAuthenticated/profile">profile</a>
            <a href="/forAuthenticated/cart">cart</a>
        {:else}
            <a class="hidden" href="/forAuthenticated/profile">profile</a>
            <a class="hidden" href="/forAuthenticated/cart">cart</a>
            <a class="bg-violet-700 px-4 py-2 rounded-xl hover:bg-violet-500 active:bg-violet-700" href="/forAuth/login">login</a>
        {/if}
    </div>
</nav>

<slot />

<footer class="bg-black flex flex-col w-full">
    <div class="flex justify-around h-[13rem] p-5 text-white">
        <div>
            <h1 class="font-opensans font-bold text-3xl">CineLink</h1>
            <div class="h-0 w-20 border border-white my-1"/>
            <address>Neuron33 <br> Gulsan grace CWC-8 <br>Gulsan 1</address>
        </div>
        
        <div>
            <h1 class="font-medium">Contact Us</h1>
            <div class="h-0 w-10 border border-white my-1"/>
            <h1 class="font-medium pt-1">Phone Numbers</h1>
            <p>(+88) 09617660660 <br> 01755665544</p>
            <h1 class="font-medium pt-1">Email Address</h1>
            <p class="hover:text-violet-400">info@cinelink.com</p>
        </div>
        
        <div>
            <h1 class="font-medium">More at CineLink</h1>
            <div class="h-0 w-10 border border-white my-1"/>
            <p class="hover:text-violet-400">Privacy & Policy</p>
        </div>
    </div>
    <hr>
    <div class="pl-20 py-1"><h1 class="text-gray-200">Copyright &#169; <span class="font-medium text-white">CineLink</span> All Rights Reserved.</h1></div>
</footer>