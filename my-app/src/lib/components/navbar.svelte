<script lang="ts">
    import {page} from "$app/stores"
</script>

<header class="col-span-3 bg-neutralnav text-center">
    
    <div>
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