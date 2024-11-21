export const siteConfig = {
    // import.meta.env.BASE_URL || 'https://arachnid-concrete-dory.ngrok-free.app/',
    // i just do not want to deal with the env stuff right now.
    baseUrl: 'https://alex-knyaz.github.io/',
    siteName: 'Alex site',
} as const;

console.log("siteConfig: ", siteConfig);

// Simple defaults object for author '@alex' (case insensitive)
export const AUTHOR_DEFAULTS = {
    twitterUsername: '@alex_knyaz_st',
    author: 'Alexei Knyazev',
    publisher: "Alex's Blog",
    twitterCard: 'summary_large_image' as const,
};


// this being in this file breaks cd and all scripts.


// const PROJECT_NAME = 'alex-knyaz.github.io';
// let rootDirArr = import.meta.url.split('/');
// let last: string | undefined;
// do { last = rootDirArr.pop(); } while (rootDirArr[rootDirArr.length - 1] !== PROJECT_NAME);
// export const ROOT_DIR = rootDirArr.join('/').replace('file://', '');