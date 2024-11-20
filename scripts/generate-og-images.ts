import puppeteer from 'puppeteer';
import { join } from 'path';
import { get_projects_and_blog_data } from '../src/lib/utils/markdown';
import { spawn } from 'bun';
import { mkdir } from 'fs/promises';
import { ROOT_DIR } from '../src/lib/config';

const PORT = 5175;
const WAIT_FOR_SERVER = 2000;

async function generateOGImages() {
    console.log('Building project...');
    // todo this repeats as build in generate-readme.ts
    // consider moving to a shared lib
    const build = spawn(['bun', 'run', 'build'], { cwd: ROOT_DIR, stdio: ['inherit', 'inherit', 'inherit'] });
    if (await build.exited !== 0) { throw new Error('Build failed'); }

    console.log('Starting preview server...');
    const previewServer = spawn(['bun', 'run', 'preview', '--port', PORT.toString()], {
        cwd: ROOT_DIR,
        stdio: ['inherit', 'inherit', 'inherit']
    });

    try {
        await new Promise(resolve => setTimeout(resolve, WAIT_FOR_SERVER));
        // Start a browser
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Set viewport to OG image dimensions
        await page.setViewport({ width: 1200, height: 630 });

        // Get your content metadata
        const { blogPosts, projects } = await get_projects_and_blog_data();

        for (const post of [...blogPosts, ...projects]) {
            console.log('post.featuredImage: ', post.featuredImage);
            if (post.featuredImage == '/default-og.jpg') {
                // Generate URL (same as in your server code)
                const params = new URLSearchParams({ title: post.title, description: post.description });

                // Visit the page (assuming local dev server is running)
                await page.goto(`http://localhost:${PORT}/og-image?${params.toString()}`);

                // Take screenshot
                const ogImagesDir = join(ROOT_DIR, './static/og-images');
                console.log('ogImagesDir: ', ogImagesDir);
                await mkdir(ogImagesDir, { recursive: true });

                const screenshotPath = join(ogImagesDir, `${post.slug}.png`);
                await page.screenshot({ path: screenshotPath, fullPage: false });
            }
        }

        await browser.close();

    } finally {
        await previewServer.kill();
    }
}

generateOGImages().catch(console.error);