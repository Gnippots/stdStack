<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    let open = false;

    const toggleMenu = () => {open = !open}
</script>  

<button class="text-2xl bg-transparent text-slate-100" on:click={toggleMenu}>☰</button>

{#if open}
    <slot/>
{/if}