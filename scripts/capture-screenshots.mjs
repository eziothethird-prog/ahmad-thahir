// Capture live-site screenshots for the Prototype section.
// Usage: npx playwright install chromium && node scripts/capture-screenshots.mjs
//
// Add/remove targets here. `slot` must match a project's `slotId` in
// lib/content.ts so components/Prototype.tsx can map it.
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "screenshots");

const TARGETS = [
  { slot: "proj-awmtour", url: "https://awmtour.com" },
  { slot: "proj-liveaboard", url: "https://naturalliveaboard.com" },
  // { slot: "proj-evely", url: "https://..." },  // no public URL yet
];

// 1280x800 = the same 16:10 ratio the Prototype cards use. The cards render
// ~370px wide, so 1280px source is already >3x oversampled — scale 1 keeps it
// sharp while keeping files small.
const VIEWPORT = { width: 1280, height: 800 };

// Hide cookie banners, chat widgets, and other fixed overlays for a clean shot.
const HIDE_OVERLAYS = `
  [class*="cookie" i], [id*="cookie" i], [class*="consent" i], [id*="consent" i],
  [class*="whatsapp" i], [id*="whatsapp" i], [class*="chat-widget" i],
  [class*="livechat" i], [aria-label*="cookie" i] { display: none !important; }
`;

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });

for (const { slot, url } of TARGETS) {
  const page = await ctx.newPage();
  const out = join(OUT_DIR, `${slot}.png`);
  try {
    console.log(`→ ${url}`);
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.addStyleTag({ content: HIDE_OVERLAYS });
    await page.waitForTimeout(2500); // let fonts/hero images settle
    await page.screenshot({ path: out }); // viewport shot (above the fold)
    console.log(`  saved ${out}`);
  } catch (err) {
    console.error(`  FAILED ${url}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("done.");
