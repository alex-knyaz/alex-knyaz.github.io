<script>
    import Metadata from "$lib/Metadata.svelte";
    import SwitchThemeButton from "../lib/SwitchThemeButton.svelte";

    let { data } = $props();
</script>

<Metadata
    title="Alex site"
    description="Hi. I'm Alex. This is my personal site. Enjoy!"
    type="page"
    slug=""
    tags={[]}
    featuredImage="/alex.png"
    datePublished="2024-11-12"
    dateModified="2024-11-12"
    author="Alex"
    twitterCardType="summary_large_image"
    twitterUsername="alex_knyaz_st"
/>

<main class="p-4">
    <div class="main-container mx-auto">
        <div class="border md p-4 rounded-2xl dark:bg-slate-800 dark:border-slate-700">
            <div class="grid sm:grid-cols-2 grid-cols-1">
                <div>
                    <h1 class="text-3xl flex">
                        Alex site.
                        <SwitchThemeButton />
                    </h1>
                    <p>
                        Hi. I'm Alex. <br />
                        <br />
                        This is my personal site. Enjoy! <br />
                        Contact me:
                    </p>
                    <ul class="list-disc ml-5">
                        <li>
                            GitHub:
                            <a href="https://github.com/alex-knyaz" title="Alex's GitHub Profile"
                                >https://github.com/alex-knyaz</a
                            >
                        </li>
                        <li>
                            Twitter:
                            <a href="https://twitter.com/alex_knyaz_st" title="Alex's Twitter Profile"
                                >https://twitter.com/alex_knyaz_st</a
                            >
                        </li>
                    </ul>
                </div>
                <img
                    class="rounded-2xl w-64 h-[277px] sm:justify-self-end justify-self-center mt-4 sm:mt-0"
                    src="/alex.png"
                    alt="alex"
                    title="Alex's Profile Picture"
                    width="256"
                    height="277"
                />
            </div>
            <div>
                {#if data.projects.length > 0}
                    <h2 class="text-3xl p-4 flex content-start items-center gap-x-1">
                        Projects <i class="bx bx-briefcase"></i>
                    </h2>
                    <div class="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-3">
                        {#each data.projects as project}
                            <a href={project.url?.startsWith('https') ? project.url : `/projects/${project.slug}`} class="block">
                                <div
                                    class="border rounded-2xl dark:bg-slate-800 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-md dark:hover:shadow-slate-700/50"
                                >
                                    <h3 class="text-2xl flex content-start items-center gap-x-1 p-3">
                                        {project.title}
                                    </h3>
                                    {#if project.featuredImage}
                                        <img
                                            src={project.featuredImage}
                                            alt={project.title}
                                            title={project.title}
                                            class="w-full aspect-[2/1] object-fit rounded-xl rounded-t-none"
                                        />
                                    {/if}
                                </div>
                            </a>
                        {/each}
                    </div>
                {/if}

                {#if data.blogPosts.length > 0}
                    <h2 class="text-3xl p-4 flex content-start items-center gap-x-1">
                        Blog <i class="bx bx-book-open"></i>
                    </h2>
                    <div class="grid grid-cols-1 gap-1">
                        {#each data.blogPosts as blogPost}
                            <a href="/blog/{blogPost.slug}" class="flex content-start items-center gap-x-1"
                                >{blogPost.title}</a
                            >
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <!-- Add this somewhere in your template, perhaps in the footer -->
        <div class="text-sm text-gray-500 mt-2">
            <a href="/rss.xml" title="Subscribe to RSS Feed">RSS Feed</a> |
            <a href="/sitemap.xml" title="View Site Map">Sitemap</a> |
            <a href="/robots.txt" title="View Robots.txt">Robots</a>
        </div>
    </div>
</main>

<!-- 
    TODO: [ ] cleanup meta tags, make sure everything is correct and up to spec.
    BUG: [ ] post page: A value for the publisher field is required. + url for author.
    BUG: [ ] The META KEYWORDS tag is not defined ????
    BUG: [ ] Warning! This page doesn't have an Apple Icon.
    TODO: [ ] manifest file/ web worker?

    TODO: [ ] more meta in rss feed (preview images?).
    TODO: [ ] display publish dates on the website.

    TODO: [x] make share (og) image generation script.
    TODO: [x] add deployment workflow.
    TODO: [ ] fix ROOT_DIR everywhere.

    TODO: [ ] Post on how to semantic web, seo, etc.
    TODO: [ ] https://diff.blog/   ?

    TODO: [ ] generate audio version of blog posts.
    TODO: [ ] use ai to make automatic translations of blog posts.

 -->

<style>
    .main-container {
        max-width: 768px;
    }
</style>
