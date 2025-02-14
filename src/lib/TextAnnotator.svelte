<svelte:options runes={true} />

<script lang="ts">
    import { onMount } from "svelte";
    import RadioButtonGroup from "./components/RadioButtonGroup.svelte";
    import { browser } from "$app/environment";
    import { downloadSvgElement, copyElementHtml, copyElementAsRichText } from "./utils/clipboard";
    import { measureSvgText, type TextMetrics } from "./utils/svg_utils";

    // Types
    type Annotation = { from: number; to: number; text: string; color: string };
    type StyleConfig = { v: string; h: string; top: string; bottom: string; vt: string };
    type VerticalLinePosition = "start" | "mid" | "end";
    type RenderBackend = "html" | "svg" | "ascii" | "canvas";

    interface Metrics extends TextMetrics {
        ready: boolean;
    }

    // Props with defaults
    let {
        initialText = 'const x = "hello" + 123; ASDF',
        initialAnnotations = [
            { from: 10, to: 16, text: "string", color: "#ff7575" },
            { from: 20, to: 22, text: "number", color: "#75ff75" },
            { from: 18, to: 18, text: "can't add these types", color: "#7575ff" },
        ],
    } = $props<{
        initialText?: string;
        initialAnnotations?: Annotation[];
    }>();

    // State
    let text = $state(initialText);
    let annotations = $state(initialAnnotations);
    let newAnn = $state<Annotation>({ from: 0, to: 0, text: "", color: "#ffffff" });

    // Style state
    let useRoundStyle = $state(false);
    let vertical_line_pos = $state<VerticalLinePosition>("mid");
    let horisontal_pos_style = $state<"start" | "mid" | "end">("start");
    let bg_color = $state("#000000");
    let text_color = $state("#ffffff");
    let renderBackend = $state<RenderBackend>("html");

    // DOM refs
    let svgEl = $state<SVGSVGElement | undefined>();
    let htmlEl = $state<HTMLElement | undefined>();
    let metrics = $state<Metrics>({ lineHeight: 0, charWidth: 0, ready: false });

    // Auto-resize textarea function
    function autoResize(textarea: HTMLTextAreaElement) {
        if (!textarea) return;
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }

    function handleTextareaInput(event: Event) {
        const textarea = event.target as HTMLTextAreaElement;
        autoResize(textarea);
    }

    // Effects
    $effect(() => {
        if (!browser) return;
        document.querySelectorAll("textarea").forEach(autoResize);
    });

    $effect(() => {
        if (svgEl && !metrics.ready) {
            const measured = measureSvgText(svgEl);
            metrics = { ...measured, ready: true };
        }
    });

    // Style configurations
    const STYLE_CONFIGS = {
        mid: { sharp: "│─┬└┤", round: "│─┬╰┤" },
        start: { sharp: "│─┌└┤", round: "│─╭╰┤" },
        end: { sharp: "│─┐└┤", round: "│─╮╰┤" },
    };

    const getStyle = (isRound: boolean, verticalLinePos: VerticalLinePosition): StyleConfig => {
        const config = STYLE_CONFIGS[verticalLinePos];
        const chars = isRound ? config.round : config.sharp;
        return { v: chars[0], h: chars[1], top: chars[2], bottom: chars[3], vt: chars[4] };
    };

    const getVerticalPosition = (ann: Annotation): number => {
        const positions = {
            mid: Math.floor((ann.from + ann.to) / 2),
            start: ann.from,
            end: ann.to,
        };
        return positions[vertical_line_pos];
    };

    const formatColor = (text: string, color: string): string => {
        return `<span style="color: ${color}">${text}</span>`;
    };

    const renderAnnotatedText = () => {
        const style = getStyle(useRoundStyle, vertical_line_pos);
        const underline = Array(text.length).fill(" ");
        // Create a 2D array for annotation lines, initialized with spaces
        const totalLines = annotations.map((a: { text: { split: (arg0: string) => { (): any; new(): any; length: any; }; }; }) => a.text.split("\n").length).reduce((a: any, b: any) => a + b, 0) + 1;
        const charGrid = Array(totalLines)
            .fill(0)
            .map(() => Array(text.length).fill(" "));

        // Sort annotations based on their starting position
        const sortedAnnotations = [...annotations].sort((a, b) => a.from - b.from);

        // todo: ensure that annotations are not overlapping

        for (let ann of sortedAnnotations) {
            for (let i = ann.from; i <= ann.to; i++) {
                underline[i] = formatColor(style.h, ann.color);
            }
            const pos = getVerticalPosition(ann);
            underline[pos] = formatColor(style.top, ann.color);
        }

        // Iterate through sorted annotations to create annotation lines
        let linesSoFar = 0;
        for (let idx = 0; idx < sortedAnnotations.length; idx++) {
            const ann = sortedAnnotations[idx];
            const lineIdx = totalLines - linesSoFar;
            let lines = ann.text.split("\n");
            const pos = getVerticalPosition(ann);
            linesSoFar += lines.length;

            const posY_start = lineIdx - lines.length;
            const posY_end = lineIdx - 1;
            const posY_mid = lineIdx - Math.ceil(lines.length / 2);

            let posY = posY_end;
            if (horisontal_pos_style === "start") {
                posY = posY_start;
            } else if (horisontal_pos_style === "mid") {
                posY = posY_mid;
            }

            for (let i = 0; i < posY; i++) {
                charGrid[i][pos] = formatColor(style.v, ann.color);
            }

            const full_ann_text = style.bottom + style.h;
            charGrid[posY][pos] = formatColor(full_ann_text, ann.color);

            for (let i = 0; i < lines.length; i++) {
                let offset = 2;
                if (posY_start + i === posY) offset = 1;
                const v_line = posY_start + i === posY ? style.vt : style.v;
                charGrid[posY_start + i][pos + offset] = formatColor(v_line + lines[i], ann.color);
            }
        }

        // Join the underline array into a string
        let rendered_underline = underline.join("");
        let text_color_fmt = formatColor(text, text_color);
        // Combine all lines (text, underline, and annotations) into a single string
        return [text_color_fmt, rendered_underline, ...charGrid.map((l) => l.join(""))].join("\n");
    };

    const renderHighlightedText = (annotations: any, text: string) => {
        if (!text) return "";

        // Sort annotations to handle overlaps
        const sortedAnns = [...annotations].sort((a, b) => a.from - b.from);

        let result = "";
        let lastIndex = 0;

        for (const ann of sortedAnns) {
            // Add text before annotation
            result += text.slice(lastIndex, ann.from);

            // Add highlighted text
            const highlightedText = text.slice(ann.from, ann.to + 1);
            result += `<span style="background-color: ${ann.color}40; border-bottom: 2px solid ${ann.color}">${highlightedText}</span>`;

            lastIndex = ann.to + 1;
        }

        // Add remaining text
        result += text.slice(lastIndex);

        return result;
    };

    const handleContentUpdate = (event: Event) => {
        const target = event.target as HTMLElement;
        text = target.innerText;
        // event.preventDefault();
    };

    const getTextOffset = (node: Node, offset: number): number => {
        // Get the root contenteditable container
        const container = document.getElementById("selection-tracking-area");
        if (!container || !node) return 0;

        let totalOffset = 0;

        // Use TreeWalker to get all text nodes in order
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
        let currentNode = walker.nextNode();

        while (currentNode) {
            if (currentNode === node) {
                return totalOffset + offset;
            }
            totalOffset += currentNode.textContent?.length || 0;
            currentNode = walker.nextNode();
        }

        return totalOffset + offset - 1;
    };

    const handleTextSelection = (selection: Selection) => {
        const container = document.getElementById("selection-tracking-area");
        if (!container?.contains(selection.anchorNode)) return;

        const start = getTextOffset(selection.anchorNode, selection.anchorOffset);
        const end = getTextOffset(selection.focusNode, selection.focusOffset);

        newAnn = {
            ...newAnn,
            from: Math.min(start, end),
            to: Math.max(start, end) - (end != start ? 1 : 0),
        };
    };

    onMount(() => {
        const handleSelectionChange = () => {
            const selection = window.getSelection();
            if (selection) handleTextSelection(selection);
        };

        if (!browser) return;
        document.addEventListener("selectionchange", handleSelectionChange);
        return () => document.removeEventListener("selectionchange", handleSelectionChange);
    });

    const renderSvg = () => {
        if (!metrics.ready) return "";

        const { lineHeight, charWidth } = metrics;
        const spacing = lineHeight * 0.6; // Calculate spacing between annotations
        const offset = lineHeight * 0.2; // Calculate offset from baseline for underline
        const scale = 1.1; // Scale factor for line spacing
        const lineSpacing = lineHeight * 0.8; // Line spacing for multiline text
        const annotationSpacing = lineHeight * 0.4; // Additional spacing after each annotation

        const els = [];
        els.push(`
            <text x="0" y="${lineHeight}" fill="${text_color}"
                font-family="monospace" font-size="14px">${text}</text>`);

        const anns = [...annotations].sort((a, b) => b.from - a.from);
        let currentY = lineHeight + offset + spacing;

        for (const [i, a] of anns.entries()) {
            const style_correction = { start: 0, mid: charWidth / 2, end: charWidth };
            const vPos = getVerticalPosition(a) * charWidth + style_correction[vertical_line_pos];

            if (i > 0) currentY += spacing * scale;

            const lines = a.text.split("\n");
            const lineCount = lines.length;
            const totalTextHeight = (lineCount - 1) * lineSpacing;
            const underlineY = lineHeight + offset;

            let path = [];
            if (vertical_line_pos === "mid") {
                path = [
                    `M ${a.from * charWidth} ${underlineY}`,
                    `H ${(a.to + 1) * charWidth}`,
                    `M ${vPos} ${underlineY}`,
                    `V ${currentY - 3}`,
                    useRoundStyle ? `q 0 3 3 3` : `V ${currentY}`,
                    `h ${useRoundStyle ? charWidth - 3 : charWidth}`,
                    `M ${vPos + charWidth} ${currentY - lineSpacing * 0.4}`,
                    `v ${lineCount > 1 ? totalTextHeight + lineSpacing * 0.8 : lineSpacing * 0.8}`,
                ];
            } else {
                // if line position is 'end' draw underline from 'start' to 'end'
                let [draw_start, draw_end] = [a.from * charWidth, (a.to + 1) * charWidth];
                let top_q = `H ${draw_end - 3} q 3 0 3 3`;

                if (vertical_line_pos === "start") {
                    // if line position is 'start' draw underline from 'end' to 'start'
                    [draw_start, draw_end] = [(a.to + 1) * charWidth, a.from * charWidth];
                    top_q = `H ${draw_end + 3} q -3 0 -3 3`;
                }

                path = [
                    `M ${draw_start} ${underlineY}`,
                    useRoundStyle ? top_q : `H ${draw_end}`,
                    useRoundStyle ? `V ${currentY - 3} q 0 3 3 3` : `V ${currentY}`,
                    useRoundStyle ? `h ${charWidth - 3}` : `h ${charWidth}`,
                    `M ${vPos + charWidth} ${currentY - lineSpacing * 0.4}`,
                    `v ${lineCount > 1 ? totalTextHeight + lineSpacing * 0.8 : lineSpacing * 0.8}`,
                ];
            }

            els.push(`<path d="${path.join(" ")}" stroke="${a.color}" fill="none" stroke-width="1"/>`);

            lines.forEach((line: any, lineIdx: number) => {
                const lineY = currentY + lineIdx * lineSpacing;
                els.push(`<text x="${vPos + charWidth + 4}" y="${lineY}"
                    fill="${a.color}" dominant-baseline="middle"
                    font-family="monospace" font-size="14px">${line}</text>`);
            });

            currentY += totalTextHeight + annotationSpacing;
        }

        return els.join("");
    };

    const getViewBox = () => {
        if (!metrics.ready) return "0 0 0 0";

        const { lineHeight, charWidth } = metrics;
        const pad = charWidth;
        const spacing = lineHeight * 0.6;
        const offset = lineHeight * 0.2;
        const lineSpacing = lineHeight * 0.8;

        const annotationWidth = Math.max(
            0,
            ...annotations.map((a: { text: any; from?: number; to?: number; color?: string; }) => {
                const max_text_line_len = Math.max(...a.text.split("\n").map((line: string | any[]) => line.length));
                return getVerticalPosition(a) * charWidth + max_text_line_len * charWidth + pad * 3;
            }),
        );
        const width = Math.max(text.length * charWidth, annotationWidth);

        const baseHeight = lineHeight + offset;
        if (annotations.length === 0) return `-${pad} -${pad} ${width + pad * 2} ${baseHeight + pad * 2}`;

        const totalHeight = annotations.reduce((height: number, ann: Annotation, index: number) => {
            const lineCount = ann.text.split("\n").length;
            return height + (index > 0 ? spacing * 1.1 : spacing) + lineSpacing * (lineCount - 1);
        }, baseHeight + spacing);

        return `-${pad} -${pad} ${width + pad * 2} ${totalHeight + pad * 3}`;
    };

    // Computed values
    let highlightedContent = $derived(renderHighlightedText(annotations, text));
