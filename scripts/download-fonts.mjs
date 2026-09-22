/**
 * Download Google Fonts woff2 files for self-hosting.
 * Only downloads the latin subset — the site is English-only.
 * Run: node scripts/download-fonts.mjs
 */
import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { get } from 'https';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fontsDir = resolve(__dirname, '../public/fonts');
if (!existsSync(fontsDir)) mkdirSync(fontsDir, { recursive: true });

const fonts = [
  // DM Mono — latin only (weights 400, 500, 600 → but 400 and 500 are what's loaded)
  {
    url: 'https://fonts.gstatic.com/s/dmmono/v16/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2',
    file: 'dm-mono-400.woff2',
  },
  {
    url: 'https://fonts.gstatic.com/s/dmmono/v16/aFTR7PB1QTsUX8KYvumzEYOtbQ.woff2',
    file: 'dm-mono-500.woff2',
  },
  // DM Sans — latin only (weight 400; 500/600/700 share same latin woff2)
  {
    url: 'https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2',
    file: 'dm-sans-400.woff2',
  },
  {
    url: 'https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2',
    file: 'dm-sans-500.woff2',
  },
  {
    url: 'https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2',
    file: 'dm-sans-600.woff2',
  },
  {
    url: 'https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2',
    file: 'dm-sans-700.woff2',
  },
  // Space Grotesk — latin only (weights 500/600/700)
  {
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    file: 'space-grotesk-500.woff2',
  },
  {
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    file: 'space-grotesk-600.woff2',
  },
  {
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    file: 'space-grotesk-700.woff2',
  },
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (existsSync(dest)) { console.log(`[SKIP] ${dest} exists`); return resolve(); }
    const file = createWriteStream(dest);
    get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

// Deduplicate by file dest
const seen = new Set();
for (const { url, file } of fonts) {
  const dest = resolve(fontsDir, file);
  if (seen.has(dest)) continue;
  seen.add(dest);
  try {
    await download(url, dest);
    console.log(`[OK]  ${file}`);
  } catch (e) {
    console.error(`[FAIL] ${file}: ${e.message}`);
  }
}
console.log('Done.');
