<script>
    const name = "Cine Link"
    const pic = "./pexels-pavel-danilyuk-7234294.jpg"
    const about = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nihil dolore rerum repellat corporis esse, sint earum delectus ducimus, minima nesciunt ea. Error architecto, qui sit tempora possimus doloremque facere?"
</script>

<div class="py-20 flex flex-col justify-center items-center">
    <div class="flex flex-col items-center gap-5">
        <div class="w-[10rem] h-[10rem]">
            <img src="/{pic}" alt="owner" class="w-full h-full object-cover object-center rounded-full border-4 border-purple-500">
        </div>
        <div class="flex flex-col items-center">
            <h1 class="text center font-nunito text-4xl font-bold text-violet-500">{name}</h1>
            <div class="h-0 border w-40 border-violet-800 mt-1 mb-3"/>
            <p class="font-opensans w-[30rem] p-3 text-center">{about}</p>
        </div>
    </div>
</div>