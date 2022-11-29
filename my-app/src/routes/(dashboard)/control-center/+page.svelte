<script lang="ts">

	import ThreeDots from "$lib/components/Icon/Three-dots.svelte";
    import Search from "$lib/components/Search.svelte";

</script>

<svelte:head>
    <title>Control Center</title>
</svelte:head>

<!-- Search field -->

<div class="flex justify-between items-center mb-16">
   <!-- Search Field -->
    <Search></Search>

    <!-- <div>
        <button class="relative whitespace-nowrap rounded-lg bg-orange px-10 py-3 font-mono text-xl font-black text-black shadow-colored hover:shadow-coloredHover traslate-y-0 hover:translate-y-2 transition-all">1 Botao</button>

    </div> -->
</div>

<div>
    <div class="flex w-full justify-center font-mono">
        <h3 class="font-bold text-2xl">Dashboard</h3>
    </div>
    <div class="flex w-full justify-center mx-16 my-8">
        <p>Welcome to Esad's Digital Wiki and Dashboard. 

            This is your personal area, where you can take notes and save useful information. 
            
            We’ll see if Notion plays along and we can link it here to your workspace.</p>
    </div>
    <div class="mygrid grid grid-cols-7 items-center w-full gap-5 px-5 mx-20 text-myorange font-black">
        <h3>Status</h3>
        <h3>Task</h3>
        <h3>Project</h3>
        <h3>Due Date</h3>
        <h3>Info</h3>
        <h3>View More</h3>
        <h3>New Task</h3>
        

        <!-- <div class="text-black">
            <ThreeDots width={32} height={32}></ThreeDots>
        </div> -->
    </div>
    <div class="mygrid grid grid-cols-7 items-center w-full rounded-xl px-5 gap-5 mx-20 text-black text-l font bg-softgreen">
        <div>1</div>
        <div>backoffice</div>
        <div>bda</div>
        <div>1 Janeiro</div>
        <div>url</div>
        <div class="text-black">
            <button>
                <ThreeDots width={32} height={32}></ThreeDots>
            </button>
        </div>
        <div>
            <button>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            
                <g clip-path="url(#clip0_2087_4384)">
                <path d="M17.997 8.09753H16.0029V16.003H8.09748V17.997H16.0029V25.9025H17.997V17.997H25.9024V16.003H17.997V8.09753Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_2087_4384">
                <rect width="24" height="24" fill="white" transform="translate(0.0294189 17) rotate(-45)"/>
                </clipPath>
                </defs>
                </svg>
            </button>
                
        </div>


    </div>
</div>

<style lang="postcss">
    h3{
        @apply hover:text-black
    }
</style>

