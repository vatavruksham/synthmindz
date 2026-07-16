/**
 * SynthMindz — Image Download Script
 *
 * Downloads Unsplash images for local hosting.
 * Run: npm run download-images
 */

import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public', 'images');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    filename: 'features/ai-strategy-builder.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    filename: 'features/competitor-intelligence.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
    filename: 'features/editorial-calendar.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    filename: 'features/content-brief-generator.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
    filename: 'features/seo-optimization.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    filename: 'features/performance-analytics.jpg',
  },
];

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = dirname(filepath);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    const file = createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading SynthMindz images...');
  for (const img of images) {
    const filepath = join(PUBLIC_DIR, img.filename);
    console.log(`  → ${img.filename}`);
    await download(img.url, filepath);
  }
  console.log('Done!');
}

main().catch(console.error);
