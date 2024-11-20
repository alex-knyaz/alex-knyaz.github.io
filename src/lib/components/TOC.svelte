<script lang="ts">
    type Heading = { level: number; text: string; id: string };
    let { headings }: { headings: Heading[] } = $props();

    let currentSection = $state("");

    // Update current section based on scroll position
    function updateCurrentSection() {
        const sections = headings.map((h) => document.getElementById(h.id));
        const scrollPosition = window.scrollY;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const nextSection = sections[i + 1];
            
            // Calculate dynamic offset based on distance to next section
            let offset = 100; // default offset
            if (section && nextSection) {
                const distance = nextSection.offsetTop - section.offsetTop;
                // If sections are close together, use smaller offset
                offset = Math.min(distance * 0.3, offset);
            }

            if (section && section.offsetTop <= scrollPosition + offset) {
                currentSection = headings[i].id;
                break;
            }
        }
    }

    // Set up scroll listener
    $effect(() => {
        updateCurrentSection();
        window.addEventListener("scroll", updateCurrentSection);
        return () => window.removeEventListener("scroll", updateCurrentSection);
    });

    function handlePointerDown(e: PointerEvent) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        const id = href?.slice(1); // Remove the # from href
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update URL without triggering scroll
                history.pushState(null, '', href);
            }
        }
    }
</script>

<nav id="toc" class="text-sm relative ">
    <div >
        <ul class="!list-none !p-0 !m-0">
            {#each headings as { level, text, id }}
                <li class="m-0" style="margin-left: {(level - 1) * 0.5}em">
                    <a 
                        href="#{id}" 
                        class="toc-link {currentSection === id ? 'active' : ''}"
                        onpointerdown={handlePointerDown}
                    >
                        {text}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style lang="postcss">
    :global(#article-container) {
        @apply relative;
    }

    /* Calculate minimum width needed for side-by-side layout */
    /* 768px - also change in src/lib/blogpost_layout.svelte */
    @media (min-width: calc(768px + 2 * (192px + 1rem))) {
        #toc {
            position: fixed;
            top: 5rem;
            width: 12rem; /* 192px */
        }

        #toc > div {
            position: absolute;
            right: calc(100% + 1rem); /* 192px + 32px gap */
            padding-right: 2rem;  /* 32px gap */
            width: 12rem;
        }
    }

    .toc-link {
        @apply transition-none text-neutral-600 no-underline hover:underline font-thin;
    }
    
    .toc-link.active {
        @apply bg-neutral-200 rounded px-1 -ml-1;
    }

    :global(.dark) {
        & .toc-link {
            @apply text-neutral-100;
        }
        & .toc-link.active {
            @apply text-neutral-900 bg-neutral-300;
        }
    }
</style>
