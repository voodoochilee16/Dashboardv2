<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="grid grid-cols-12 gap-x16 bg-neutralbg min-h-screen">
    <Navbar></Navbar>
    <main class="col-span-8 pt-10">
        <slot></slot>
    </main>
</div>

