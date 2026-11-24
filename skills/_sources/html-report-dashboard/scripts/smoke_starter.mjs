#!/usr/bin/env node
// Optional: install Playwright in a local environment or point PLAYWRIGHT_MODULE to its entry file.
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { vennGeometry } from './chart-data.mjs';

const moduleName = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = await import(moduleName.startsWith('/') ? pathToFileURL(moduleName).href : moduleName);
const startURL = new URL('../assets/report-template.html', import.meta.url);
const source = await readFile(startURL,'utf8');
const embeddedGeometry = source.match(/\/\/ BEGIN INLINE VENN GEOMETRY[^\n]*\n([\s\S]*?)\n\s*\/\/ END INLINE VENN GEOMETRY/)?.[1];
assert.equal(embeddedGeometry,vennGeometry.toString(),'Inline geometry must match the reusable helper');
const browser = await chromium.launch({
  headless:true,
  ...(process.env.CHROMIUM_PATH ? { executablePath:process.env.CHROMIUM_PATH } : {}),
});
const errors = [], requests = [];
const screenshotDir = process.env.SCREENSHOT_DIR;
async function newView(width, options = {}) {
  const context = await browser.newContext({ viewport:{width,height:880}, ...options });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  await page.route(/^https?:/, route => { requests.push(route.request().url()); return route.abort(); });
  return page;
}
const active = page => page.evaluate(() => document.activeElement?.id);
const sampleIds = page => page.locator('#rows [data-record-id]').evaluateAll(items => items.map(x => x.dataset.recordId));
const ready = page => page.waitForSelector('body[data-ready=true]', { timeout:3500 });
async function assertNoHorizontalOverflow(page) {
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
}
function assertNear(actual, expected, tolerance) {
  assert(Math.abs(actual - expected) <= tolerance, actual + ' differs from ' + expected);
}
function chartGeometry(page) {
  return page.locator('#venn-diagram').evaluate(svg => {
    const read = label => {
      const c = svg.querySelector('.venn-outline[data-geometry="' + label + '"]');
      return { x:c.cx.baseVal.value, y:c.cy.baseVal.value, r:c.r.baseVal.value };
    };
    const a = read('a'), b = read('b');
    const abLeft = Math.max(a.x - a.r,b.x - b.r), abRight = Math.min(a.x + a.r,b.x + b.r);
    const bySegment = { a:(a.x - a.r + abLeft) / 2, b:(b.x + b.r + abRight) / 2, both:(abLeft + abRight) / 2 };
    const transform = svg.getScreenCTM();
    const screen = Object.fromEntries(Object.entries(bySegment).map(([k,x]) => {
      const { x:sx,y } = new DOMPoint(x,a.y).matrixTransform(transform);
      return [k,{ x:sx,y }];
    }));
    return { a,b, screen, scaleX:transform.a, scaleY:transform.d };
  });
}
try {
  const desktop = await newView(1440, { colorScheme:'light' });
  await desktop.goto(startURL.href);
  await ready(desktop);
  assert.equal(await desktop.locator('[role=tabpanel]:visible').count(), 1);
  await desktop.locator('#tab-overview').focus();
  await desktop.keyboard.press('ArrowRight');
  assert.equal(await active(desktop), 'tab-detail');
  await desktop.keyboard.press('End');
  assert.equal(await active(desktop), 'tab-method');
  await desktop.keyboard.press('Home');
  assert.equal(await active(desktop), 'tab-overview');

  const layout = await chartGeometry(desktop);
  const { a,b } = layout;
  assertNear(layout.scaleX,layout.scaleY,1e-6);
  assertNear(b.r ** 2 / a.r ** 2,9 / 5,1e-5);
  assertNear(a.y,b.y,1e-6);
  const min = Math.max(a.x - a.r,b.x - b.r), max = Math.min(a.x + a.r,b.x + b.r);
  const sampleStep = (max - min) / 12000;
  const half = (c,x) => Math.sqrt(Math.max(0,c.r ** 2 - (x - c.x) ** 2));
  let sharedArea = 0;
  for (let i = 0; i < 12000; i++) {
    const x = min + sampleStep * (i + .5);
    sharedArea += 2 * sampleStep * Math.min(half(a,x),half(b,x));
  }
  const one = Math.PI * a.r ** 2 / 5;
  assertNear(sharedArea / one,3,1e-4);
  assertNear((Math.PI * a.r ** 2 - sharedArea) / one,2,1e-4);
  assertNear((Math.PI * b.r ** 2 - sharedArea) / one,6,1e-4);
  assert.deepEqual(await desktop.locator('#venn-diagram [data-label]').allTextContents(), ['2','3','6']);
  for (const [key,ids] of [['a',['HN-01','HN-02']],['both',['HN-03','HN-04','HN-05']]]) {
    const { x,y } = layout.screen[key];
    await desktop.mouse.click(x,y);
    assert.deepEqual(await sampleIds(desktop), ids);
    await desktop.locator('#return').click();
  }
  const webChart = desktop.locator('.venn-actions [data-segment=b]');
  const webPoint = (await chartGeometry(desktop)).screen.b;
  await desktop.mouse.click(webPoint.x,webPoint.y);
  assert.deepEqual(await sampleIds(desktop), ['HN-06','HN-07','HN-11','HN-12']);
  assert.match(await desktop.locator('#matches').innerText(), /6 \/ 当前范围 6/);
  assert.equal(await active(desktop), 'detail-heading');
  await desktop.locator('#next').click();
  assert.deepEqual(await sampleIds(desktop), ['HN-13','HN-14']);
  await desktop.locator('#prev').click();
  assert.equal(await desktop.locator('#scope').innerText(), '仅网页保留');
  const search = desktop.locator('#search');
  await search.fill('NOT_IN_ANY_ROW');
  assert.deepEqual(await sampleIds(desktop), []);
  assert.match(await desktop.locator('#rows').innerText(), /没有符合条件/);
  await search.fill('HN-06');
  assert.deepEqual(await sampleIds(desktop), ['HN-06']);
  const recordButton = desktop.locator('[data-record-id="HN-06"] button');
  await recordButton.focus();
  await desktop.keyboard.press('Enter');
  await desktop.locator('#drawer[open]').waitFor();
  assert.equal(await active(desktop), 'drawer-title');
  await assertNoHorizontalOverflow(desktop);
  const box = await desktop.locator('#drawer').boundingBox();
  assert(box.width >= 900);
  const raw = await desktop.locator('#drawer-text').textContent();
  assert(raw.includes('</script>'));
  assert(raw.includes('第 34 段'));
  const close = desktop.locator('#drawer-close');
  const topY = (await close.boundingBox()).y;
  const scroll = await desktop.locator('#drawer-body').evaluate(el => { el.scrollTop = el.scrollHeight; return el.scrollTop; });
  assert(scroll > 100);
  assert.equal((await close.boundingBox()).y, topY);
  if (screenshotDir) await desktop.screenshot({ path:join(screenshotDir,'desktop-drawer.png') });
  await desktop.locator('#drawer-body').evaluate(el => { el.scrollTop = 0; });
  const textBox = await desktop.locator('#drawer-text').boundingBox();
  const inside = { x:textBox.x + 35, y:textBox.y + 10 };
  const behindTab = await desktop.locator('#tab-overview').boundingBox();
  const outside = { x:behindTab.x + behindTab.width / 2, y:behindTab.y + behindTab.height / 2 };
  assert(outside.x < box.x, 'Backdrop test must target a real control behind the drawer');
  await desktop.mouse.click(inside.x,inside.y);
  assert.equal(await desktop.locator('#drawer[open]').count(), 1);
  await desktop.mouse.move(inside.x,inside.y);
  await desktop.mouse.down();
  await desktop.mouse.move(outside.x,outside.y, { steps:8 });
  await desktop.mouse.up();
  assert.equal(await desktop.locator('#drawer[open]').count(), 1, 'Dragging out of the drawer must not dismiss');
  await desktop.mouse.click(outside.x,outside.y);
  await desktop.locator('#drawer').waitFor({ state:'hidden' });
  await desktop.waitForFunction(() => document.activeElement?.closest('[data-record-id]')?.dataset.recordId === 'HN-06');
  assert.equal(await desktop.locator('#tab-detail').getAttribute('aria-selected'), 'true', 'Outside click must not activate the underlying tab');
  assert.equal(await search.inputValue(), 'HN-06');
  assert.deepEqual(await sampleIds(desktop), ['HN-06']);
  await recordButton.click();
  await desktop.keyboard.press('Escape');
  await desktop.locator('#drawer').waitFor({ state:'hidden' });
  await desktop.waitForFunction(() => document.activeElement?.closest('[data-record-id]')?.dataset.recordId === 'HN-06');
  assert.equal(await search.inputValue(), 'HN-06');
  await desktop.locator('#return').click();
  assert.equal(await webChart.evaluate(el => el === document.activeElement), true);

  const forumTable = desktop.locator('table [data-segment=a]');
  await forumTable.focus();
  await desktop.keyboard.press('Enter');
  assert.deepEqual(await sampleIds(desktop), ['HN-01','HN-02']);
  assert.equal(await desktop.locator('#scope').innerText(), '仅论坛保留');
  await desktop.locator('#clear').click();
  assert.deepEqual(await sampleIds(desktop), ['HN-01','HN-02','HN-03','HN-04']);
  await desktop.locator('#next').click();
  assert.deepEqual(await sampleIds(desktop), ['HN-05','HN-06','HN-07','HN-08']);
  await desktop.locator('#theme').click();
  assert.equal(await desktop.locator('html').getAttribute('data-theme'), 'dark');
  await desktop.reload();
  await ready(desktop);
  assert.equal(await desktop.locator('html').getAttribute('data-theme'), 'dark');
  if (screenshotDir) await desktop.screenshot({ path:join(screenshotDir,'desktop-overview.png') });

  const mobile = await newView(390, { isMobile:true, hasTouch:true });
  await mobile.goto(startURL.href);
  await ready(mobile);
  await assertNoHorizontalOverflow(mobile);
  await mobile.locator('#venn-diagram').scrollIntoViewIfNeeded();
  const mobileOverlap = (await chartGeometry(mobile)).screen.both;
  await mobile.touchscreen.tap(mobileOverlap.x,mobileOverlap.y);
  assert.deepEqual(await sampleIds(mobile), ['HN-03','HN-04','HN-05']);
  await mobile.locator('#return').tap();
  await mobile.locator('table [data-segment=b]').tap();
  assert.deepEqual(await sampleIds(mobile), ['HN-06','HN-07','HN-11','HN-12']);
  await mobile.locator('[data-record-id="HN-06"] button').tap();
  const mobileBox = await mobile.locator('#drawer').boundingBox();
  assert(mobileBox.width >= 380 && mobileBox.width <= 390);
  assert.equal(await mobile.locator('#drawer-close').isVisible(), true);
  assert.equal(await mobile.locator('#drawer-text').evaluate(el => {
    const { top } = el.getBoundingClientRect();
    return top >= 0 && top <= innerHeight - 40;
  }), true);
  if (screenshotDir) await mobile.screenshot({ path:join(screenshotDir,'mobile-drawer.png') });
  await mobile.locator('#drawer-close').tap();
  await mobile.locator('#drawer').waitFor({ state:'hidden' });
  assert.deepEqual(await sampleIds(mobile), ['HN-06','HN-07','HN-11','HN-12']);

  const tablet = await newView(768, { isMobile:true, hasTouch:true });
  await tablet.goto(startURL.href);
  await ready(tablet);
  await tablet.locator('table [data-segment=a]').tap();
  await tablet.locator('[data-record-id="HN-01"] button').tap();
  const tabletDrawer = await tablet.locator('#drawer').boundingBox();
  assert(tabletDrawer.x > 20);
  await tablet.touchscreen.tap(12,180);
  await tablet.locator('#drawer').waitFor({ state:'hidden' });
  assert.deepEqual(await sampleIds(tablet), ['HN-01','HN-02']);

  const staticPage = await newView(390, { javaScriptEnabled:false });
  await staticPage.goto(startURL.href);
  assert.equal(await staticPage.locator('.takeaway').isVisible(), true);
  assert.equal(await staticPage.locator('#method').isVisible(), true);
  assert.equal(await staticPage.locator('[role=tablist]').isVisible(), false);
  assert.equal(await staticPage.locator('#report-fallback').isVisible(), true);
  assert.equal(await staticPage.locator('#venn-figure').isVisible(), false);
  assert.equal(await staticPage.locator('table [data-total=both]').innerText(), '3');

  const generated = await mkdtemp(join(tmpdir(),'html-skill-fault-'));
  const corrupt = join(generated,'broken-data.html');
  await writeFile(corrupt, source.replace('{"records":[', '{"records":[INVALID,'));
  const fault = await newView(1000);
  await fault.goto(pathToFileURL(corrupt).href);
  assert.equal(await fault.locator('#report-error').isVisible(), true);
  assert.equal(await fault.locator('.takeaway').isVisible(), true);
  assert.equal(await fault.locator('#method').isVisible(), true);
  assert.equal(await fault.locator('[role=tablist]').isVisible(), false);

  const payload = source.match(/<script id="report-data" type="application\/json">([\s\S]*?)<\/script>/)[1];
  const emptySet = JSON.parse(payload);
  for (const record of emptySet.records) if (record.a === true) record.a = false;
  const fallbackPath = join(generated,'empty-set.html');
  let fallbackHTML = source.replace(payload, JSON.stringify(emptySet).replace(/</g,'\\u003c'));
  for (const [key,n] of Object.entries({ a:0,both:0,b:9,neither:4 })) {
    fallbackHTML = fallbackHTML.replace(new RegExp('data-total="' + key + '">\\d+'), 'data-total="' + key + '">' + n);
  }
  await writeFile(fallbackPath,fallbackHTML);
  const fallbackView = await newView(390);
  await fallbackView.goto(pathToFileURL(fallbackPath).href);
  await ready(fallbackView);
  assert.equal(await fallbackView.locator('#venn-figure').isVisible(), false);
  assert.match(await fallbackView.locator('#venn-message').innerText(), /交集表/);
  assert.equal(await fallbackView.locator('table [data-segment=a]').isDisabled(), true);
  await fallbackView.locator('table [data-segment=neither]').click();
  assert.deepEqual(await sampleIds(fallbackView), ['HN-01','HN-02','HN-08','HN-09']);

  assert.deepEqual(errors, []);
  assert.deepEqual(requests, []);
  console.log('PASS: offline SVG areas, exact IDs, table fallback, outside click/tap drawer dismissal, inside drag guard, focus and filter retention, theme and malformed-data fallback.');
} finally {
  await browser.close();
}
