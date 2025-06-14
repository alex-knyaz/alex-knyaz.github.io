import { siteConfig } from '$lib/config';
import { get_projects_and_blog_data } from '$lib/utils/markdown';
export const prerender = true;

export async function GET() {
    let data = await get_projects_and_blog_data(true);

    console.log('data:', data);

    let disallowPaths: [] = [];

    // data.projects.forEach(project => {
    //     if (project.hide) {
    //         disallowPaths.push(`Disallow: /${project.url}`);
    //     }
    // });

    // data.blogPosts.forEach(post => {
    //     if (post.hide) {
    //         disallowPaths.push(`Disallow: /${post.url}`);
    //     }
    // });

    const robotsTxt = `User-agent: *
Allow: /
${disallowPaths.join('\n')}

Sitemap: ${siteConfig.baseUrl}sitemap.xml`;

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
