<script lang="ts">

export let label: "done" | "pending" | "planning" | "failed" = "planning" ;

</script>

<div 
    class="text-l w-20 rounded-full text-center font-bold capitalize text-green-600 border-myorange border-2"
    class:failed={label==="failed"}
    class:done={label==="done"}
    class:pending={label==="pending"}
    class:planning={label==="planning"}
    >
    {label}
</div>

<style lang="postcss">

    .failed{ 
        @apply border-red-600 text-black

    }

    .done{ 
        @apply border-green-600 text-green-600

    }
    .pending {
        
        @apply border-yellow-100 text-black

    }

    .planning{
        @apply border-blue-500 text-black

    }

</style>