import { spawn } from 'bun';
import puppeteer from 'puppeteer';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { siteConfig } from '../src/lib/config';
// import { ROOT_DIR } from '../src/lib/config';
import { get_projects_and_blog_data } from '../src/lib/utils/markdown';

const ROOT_DIR = join(__dirname, '..');

const PORT = 5175;
const SCREENSHOT_PATH = './static/website-preview.png';
const VIEWPORT = {
  width: 1000,
  height: 800,
  deviceScaleFactor: 4 
};
const WAIT_FOR_SERVER = 2000;

function replaceBetweenMarkers(content, marker, newContent) {
  const regex = new RegExp(`<!-- ${marker}:START -->.*<!-- ${marker}:END -->`, 's');
  return content.replace(regex, `<!-- ${marker}:START -->\n${newContent}\n<!-- ${marker}:END -->`);
}

async function generateReadme() {
  console.log('Building project...');
  const build = spawn(['bun', 'run', 'build'], { cwd: ROOT_DIR, stdio: ['inherit', 'inherit', 'inherit']});
  if (await build.exited !== 0) { throw new Error('Build failed'); }
  
  console.log('Starting preview server...');
  const previewServer = spawn(['bun', 'run', 'preview', '--port', PORT.toString()], {
    cwd: ROOT_DIR,
    stdio: ['inherit', 'inherit', 'inherit']
  });
  
  try {
    await new Promise(resolve => setTimeout(resolve, WAIT_FOR_SERVER));
    
    console.log('Taking screenshot...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    await page.setViewport(VIEWPORT);
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0', timeout: 30000 });
    
    await page.screenshot({ path: join(ROOT_DIR, SCREENSHOT_PATH), fullPage: false});
    await browser.close();
    
    console.log('Updating README...');
    let readme = readFileSync(join(ROOT_DIR, 'README.md'), 'utf8');

    // Update sections
    readme = replaceBetweenMarkers(readme, 'WEBSITE-PREVIEW', `![Website Preview](${SCREENSHOT_PATH})`);

    const { blogPosts, projects } = await get_projects_and_blog_data();

    console.log('blogPosts: ', blogPosts);
    console.log('projects: ', projects);

    readme = replaceBetweenMarkers(
      readme,
      'BLOG-POST-LIST',
      blogPosts
        .sort((a, b) => new Date(b.datePublished || '') - new Date(a.datePublished || ''))
        .slice(0, 5)
        .map(post => `- [${post.title}](${siteConfig.baseUrl}/blog/${post.slug}) (${new Date(post.datePublished || '').toLocaleDateString('en-CA')})`)
        .join('\n')
    );

    readme = replaceBetweenMarkers(
      readme,
      'PROJECTS-LIST',
      projects
        .map(project => `- [${project.title}](${project.url || `${siteConfig.baseUrl}/projects/${project.slug}`}) - ${project.description}`)
        .join('\n')
    );

    readme = replaceBetweenMarkers(readme, 'HOMEPAGE-LINK', `[Go to the website](${siteConfig.baseUrl})`);

    writeFileSync(join(ROOT_DIR, 'README.md'), readme);
    console.log('README updated successfully!');
    
  } finally {
    previewServer.kill();
  }
}

generateReadme().catch(error => {
  console.error('Failed:', error);
  process.exit(1);
});
