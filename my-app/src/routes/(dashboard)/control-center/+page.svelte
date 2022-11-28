<script>

	import Search from "$lib/components/Search.svelte";

</script>

<svelte:head>
    <title>Control Center</title>
</svelte:head>

<!-- Search field -->

<div class="flex justify-between items-center mb-16">
   <!-- Search Field -->
    <Search></Search>

    <div>
        <button class="relative whitespace-nowrap rounded-lg bg-orange px-10 py-3 font-mono text-xl font-black text-black shadow-colored hover:shadow-coloredHover traslate-y-0 hover:translate-y-2 transition-all">1 Botao</button>

    </div>
</div>