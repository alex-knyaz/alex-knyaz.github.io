import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from "rehype-katex-svelte";
import { visit } from 'unist-util-visit';
import { toString as hast_toString } from 'hast-util-to-string';
import slugify from 'slugify';
import yaml from 'yaml';

// diabolical.
import { get_projects_and_blog_data } from './src/lib/utils/markdown';

function createTocPlugin() {
	return function(tree) {
		const headings = [];
		
		visit(tree, 'element', (node) => {
			if (node.tagName.match(/^h[1-6]$/)) {
				const level = parseInt(node.tagName.charAt(1));
				const text = hast_toString(node);
				const id = slugify(text, { lower: true, strict: true });
				
				node.properties = node.properties || {};
				node.properties.id = id;
				
				headings.push({ level, text, id });
			}
		});

		let foundScript = false;
		
		visit(tree, 'raw', (node) => {
			if (node.value.includes('<script') && !node.value.includes('context="module"') && !foundScript) {
				foundScript = true;
				node.value = node.value.replace(
					'<script>',
					'<script>\n\timport TOC_MDSVEX_INTERNAL from "$lib/components/TOC.svelte";'
				);
			}
			
			if (node.value === '<nav id="toc"></nav>') {
				node.value = `<TOC_MDSVEX_INTERNAL headings={${JSON.stringify(headings)}} />`;
			}
		});

		if (!foundScript) {
			visit(tree, 'root', (node) => {
				node.children.unshift({
					type: 'raw',
					value: '<script>\n\timport TOC_MDSVEX_INTERNAL from "$lib/components/TOC.svelte";\n</script>'
				});
			});
		}

		return tree;
	}
}

// function debugRehypePlugin() {
// 	return function(tree) {
// 		let scriptCount = 0;
		
// 		visit(tree, 'raw', (node) => {
// 			if (node.value.includes('<script')) {
// 				scriptCount++;
// 				console.log(`\nScript #${scriptCount}:`);
// 				console.log(node.value);
// 			}
// 		});
		
// 		console.log(`\nTotal script tags found: ${scriptCount}`);
// 		return tree;
// 	}
// }

// function debugRemarkPlugin() {
// 	return function(tree) {
// 		console.log('\nRemark AST:');
// 		console.dir(tree, { depth: null });
// 		return tree;
// 	}
// }

const hackyBlogPlugin = () => {
    return (tree) => {
        let injectedProp = false;
        visit(tree, 'raw', (node) => {
            if (node.value.includes('<script') && !node.value.includes('context="module"') && !injectedProp) {
                node.value = node.value.replace(
                    '<script>',
                    '<script>\n\tlet __props = $props();'
                );
                injectedProp = true;
            } 
			if (node.value.includes('<script') && !node.value.includes('context="module"')) {
				//
				// const { some_new_value, title, description, tags, datePublished, dateModified, author } = metadata;

			}

            // Replace $$props with __props
            node.value = node.value.replace(/\$\$props/g, '__props');

            // Replace deprecated context="module" with module attribute
            node.value = node.value.replace('<script context="module">', '<script module>');
        });

        return tree;
    };
};

const mdsvex_config = mdsvex({
	extensions: ['.md', '.svx'],
	// https://mdsvex.com/docs#layouts
	// layout: {
	// 	blog: './src/lib/blogpost_layout.svelte',
	// 	project: './src/lib/blogpost_layout.svelte'
	// }
	layout: './src/lib/blogpost_layout.svelte',
	remarkPlugins: [
		// debugRemarkPlugin,
		remarkMath,
	],
	rehypePlugins: [
		rehypeKatexSvelte,
		createTocPlugin,
		hackyBlogPlugin,
		// debugRehypePlugin,
	],
});


const m_old = mdsvex_config.markup;
mdsvex_config.markup = async (param) => {
	if (param.filename.endsWith('.md') || param.filename.endsWith('.svx')) {
		const { projects, blogPosts } = await get_projects_and_blog_data();
		const allEntries = [...projects, ...blogPosts];

		const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
		const match = param.content.match(frontmatterRegex);

		if (match) {
			const parts = param.filename.split('/');
			const routeIndex = parts.indexOf('routes');
			if (routeIndex === -1) {
				throw new Error('File must be in routes directory');
			}
			const url = parts.slice(routeIndex + 1, -1).join('/');

			// Find matching entry by comparing with url
			const matchingEntry = allEntries.find(entry => entry.url === url);

			// Debug logging
			console.log('filename:', param.filename);
			console.log('url:', url);
			console.log('all entries:', allEntries.map(entry => ({
				url: entry.url
			})));
			console.log('matchingEntry:', matchingEntry);

			if (matchingEntry) {
				const newFrontmatter = yaml.stringify(matchingEntry);
				param.content = param.content.replace(frontmatterRegex, `---\n${newFrontmatter}---`);
			}
		}
	}

	const result = await m_old(param);
	if (result) {
		result.code = result.code.replaceAll('</script><script>', '');
		// console.log("result:", result.code);
	}
	return result;
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(),
		mdsvex_config
	],
	extensions: ['.svelte', '.md', '.svx'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: undefined,
		// 	precompress: false,
		// 	strict: true
		// })
	}
};

export default config;
