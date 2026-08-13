/**
 * Patches next/og's bundled asset loader so it works when the project path
 * contains spaces (Windows). next/og loads its font/wasm via
 * `fileURLToPath(join(import.meta.url, ...))`, which breaks with
 * percent-encoded paths. Runs automatically on `npm install`.
 */
const fs = require("node:fs");
const path = require("node:path");

const file = path.join(
  process.cwd(),
  "node_modules",
  "next",
  "dist",
  "compiled",
  "@vercel",
  "og",
  "index.node.js",
);

if (!fs.existsSync(file)) {
  console.log("[patch-og] index.node.js not found, skipping.");
  process.exit(0);
}

const patches = [
  [
    'var fontData = fs.readFileSync(fileURLToPath(join(import.meta.url, "../noto-sans-v27-latin-regular.ttf")));',
    'var fontData = fs.readFileSync(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/noto-sans-v27-latin-regular.ttf"));',
  ],
  [
    'var yoga_wasm = fs.readFileSync(fileURLToPath(join(import.meta.url, "../yoga.wasm")));',
    'var yoga_wasm = fs.readFileSync(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/yoga.wasm"));',
  ],
  [
    'var resvg_wasm = fs.readFileSync(fileURLToPath(join(import.meta.url, "../resvg.wasm")));',
    'var resvg_wasm = fs.readFileSync(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/resvg.wasm"));',
  ],
];

let source = fs.readFileSync(file, "utf8");
let applied = 0;
let already = 0;

for (const [from, to] of patches) {
  if (source.includes(to)) {
    already += 1;
  } else if (source.includes(from)) {
    source = source.replace(from, to);
    applied += 1;
  }
}

if (applied > 0) {
  fs.writeFileSync(file, source);
  console.log(`[patch-og] applied ${applied} patch(es).`);
} else if (already === patches.length) {
  console.log("[patch-og] already patched.");
} else {
  console.warn(
    "[patch-og] warning: expected patterns not found, og images may fail on paths with spaces.",
  );
}

process.exit(0);