</script>

{#snippet annotationItem(ann: Annotation, idx: number)}
    <div
        class="flex flex-col gap-0.5 bg-gray-700/10 hover:bg-gray-700/20 text-sm dark:bg-gray-700/50 p-1 rounded dark:hover:bg-gray-400/20"
    >
        <div class="flex items-center gap-1">
            <input type="color" bind:value={ann.color} class="w-5 h-5 rounded cursor-pointer" />
            <div class="flex-1 flex items-center gap-1 font-mono text-xs">
                <span class="dark:text-gray-300">{ann.from}-{ann.to}</span>
                <span class="dark:text-gray-400">
                    ({text.slice(ann.from, ann.to + 1)})
                </span>
            </div>
            {#if idx === -1}
                <button on:click={() => annotations.push(newAnn)} class="btn btn-primary">+</button>
            {:else}
                <button on:click={() => annotations.splice(idx, 1)} class="btn btn-danger">×</button>
            {/if}
        </div>
        <textarea
            bind:value={ann.text}
            placeholder="Annotation text"
            on:input={handleTextareaInput}
            class="w-full px-1 py-0.5 mt-1 text-xs border rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 resize-none overflow-hidden leading-4"
            rows="1"
        />
    </div>
{/snippet}

<div class="border border-gray-300 dark:border-gray-600 rounded mb-10">
    <pre class="leading-[1] bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 p-1 m-0 !text-xs">
TODO: 
[ ] canvas render
[ ] multiline vertial line renderer (svg)
[ ] ascii render 
[ ] annotation entry
[ ] make radio button group it's own component.
[ ] no-color mode.
[ ] make mini buttons more distinct
[ ] bckground abaptable button.

</pre>
    <div
        id="selection-tracking-area"
        contenteditable="true"
        class="mt-1 p-2 w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded"
        on:input={handleContentUpdate}
    >
        {text}
    </div>

    <div class="flex gap-2">
        <div class="flex flex-col gap-2 w-3/4">
            <span class="text-sm dark:text-gray-300 mt-6">New Annotation:</span>
            {@render annotationItem(newAnn, -1)}

            <span class="text-sm dark:text-gray-300">Current Annotations:</span>
            <div class="space-y-0.5">
                {#each annotations as ann, idx}{@render annotationItem(ann, idx)}{/each}
            </div>
        </div>

        <!-- col 2 -->
        <div class="flex flex-col gap-2 text-sm mt-6">
            <div class="flex gap-4">
                <label class="dark:text-gray-300">
                    Background: <br />
                    <input type="color" bind:value={bg_color} class="w-8 h-8 rounded cursor-pointer" />
                </label>
                <label class="dark:text-gray-300">
                    Text: <br />
                    <input type="color" bind:value={text_color} class="w-8 h-8 rounded cursor-pointer" />
                </label>
            </div>

            <label class="dark:text-gray-300">
                Style: <br />
                <RadioButtonGroup
                    options={[
                        { value: false, label: "Square" },
                        { value: true, label: "Round" }
                        
                    ]}
                    bind:value={useRoundStyle}
                />
            </label>

            <label class="dark:text-gray-300">
                Line Position: <br />
                <RadioButtonGroup
                    options={[
                        { value: "start", label: "Start" },
                        { value: "mid", label: "Mid" },
                        { value: "end", label: "End" }
                    ]}
                    bind:value={vertical_line_pos}
                />
            </label>

            <label class="dark:text-gray-300">
                Horizontal Position: <br />
                <RadioButtonGroup
                    options={[
                        { value: "start", label: "Start" },
                        { value: "mid", label: "Mid" },
                        { value: "end", label: "End" }
                    ]}
                    bind:value={horisontal_pos_style}
                />
            </label>

            <label class="dark:text-gray-300">
                Render Backend: <br />
                <RadioButtonGroup
                    options={[
                        { value: "html", label: "HTML" },
                        { value: "svg", label: "SVG" },
                        { value: "ascii", label: "ASCII" },
                        { value: "canvas", label: "Canvas" }
                    ]}
                    bind:value={renderBackend}
                />
            </label>
        </div>
    </div>

    <div class="dark:bg-gray-800 rounded" style:background-color={bg_color}>
        {#if renderBackend === "html"}
            <div class="relative">
                <div id="rendered-html-text">
                    <pre
                        bind:this={htmlEl}
                        class="whitespace-pre-wrap break-all"
                        style:color={text_color}
                        style:line-height={1.15}
                        style:background-color={bg_color}>{@html renderAnnotatedText()}</pre>
                </div>
                <div class="flex gap-2 p-2 absolute top-0 right-0">
                    <button
                        class="btn text-gray-200 hover:text-gray-800 dark:hover:text-gray-200"
                        on:click={() => htmlEl && copyElementHtml(htmlEl)}
                    >
                        Copy HTML
                    </button>
                    <button
                        class="btn text-gray-200 hover:text-gray-800 dark:hover:text-gray-200"
                        on:click={() => htmlEl && copyElementAsRichText(htmlEl)}
                    >
                        Copy Rich Text
                    </button>
                </div>
            </div>
        {:else if renderBackend === "svg"}
            <div class="relative">
                <svg bind:this={svgEl} class="w-full" viewBox={getViewBox()} style="font-family: monospace;">
                    {@html renderSvg()}
                </svg>
                <div class="flex gap-2 p-2 absolute top-0 right-0">
                    <button
                        class="btn text-gray-200 hover:text-gray-800 dark:hover:text-gray-200"
                        on:click={() => svgEl && downloadSvgElement(svgEl, "annotation.svg")}
                    >
                        Download SVG
                    </button>
                </div>
            </div>
        {:else if renderBackend === "canvas"}
            <div class="relative">
                <canvas id="rendered-canvas" width={text.length * 10} height={20} />
            </div>
        {/if}
    </div>
</div>

<style>
    .container {
        @apply flex flex-col gap-2;
    }

    pre {
        @apply font-mono text-sm;
        @apply whitespace-pre;
        @apply overflow-x-auto;
    }

    :global(.btn) {
        @apply px-2 py-1 text-sm rounded;
        @apply bg-gray-50 dark:bg-gray-800;
        @apply border border-gray-300 dark:border-gray-700;
        @apply text-gray-700 dark:text-gray-300;
        @apply cursor-pointer select-none;
    }

    :global(.btn-primary) {
        @apply bg-blue-400 text-white;
    }

    :global(.btn-danger) {
        @apply bg-red-400 text-white;
    }

    :global(.btn:hover) {
        @apply bg-gray-100 text-gray-800;
    }
    :global(.dark .btn:hover) {
        @apply bg-gray-700 text-gray-200;
    }
</style>
