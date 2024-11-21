import * as config from '$lib/config';
import { get_projects_and_blog_data, type MetadataBase } from '$lib/utils/markdown';

export const prerender = true;

export async function GET() {
    const { projects, blogPosts } = await get_projects_and_blog_data();

    // Combine and sort all content by date
    const allContent = [...projects, ...blogPosts]
        .sort((a, b) => new Date(b.datePublished || 0).getTime() - new Date(a.datePublished || 0).getTime());

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>${config.siteConfig.siteName}</title>
    <description>Alex's personal website</description>
    <link>${config.siteConfig.baseUrl}</link>
    <atom:link href="${config.siteConfig.baseUrl}rss.xml" rel="self" type="application/rss+xml"/>
    ${allContent
        .map(
            (post: MetadataBase) => `
            <item>
                <title>${escapeXml(post.title)}</title>
                <description>${escapeXml(post.description)}</description>
                <link>${config.siteConfig.baseUrl}${post.slug}</link>
                <guid isPermaLink="true">${config.siteConfig.baseUrl}${post.slug}</guid>
                ${post.datePublished ? `<pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>` : ''}
            </item>
        `)
        .join('')}
    </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}
