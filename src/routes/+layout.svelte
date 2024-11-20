<svelte:options runes={true} />

<script lang="ts">
    import '../app.scss';
    import '../prism.scss';
    import '../katex.css';

    
    let { children } = $props();
</script>

<svelte:head>
    <script>
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    </script>
</svelte:head>


<div class="">
    {#if children} {@render children()} {/if}
</div>