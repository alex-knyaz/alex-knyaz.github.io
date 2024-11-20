<script lang="ts">
	import type { MetadataBase } from './../routes/+page.server.ts';
    import { siteConfig } from '$lib/config';
    
    type PropTypes = MetadataBase & {
        type?: 'blog' | 'project' | 'page';
    };

    // let __props: PropTypes = $props();

    let {
        title, 
        description, 
        tags = [],
        featuredImage, 
        datePublished,
        dateModified,
        author,
        twitterCardType,
        twitterUsername,
        publisher,
        slug,
        type = 'page'
    }: PropTypes = $props();

    $effect(() => {
        console.log("featuredImage", featuredImage);
    });
    
    const canonicalUrl = (slug ? `${siteConfig.baseUrl}/${type}/${slug}` : siteConfig.baseUrl);

    const getSchemaType = (type: string) => {
        switch(type) {
            case 'blog': return 'BlogPosting';
            case 'project': return 'Project';
            default: return 'WebPage';
        }
    };
</script>

<svelte:head>
    <!-- Basic meta tags -->
    <title>{siteConfig.siteName} | {title}</title>
    <meta name="description" content={description} />
    {#if tags.length > 0}<meta name="keywords" content={tags.join(', ')} />{/if}
    
    <!-- Canonical URL -->
    <link rel="canonical" href={canonicalUrl} />
    
    <!-- OpenGraph tags -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={canonicalUrl} />
    {#if featuredImage}<meta property="og:image" content={featuredImage} />{/if}
    {#if datePublished}<meta property="article:published_time" content={datePublished} />{/if}
    {#if dateModified}<meta property="article:modified_time" content={dateModified} />{/if}
    {#if author}<meta property="article:author" content={author} />{/if}
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content={twitterCardType || 'summary_large_image'} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {#if featuredImage}<meta name="twitter:image" content={featuredImage} />{/if}
    {#if twitterUsername}<meta name="twitter:creator" content={`@${twitterUsername}`} />{/if}
    
    <!-- RSS Feed -->
    <link 
        rel="alternate" 
        type="application/rss+xml" 
        title={`${siteConfig.siteName} RSS Feed`}
        href={`${siteConfig.baseUrl}/rss.xml`}
    />
    
    <!-- Apple mobile web app tags (if you want to enable PWA-like features on iOS) -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content={title} />
    
    <!-- Schema.org JSON-LD -->
    {@html `<script type="application/ld+json">
        ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": getSchemaType(type),
            "headline": title,
            "description": description,
            ...(featuredImage && {
                "image": {
                    "@type": "ImageObject",
                    "url": `${siteConfig.baseUrl}${featuredImage}`
                }
            }),
            ...(datePublished && { "datePublished": datePublished }),
            ...(dateModified && { "dateModified": dateModified }),
            ...(author && {
                "author": {
                    "@type": "Person",
                    "name": author
                }
            }),
            ...(publisher && {
                "publisher": {
                    "@type": "Organization",
                    "name": publisher,
                }
            }),
            "mainEntityOfPage": canonicalUrl,
            ...(tags.length > 0 && { "keywords": tags.join(', ') }),
        })}
    </script>`}
</svelte:head>