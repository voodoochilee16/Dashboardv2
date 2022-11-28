<script lang="ts">
	import Search from "$lib/components/Icon/Search.svelte";

</script>

<div class="relative flex w-full items-baseline">

    <div class="mr-2 text-black">
        <Search> </Search>
    </div>

    <input type="text" name="search" placeholder="Search by Keyword"
        class="w-72 border-b-2 border-dashed border-b-amber-700 bg-transparent font-mono text-xl text-black outline-none focus:border-b-purple-700 focus:border-solid">

    <button>Search</button>
</div>