#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';

const args = process.argv.slice(2);
const file = args.find(arg => !arg.startsWith('--'));
if (!file || args.some(arg => arg.startsWith('--') && arg !== '--strict')) {
  console.error('Usage: node validate_report.mjs <report.html> [--strict]');
  process.exit(2);
}
let html;
try { html = readFileSync(file, 'utf8'); }
catch (error) { console.error('FAIL cannot read report:', error.message); process.exit(1); }
const failures = [], warnings = [], passes = [];
const ok = text => passes.push('OK   ' + text);
const warn = text => warnings.push('WARN ' + text);
const fail = text => failures.push('FAIL ' + text);
const attr = (tag, name) => {
  const m = tag.match(new RegExp('(?:^|\\s)' + name + '\\s*=\\s*(?:"([^"]*)"|\\x27([^\\x27]*)\\x27|([^\\s>]+))', 'i'));
  return m?.[1] ?? m?.[2] ?? m?.[3];
};
const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
const scripts = [...html.matchAll(scriptRe)];
const scriptCount = (html.match(/<script\b[^>]*>/gi) || []).length;
const closeCount = (html.match(/<\/script\s*>/gi) || []).length;
if (scripts.length !== scriptCount || scriptCount !== closeCount) fail('Unbalanced or unescaped script markup');
else ok('Script boundaries: ' + scripts.length);

let executable = 0;
function inspectData(data, label) {
  function visit(value, path) {
    if (Array.isArray(value)) {
      if (/(?:^|\.)(?:detailRows|records|samples|rows|items)$/i.test(path) &&
          value.length > 0 && value.every(x => x && typeof x === 'object' && !Array.isArray(x))) {
        const keys = value.map(row => {
          const id = row.record_id ?? row.id ?? row.key;
          return id == null || id === '' ? null :
            JSON.stringify([String(row.dataset_id ?? row.datasetId ?? ''), String(id)]);
        });
        if (keys.every(id => id == null)) warn(path + ' has no recognized record keys; check manually');
        else if (keys.some(id => id == null)) fail(path + ' has partially missing record keys');
        else if (new Set(keys).size !== keys.length) fail(path + ' has duplicate (dataset, record) keys');
        else ok(path + ': ' + keys.length + ' unique record keys');
      }
      return;
    }
    if (value && typeof value === 'object') for (const [key, child] of Object.entries(value)) visit(child, path + '.' + key);
  }
  visit(data, label);
}
for (const [, attributes, body] of scripts) {
  const type = attr(attributes, 'type')?.toLowerCase();
  if (attr(attributes, 'src')) continue;
  if (type === 'application/json' || type === 'application/ld+json') {
    const label = attr(attributes, 'id') || type;
    try { const data = JSON.parse(body); ok(label + ': valid JSON'); inspectData(data, label); }
    catch (error) { fail(label + ': invalid JSON: ' + error.message); }
    continue;
  }
  if (type && !['text/javascript','application/javascript','module'].includes(type)) continue;
  executable++;
  try {
    if (type === 'module') {
      const proc = spawnSync(process.execPath, ['--input-type=module','--check'], { input:body, encoding:'utf8' });
      if (proc.error || proc.status !== 0) throw new Error(proc.error?.message || (proc.stderr || '').trim());
    } else new vm.Script(body, { filename:file + '#script-' + executable });
    ok('Inline script ' + executable + ': valid syntax');
  } catch (error) { fail('Inline script ' + executable + ': ' + error.message); }
}

const external = new Set();
const addAsset = url => { if (url && !/^(?:#|data:|blob:)/i.test(url.trim())) external.add(url); };
const markup = html.replace(scriptRe, (_, attributes) => '<script' + attributes + '></script>').replace(/<!--[\s\S]*?-->/g, '');
const tags = [...markup.matchAll(/<([a-z][\w:-]*)(?:\s+(?:"[^"]*"|'[^']*'|[^'"<>])*)?>/gi)].map(m => ({ name:m[1].toLowerCase(), tag:m[0] }));
const ids = new Map();
const tabs = [], panels = [];
let tablists = 0;
for (const {name, tag} of tags) {
  const id = attr(tag, 'id'), role = attr(tag, 'role');
  if (id) { if (ids.has(id)) fail('Duplicate HTML id: ' + id); ids.set(id, tag); }
  if (role === 'tablist') tablists++;
  if (role === 'tab') tabs.push(tag);
  if (role === 'tabpanel') panels.push(tag);
  if (['script','img','iframe','audio','video','source','track','embed'].includes(name)) addAsset(attr(tag, 'src'));
  if (name === 'object') addAsset(attr(tag, 'data'));
  if (name === 'link' && /(?:^|\s)(?:stylesheet|preload|modulepreload|icon)(?:\s|$)/i.test(attr(tag, 'rel') || '')) addAsset(attr(tag, 'href'));
  if (name === 'image' || name === 'use') addAsset(attr(tag, 'href') || attr(tag, 'xlink:href'));
}
for (const css of [...markup.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi)].map(m => m[1])) {
  for (const [, u] of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) addAsset(u);
  for (const [, u] of css.matchAll(/@import\s+['"]([^'"]+)['"]/gi)) addAsset(u);
}
if (external.size) warn('File/network dependencies (verify authorized and available): ' + [...external].join(', '));
else ok('No external assets detected in markup/style blocks; verify requests at runtime');

if (tabs.length) {
  const selected = tabs.filter(tab => attr(tab, 'aria-selected') === 'true').length;
  if (tablists !== 1 ? selected !== tablists || !tablists : selected !== 1) fail('Unexpected initially selected tab count: ' + selected + ' for ' + tablists + ' tablist(s)');
  else ok('Initial tab count matches tab lists');
  const addressed = new Set();
  for (const tab of tabs) {
    const target = attr(tab, 'aria-controls'), targetTag = ids.get(target);
    if (!targetTag || attr(targetTag, 'role') !== 'tabpanel') fail('Tab target missing or not a tabpanel: ' + (target || '(no aria-controls)'));
    else {
      if (addressed.has(target)) fail('Multiple tabs point to one panel: ' + target);
      addressed.add(target);
      if (attr(targetTag, 'aria-labelledby') !== attr(tab, 'id')) warn('Check accessible panel label: ' + target);
    }
  }
  if (addressed.size !== panels.length) warn('Unaddressed tabpanel(s) found');
  else if (addressed.size) ok('Mapped tabpanels: ' + addressed.size);
}
if (executable && !/report-(?:fallback|error)|addEventListener\s*\(\s*["'](?:error|unhandledrejection)["']/i.test(html)) {
  if (/<noscript\b/i.test(markup)) ok('No-JS static fallback marker detected; still exercise initialized and failure states');
  else warn('No recognizable fallback marker; if progressively enhanced, verify the baseline HTML remains usable');
}
console.log([...failures, ...warnings, ...passes].join('\n'));
console.log('\nSummary: ' + failures.length + ' error(s), ' + warnings.length + ' warning(s). Static checks only.');
process.exitCode = failures.length || (args.includes('--strict') && warnings.length) ? 1 : 0;
