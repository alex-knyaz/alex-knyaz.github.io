export const siteConfig = {
    baseUrl: import.meta.env.BASE_URL || 'https://arachnid-concrete-dory.ngrok-free.app/',
    siteName: 'Alex site',
} as const;

// Simple defaults object for author '@alex' (case insensitive)
export const AUTHOR_DEFAULTS = {
    twitterUsername: '@alex_knyaz_st',
    author: 'Alexei Knyazev',
    publisher: "Alex's Blog",
    twitterCard: 'summary_large_image' as const,
};

const PROJECT_NAME = 'alex-knyaz.github.io';
let rootDirArr = import.meta.url.split('/');
let last: string | undefined;
do { last = rootDirArr.pop(); } while (rootDirArr[rootDirArr.length - 1] !== PROJECT_NAME);
export const ROOT_DIR = rootDirArr.join('/').replace('file://', '');