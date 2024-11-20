export const siteConfig = {
    baseUrl: import.meta.env.BASE_URL || 'https://arachnid-concrete-dory.ngrok-free.app',
    siteName: 'Alex site',
} as const;

// Simple defaults object for author '@alex' (case insensitive)
export const AUTHOR_DEFAULTS = {
    twitterUsername: '@alex_knyaz_st',
    author: 'Alexei Knyazev',
    publisher: "Alex's Blog",
    twitterCard: 'summary_large_image' as const,
};

let ROOT_DIR: string;

try {
    const join = (await import('path')).join;
    ROOT_DIR = join(__dirname, '..', '..');
    console.log('got ROOT_DIR from __dirname', ROOT_DIR);
} catch {
    try {
        // Fall back to ESM import.meta if __dirname not available
        const join = (await import('path')).join;
        ROOT_DIR = join(new URL(import.meta.url).pathname, '..', '..', '..');
        console.log('got ROOT_DIR from import.meta.url', ROOT_DIR);
        console.log('new URL(import.meta.url).pathname: ', new URL(import.meta.url).pathname);

    } catch {
        console.error('Error getting ROOT_DIR');
    }
}

export { ROOT_DIR };