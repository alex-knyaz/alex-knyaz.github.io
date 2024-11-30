import * as config from '$lib/config';
import { get_projects_and_blog_data, type MetadataBase } from '$lib/utils/markdown';

export const prerender = true;

export async function GET() {
    const { projects, blogPosts } = await get_projects_and_blog_data();

    const allPages = [
        { url: '', lastmod: new Date().toISOString() }, // Homepage
        ...projects.map((project: MetadataBase) => ({
            url: `projects/${project.slug}`,
            lastmod: project.dateModified || project.datePublished
        })),
        ...blogPosts.map((post: MetadataBase) => ({
            url: `blog/${post.slug}`,
            lastmod: post.dateModified || post.datePublished
        }))
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.schemaxs.org/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${allPages
        .map(
            (page) => `
        <url>
            <loc>${config.siteConfig.baseUrl}${page.url}</loc>
            ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
        </url>
    `
        )
        .join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
