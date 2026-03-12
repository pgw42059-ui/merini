/**
 * copy-routes.mjs
 * 빌드 후 각 라우트에 index.html을 복사해 GitHub Pages에서
 * 404.html 리다이렉트 없이 직접 서빙되도록 합니다.
 * Googlebot이 /guides/mt5-pc 를 요청하면 dist/guides/mt5-pc/index.html 을 받게 됩니다.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "../dist");

const ROUTES = [
  "/basics",
  "/basics/futures",
  "/basics/fx",
  "/basics/leverage",
  "/basics/glossary",
  "/guides",
  "/guides/market-basics",
  "/guides/why-mt5",
  "/guides/before-mt5",
  "/guides/mt5-manual",
  "/guides/mt5-pc",
  "/guides/mt5-mobile",
  "/guides/orders",
  "/guides/indicators",
  "/guides/account-types",
  "/guides/shortcuts",
  "/guides/strategy",
  "/guides/risk",
  "/guides/resources",
  "/guides/roadmap",
  "/ea",
  "/ea/install",
  "/ea/usage-guide",
  "/ea/backtest",
  "/ea/vps",
  "/ea/mql5-market",
  "/brokers",
  "/consult",
  "/about",
  "/terms",
  "/privacy",
];

const html = readFileSync(join(DIST, "index.html"), "utf8");
let count = 0;

for (const route of ROUTES) {
  const dir = join(DIST, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  count++;
}

console.log(`✓ ${count}개 라우트에 index.html 복사 완료`);
