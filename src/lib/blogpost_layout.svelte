<script lang="ts">
    import Metadata from "./Metadata.svelte";
    import type { MetadataBase } from "../routes/+page.server";
    import SwitchThemeButton from "./SwitchThemeButton.svelte";

    type PropTypes = MetadataBase & {
        children: any;
    };

    let props: PropTypes = $props();

</script>

<Metadata {...props} type="blog" />

{#if props.no_blogpost_layout}
    <div>
        {#if props.children}
            {@render props.children()}
        {/if}
    </div>
{:else}
    <div class="m-4">
        <article
            id="article-container"
            class="border md p-4 mx-auto rounded-2xl dark:bg-slate-800 dark:border-slate-700 main-container relative"
        >
            <div class="absolute top-4 right-4"><SwitchThemeButton /></div>
            <div><a href="/" title="go to the homepage">← go back</a></div>
            <div class="prose dark:prose-invert">
                {#if props.children}
                    {@render props.children()}
                {/if}
            </div>
        </article>
    </div>
{/if}

<style>
    .main-container {
        /* also change in src/lib/components/TOC.svelte */
        max-width: 768px;
    }
</style>
