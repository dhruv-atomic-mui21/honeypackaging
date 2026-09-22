/**
 * Image optimisation script — resizes and recompresses public/images/ for web
 *
 * Target display sizes (with 2× density factor):
 *   hero-new-machine:      470×325 displayed → output 940×650 WebP
 *   make-in-india (trust): 84×38 displayed   → output 168×76  WebP
 *   honey-packaging-logo:  44×44 displayed   → output 88×88   WebP
 *   product cards:         260×190 displayed  → output 520×380 WebP
 *     (actual render is ~176×132 on 900px+ but 260×190 declared)
 *
 * Run: node scripts/optimise-images.mjs
 */

import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const imgRoot = resolve(root, 'public/images');

const tasks = [
  // ── Hero (LCP) ──────────────────────────────────────────────────────────
  {
    src: `${imgRoot}/hero-new-machine.jpg`,
    out: `${imgRoot}/hero-new-machine.webp`,
    width: 940,
    height: 650,
    quality: 72,          // more aggressive: saves ~20KB more
  },

  // ── Badges ───────────────────────────────────────────────────────────────
  {
    src: `${imgRoot}/badges/make-in-india.webp`,
    out: `${imgRoot}/badges/make-in-india.webp`,
    width: 156,           // 2× display of 78px
    quality: 75,
  },

  // ── Logo ─────────────────────────────────────────────────────────────────
  {
    src: `${imgRoot}/logo/honey-packaging-logo.webp`,
    out: `${imgRoot}/logo/honey-packaging-logo.webp`,
    width: 88,
    quality: 85,
  },

  // ── Product cards (displayed at 176×132 → 2× = 352×264) ──────────────────
  ...[
    'fully-auto-pallet',
    'web-sealer-shrink',
    'auto-strapping',
    'belt-conveyor',
    'strapping-roll',
    'auto-random-carton',
    'auto-strapping-online',
    'box-wrapping-prestetch',
    'free-roller-conveyor',
    'l-sealer',
    'low-table-strapping',
    'rewinding',
    'ring-stretch',
    'semi-auto-strapping',
    'shrink-tunnel',
    'side-belt-strapping',
    'top-bottom-carton',
  ].map((name) => ({
    src: `${imgRoot}/products/${name}.webp`,
    out: `${imgRoot}/products/${name}.webp`,
    width: 352,           // 2× actual display of 176px
    quality: 78,
  })),
];

let ok = 0;
let skip = 0;
let fail = 0;

for (const { src, out, width, height, quality } of tasks) {
  if (!existsSync(src)) {
    console.warn(`[SKIP] not found: ${src}`);
    skip++;
    continue;
  }

  const outDir = dirname(out);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  try {
    const { statSync, readFileSync, writeFileSync } = await import('fs');
    const beforeBytes = statSync(src).size;
    const beforeKB = Math.round(beforeBytes / 1024);

    // Read into buffer first — fixes Windows UNKNOWN error when sharp opens .webp directly
    const srcBuffer = readFileSync(src);
    const meta = await sharp(srcBuffer).metadata();
    const originalW = meta.width ?? 9999;
    const originalH = meta.height ?? 9999;

    // Only downscale — never upscale
    const targetW = Math.min(width, originalW);
    const targetH = height ? Math.min(height, originalH) : undefined;

    const outputBuffer = await sharp(srcBuffer)
      .resize(targetW, targetH, { fit: 'cover', withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();

    // Write buffer directly — avoids Windows EBUSY caused by rename/unlink on locked .webp files
    writeFileSync(out, outputBuffer);

    const afterKB = Math.round(outputBuffer.length / 1024);
    console.log(
      `[OK]   ${src.replace(imgRoot, '').replace(/\\/g, '/')} — ${originalW}×${originalH} → ${targetW}×${targetH ?? 'auto'} | ${beforeKB} KB → ${afterKB} KB`
    );
    ok++;
  } catch (err) {
    console.error(`[FAIL] ${src}: ${err.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} optimised, ${skip} skipped, ${fail} failed.`);
