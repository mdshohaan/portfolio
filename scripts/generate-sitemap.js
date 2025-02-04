import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// List of pages with their respective attributes
const pages = [
	{ loc: 'https://shamscorner.com/', changefreq: 'daily', priority: 1.0 },
	{
		loc: 'https://shamscorner.com/#section-experience',
		changefreq: 'monthly',
		priority: 0.8
	},
	{
		loc: 'https://shamscorner.com/#section-works-i-do',
		changefreq: 'monthly',
		priority: 0.9
	},
	{
		loc: 'https://shamscorner.com/#section-project-showcase',
		changefreq: 'weekly',
		priority: 0.9
	},
	{
		loc: 'https://shamscorner.com/#section-what-others-saying',
		changefreq: 'monthly',
		priority: 0.7
	},
	{
		loc: 'https://shamscorner.com/#section-faqs',
		changefreq: 'yearly',
		priority: 0.7
	},
	{
		loc: 'https://shamscorner.com/#section-lets-get-started',
		changefreq: 'daily',
		priority: 0.9
	}
];

const getCurrentDate = () => {
	const date = new Date();
	return date.toISOString().split('T')[0];
};

const generateSitemap = () => {
	const today = getCurrentDate();
	let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
	xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

	pages.forEach((page) => {
		xml += `    <url>\n`;
		xml += `        <loc>${page.loc}</loc>\n`;
		xml += `        <lastmod>${today}</lastmod>\n`;
		xml += `        <changefreq>${page.changefreq}</changefreq>\n`;
		xml += `        <priority>${page.priority}</priority>\n`;
		xml += `    </url>\n`;
	});

	xml += `</urlset>`;

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const filePath = path.join(__dirname, '../static', 'sitemap.xml');
	fs.writeFileSync(filePath, xml, 'utf8');
	console.log(`Sitemap has been generated and saved to ${filePath}`);
};

generateSitemap();
