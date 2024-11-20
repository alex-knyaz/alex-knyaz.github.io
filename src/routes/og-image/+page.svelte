<script lang="ts">
    import { browser } from "$app/environment";
    import { siteConfig } from "$lib/config";
    import { onMount } from "svelte";

    let title = "Default Title",
        description = "Default Description",
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D;

    if (browser) {
        const urlParams = new URLSearchParams(window.location.search);
        title = urlParams.get("title") || title;
        description = urlParams.get("description") || description;
    }

    onMount(() => {
        if (canvas) {
            ctx = canvas.getContext("2d")!;
            initBoids();
            precomputeSimulation();
            drawFinalState();
        }
    });

    interface Boid {
        x: number;
        y: number;
        dx: number;
        dy: number;
    }

    const boids: Boid[] = [],
        n = 100,
        vr = 75,
        cf = 0.005,
        af = 0.05,
        mf = 0.05,
        maxS = 3,
        minS = 2,
        steps = 200;

    function initBoids() {
        for (let i = 0; i < n; i++) {
            boids.push({ 
                x: Math.random() * canvas.width, y: Math.random() * canvas.height,
                dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1,
            });
        }
    }

    function updateBoid(b: Boid) {
        const nearby = boids.filter((o) => o !== b && Math.hypot(b.x - o.x, b.y - o.y) < vr);

        if (nearby.length > 0) {
            let [cx, cy, adx, ady] = [0, 0, 0, 0];
            nearby.forEach((o) => ([cx, cy, adx, ady] = [cx + o.x, cy + o.y, adx + o.dx, ady + o.dy]));
            [cx, cy, adx, ady] = [cx, cy, adx, ady].map((v) => v / nearby.length);
            b.dx += (cx - b.x) * cf + (adx - b.dx) * mf;
            b.dy += (cy - b.y) * cf + (ady - b.dy) * mf;
        }

        boids.forEach((o) => {
            if (o !== b) {
                const d = Math.hypot(b.x - o.x, b.y - o.y);
                if (d < 20) {
                    b.dx += (b.x - o.x) * af;
                    b.dy += (b.y - o.y) * af;
                }
            }
        });

        const s = Math.hypot(b.dx, b.dy);
        if (s > maxS || s < minS) {
            const f = s > maxS ? maxS / s : minS / s;
            b.dx *= f;
            b.dy *= f;
        }

        b.x = (b.x + b.dx + canvas.width) % canvas.width;
        b.y = (b.y + b.dy + canvas.height) % canvas.height;
    }

    function precomputeSimulation() {
        for (let i = 0; i < steps; i++) boids.forEach(updateBoid);
    }

    function drawFinalState() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const g = ctx.createLinearGradient(0, 0, 1200, 630);
        g.addColorStop(0, "#0f172a");
        g.addColorStop(1, "#1e293b");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 1200, 630);

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        boids.forEach((b) => {
            ctx.save();
            ctx.translate(b.x, b.y);
            ctx.rotate(Math.atan2(b.dy, b.dx));
            ctx.beginPath();
            ctx.moveTo(6.6, 0);
            ctx.lineTo(-3.3, 3.3);
            ctx.lineTo(-3.3, -3.3);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        });
    }
</script>

<!-- 
  Using 1200x630 dimensions (standard OG image size)
  This template is customized to match your brand!
-->
<div class="relative w-[1200px] h-[630px] text-white p-20 overflow-hidden">
    <canvas bind:this={canvas} width="1200" height="630" class="absolute top-0 left-0 z-0"></canvas>
    <div class="relative z-10 max-w-[900px]">
        <h1
            class="text-6xl font-bold mb-2 leading-tight bg-gradient-to-br from-white to-[#e0e0e0] bg-clip-text text-transparent"
        >
            {title}
        </h1>
        <p class="text-3xl leading-relaxed text-[#e0e0e0] opacity-90 mt-4">
            {description}
        </p>
    </div>
    <div class="absolute bottom-8 right-8 text-2xl font-semibold text-blue-300">
        {siteConfig.baseUrl.replace("https://", "")}
    </div>
</div>
