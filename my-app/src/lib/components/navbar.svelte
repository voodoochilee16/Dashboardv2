<script lang="ts">
    import {page} from "$app/stores"
	import Close from "$lib/components/Icon/Close.svelte";
	import Hamburger from "$lib/components/Icon/Hamburger.svelte";

    let isNavShowing = false;
</script>

<!-- NavBar mobile -->

<button class="z-navBarToggle fixed right-6 top-6 md:hidden" on:click={() => {isNavShowing = !isNavShowing}}
    class:text-black = {isNavShowing}>
    {#if isNavShowing}
        <Close width={32} height={32}></Close>
    {:else}
        <Hamburger width={32} height={32}></Hamburger>
    {/if}
</button>

<header class="z-navBar transition-transform absolute md:relative -translate-x-full md:translate-x-0 w-full h-screen md:col-span-3 bg-neutralnav text-center"
class:translate-x-0={isNavShowing}
>
    
    <div class="mt-10 mb-10">
        <a href="/"><img src="/images/logo.svg" alt="" class="mx-auto"></a>
    </div>

    <nav>
        <ul class="list-none text-2xl ">
            <li><a class:active={$page.url.pathname === "/control-center"} href="/control-center">Control Center</a></li>
            <li><a class:active={$page.url.pathname === "/wiki"} href="/wiki">Wiki's</a></li>
            <li><a class:active={$page.url.pathname === "/pdb"} href="/pdb">PDB</a></li>
            <li><a class:active={$page.url.pathname === "/dhs"} href="/dhs">Design History Society</a></li>
            <li><a class:active={$page.url.pathname === "/settings"} href="/settings">Settings</a></li>
            <li><a href="#">Log Out</a></li>
        </ul>
    </nav>
</header>

<style lang="postcss">
    nav ul li {
        @apply mb-6 mt-4;
    }

    nav ul li a {
        @apply text-black hover:bg-bluehighlight;
    }

    nav ul li a.active{
        @apply px-6 transition-[padding];
        background: url("/images/right.svg") left top no-repeat,
        url("/images/left.svg") right top no-repeat;
    }

    nav ul li a.active:hover {
        @apply px-9;
    }

</style>