import { siteConfig } from '$lib/config';

export const prerender = true;

export function GET() {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteConfig.baseUrl}/sitemap.xml`;

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
