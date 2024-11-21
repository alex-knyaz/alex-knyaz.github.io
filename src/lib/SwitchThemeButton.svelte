<svelte:options runes={true} />

<script lang="ts">
    import { browser } from "$app/environment";

    //todo: store in cookie instead of localStorage, then can be used in SSR
    let localStorage = browser ? window.localStorage : { theme: undefined };
    let switch_theme = (e: MouseEvent | KeyboardEvent) => {
        if (e.type === "mousedown" || (e instanceof KeyboardEvent && (e.key === "Enter" || e.key === " "))) {
            localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("dark");
        }
    };
</script>

<button
    class="ml-auto self-center p-1 text-sm border border-inherit rounded hover:bg-slate-300 dark:hover:bg-slate-700 active:!bg-slate-400 leading-none"
    on:mousedown={switch_theme}
    on:keydown={switch_theme}
    aria-label="Toggle theme"
>
    <i class="bx w-3.5 h-3.5 leading-none {localStorage.theme === 'dark' ? 'bx-sun' : 'bx-moon'}"></i>
</button>
