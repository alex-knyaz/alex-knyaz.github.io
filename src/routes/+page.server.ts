import { get_projects_and_blog_data, processMarkdownFiles, type MetadataBase } from '$lib/utils/markdown';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    return get_projects_and_blog_data();
}) satisfies PageServerLoad;