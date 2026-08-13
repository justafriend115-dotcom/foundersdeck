const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = process.cwd();
const svg = fs.readFileSync(path.join(root, "src", "app", "icon.svg"));
const outDir = path.join(root, "public");
fs.mkdirSync(outDir, { recursive: true });

function icoFrame(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  return { header, png: pngBuffer };
}

async function main() {
  const sizes = [16, 32, 48, 192, 512];
  const frames = [];
  const dirEntries = [];
  let offset = 6 + sizes.length * 16;

  for (const size of sizes) {
    const png = await sharp(svg).resize(size, size).png().toBuffer();
    if (size === 16 || size === 32 || size === 48) {
      const { header, png: frame } = icoFrame(png);
      dirEntries.push({ size, header, png: frame });
    }
    if (size === 16) fs.writeFileSync(path.join(outDir, "favicon-16x16.png"), png);
    if (size === 32) fs.writeFileSync(path.join(outDir, "favicon-32x32.png"), png);
    if (size === 180) {}
    if (size === 192) fs.writeFileSync(path.join(outDir, "favicon-192x192.png"), png);
    if (size === 512) fs.writeFileSync(path.join(outDir, "favicon-512x512.png"), png);
  }

  const apple = await sharp(svg).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(outDir, "apple-touch-icon.png"), apple);

  const count = dirEntries.length;
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(count, 4);
  offset = 6 + count * 16;

  const parts = [icoHeader];
  for (const entry of dirEntries) {
    const e = Buffer.alloc(16);
    e.writeUInt8(entry.size >= 256 ? 0 : entry.size, 0);
    e.writeUInt8(entry.size >= 256 ? 0 : entry.size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(entry.png.length, 8);
    e.writeUInt32LE(offset, 12);
    parts.push(e);
    offset += entry.png.length;
  }
  for (const entry of dirEntries) parts.push(entry.png);

  fs.writeFileSync(path.join(outDir, "favicon.ico"), Buffer.concat(parts));
  console.log("Generated: favicon.ico, favicon-16x16.png, favicon-32x32.png, favicon-192x192.png, favicon-512x512.png, apple-touch-icon.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});