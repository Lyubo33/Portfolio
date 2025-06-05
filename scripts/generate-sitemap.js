const {SitemapStream, streamToPromise} = require('sitemap');
const {createWriteStream} = require('fs');
const path = require('path');

const baseUrl = 'https://lyubos-portfolio.vercel.app';
const links = [
  {url: '/', changefreq: 'weekly', priority: 1.0},
  {url: '/#about', changefreq: 'monthly', priority: 0.8},
  {url: '/#skills-education', changefreq: 'monthly', priority: 0.8},
  {url: '/#projects', changefreq: 'monthly', priority: 0.8},
  {url: '/#contacts', changefreq: 'monthly', priority: 0.8},
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({hostname: baseUrl});
  const outputPath = path.join(__dirname, '../dist/sitemap.xml');
  const writeStream = createWriteStream(outputPath);
  sitemapStream.pipe(writeStream);
  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();
  await streamToPromise(sitemapStream);
  console.log(`Sitemap generated at ${outputPath}`);
}

generateSitemap().catch(console.error);