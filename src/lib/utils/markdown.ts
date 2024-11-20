import { AUTHOR_DEFAULTS } from "$lib/config";
import Bun from 'bun';
import { glob } from "glob";
import matter from "gray-matter";
import { readFileSync } from 'fs';
import { join } from 'path';
import { ROOT_DIR } from '$lib/config';
import path from 'path';

export interface MetadataBase {
    title: string;
    description: string;
    tags: string[];
    slug: string; // last part of the url
    url: string; // full url (relative to the base url)
    type: 'blog' | 'project';

    /**
     * Featured image URL for social sharing and SEO
     * Recommended specs:
     * - Aspect ratio: 1.91:1
     * - Minimum size: 1200x630 pixels
     * - Maximum size: 2400x1260 pixels
     * - Format: JPG, PNG, or WEBP
     * - Max file size: 8MB
     * 
     * Platform-specific requirements:
     * - Facebook/Instagram: 1200x630px
     * - Twitter: 1200x600px
     * - LinkedIn: 1200x627px
     * - Google: Minimum 1200px wide
     * 
     * Best practices:
     * - Keep important content centered (platforms may crop edges)
     * - Use high contrast for better visibility
     * - Include branding elements when appropriate
     * - Avoid small text (may be unreadable in thumbnails)
     */
    featuredImage?: string;  // URL to the main image representing this content (used for social sharing, cards, and thumbnails)
    datePublished?: string;  // ISO 8601
    dateModified?: string;   // ISO 8601
    author?: string;         // Author's name
    publisher?: string;      // Publisher/site name

    twitterUsername?: string;
    twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';

    hide?: boolean;
}

// Function to process markdown files
export const processMarkdownFiles = async (dir: string) => {
    const files = await glob('**/*.md', { cwd: dir });
    const entries = await Promise.all(
        files.map(async (file) => {
            const filePath = join(dir, file);
            const { data: metadata } = matter(readFileSync(filePath, 'utf8'));
            if (metadata?.hide === true) return null;

            // Apply author defaults if author is '@alex' (case insensitive)
            if (metadata?.author?.toLowerCase() === '@alex') {
                Object.assign(metadata, AUTHOR_DEFAULTS);
            }

            metadata.slug = file.replace(/\/\+page\.md$/, '');
            metadata.url = path.relative(join(ROOT_DIR, 'src', 'routes'), filePath.replace(/\/\+page\.md$/, ''));
            metadata.type = metadata.url.includes('blog') ? 'blog' : 'project';
            
            if (!metadata?.featuredImage) {
                try {
                    const imagePath = `/og-images/${metadata.slug}.png`;
                    // Check if file exists in static folder
                    if (Bun.file(`static${imagePath}`).size) {
                        metadata.featuredImage = imagePath;
                    } else {
                        console.warn(`Warning: OG image not found for ${metadata.slug}, using default`);
                        metadata.featuredImage = '/default-og.jpg';
                    }
                } catch {
                    console.warn(`Warning: Error checking OG image, using default`);
                    metadata.featuredImage = '/default-og.jpg';
                }
            }

            if (!metadata)
            {
                console.log('No meta!')
            }

            return metadata;
        })
    );
    return entries.filter((entry): entry is NonNullable<typeof entry> => entry !== null);
};

export const get_projects_and_blog_data = async () => {
    const projectsDir = join(ROOT_DIR, 'src/routes/projects');
    const blogDir = join(ROOT_DIR, 'src/routes/blog');

    return {
        projects: await processMarkdownFiles(projectsDir),
        blogPosts: await processMarkdownFiles(blogDir)
    };
}