#!/usr/bin/env node
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

// Each rule has { key, test(record) }; return true, false, or null/undefined.
export function setMembership(records, rules, { idOf = record => record.id } = {}) {
  if (!rules.length || new Set(rules.map(r => r.key)).size !== rules.length ||
      rules.some(r => typeof r.key !== 'string' || !r.key || typeof r.test !== 'function')) {
    throw new TypeError('Rules need distinct nonempty keys and test(record)');
  }
  const seen = new Set(), byMask = new Map(), unscored = [];
  for (const record of records) {
    const id = idOf(record);
    if (typeof id !== 'string' || !id || seen.has(id)) throw new TypeError('Missing or repeated record ID: ' + id);
    seen.add(id);
    const flags = rules.map(rule => rule.test(record));
    if (flags.some(f => f != null && typeof f !== 'boolean')) throw new TypeError('Membership must be true, false, or missing: ' + id);
    if (flags.some(f => f == null)) {
      unscored.push({ id, missing:rules.filter((_, i) => flags[i] == null).map(r => r.key) });
      continue;
    }
    const mask = flags.map(f => f ? '1' : '0').join('');
    if (!byMask.has(mask)) byMask.set(mask, []);
    byMask.get(mask).push(id);
  }
  const regions = [...byMask].map(([mask, ids]) => ({
    mask, included:rules.filter((_, i) => mask[i] === '1').map(r => r.key),
    excluded:rules.filter((_, i) => mask[i] === '0').map(r => r.key), ids, n:ids.length,
  })).sort((a,b) => b.n - a.n || a.mask.localeCompare(b.mask));
  const eligible = seen.size - unscored.length;
  const neither = byMask.get('0'.repeat(rules.length))?.length ?? 0;
  const setCounts = Object.fromEntries(rules.map((rule, i) => [
    rule.key, regions.reduce((sum, row) => sum + (row.mask[i] === '1' ? row.n : 0), 0),
  ]));
  return { keys:rules.map(r => r.key), total:seen.size, eligible, neither, union:eligible - neither,
    setCounts, unscored, regions };
}

// Self-contained for embedding in a file:// report without module loading.
export function vennGeometry({ a, b, intersection }, { width = 360, height = 216, padding = 12, minRadius = 2 } = {}) {
  const unavailable = reason => ({ ok:false, reason });
  if (![a,b,intersection].every(n => Number.isSafeInteger(n) && n >= 0) || intersection > Math.min(a,b)) {
    return unavailable('invalid-counts');
  }
  if (a === 0 || b === 0) return unavailable('empty-set');
  if (![width,height,padding,minRadius].every(Number.isFinite) || padding < 0 || minRadius < 0 ||
      width <= 2 * padding || height <= 2 * padding) return unavailable('invalid-frame');

  function lens(r, s, d) {
    if (d >= r + s) return 0;
    if (d <= Math.abs(r - s)) return Math.PI * Math.min(r,s) ** 2;
    const x = (d + (r - s) * (r + s) / d) / 2;
    function segment(radius, signedOffset) {
      const c = Math.max(-1, Math.min(1, signedOffset / radius));
      return radius ** 2 * (Math.acos(c) - c * Math.sqrt(Math.max(0, 1 - c * c)));
    }
    return segment(r,x) + segment(s,d - x);
  }

  const base = Math.max(a,b);
  const ra = Math.sqrt(a / base), rb = Math.sqrt(b / base);
  let distance, relation;
  if (intersection === 0) {
    distance = ra + rb + .22;
    relation = 'disjoint';
  } else if (intersection === Math.min(a,b)) {
    distance = Math.abs(ra - rb);
    relation = a === b ? 'identical' : 'contained';
  } else {
    let low = Math.abs(ra - rb), high = ra + rb;
    const target = Math.PI * (intersection / base);
    for (let i = 0; i < 72; i++) {
      const mid = (low + high) / 2;
      if (lens(ra,rb,mid) > target) low = mid;
      else high = mid;
    }
    distance = (low + high) / 2;
    relation = 'partial';
  }
  const left = Math.min(-ra, distance - rb), right = Math.max(ra, distance + rb);
  const scale = Math.min((width - 2 * padding) / (right - left),
                         (height - 2 * padding) / (2 * Math.max(ra,rb)));
  const x = (width - (right - left) * scale) / 2 - left * scale;
  const circles = {
    a:{ cx:x, cy:height / 2, r:ra * scale },
    b:{ cx:x + distance * scale, cy:height / 2, r:rb * scale },
  };
  if (Math.min(circles.a.r,circles.b.r) < minRadius) return unavailable('too-small');
  // Validate the actual output coordinates, including exclusive slivers.
  const areaPerCount = Math.PI * scale ** 2 / base;
  const areaA = Math.PI * circles.a.r ** 2, areaB = Math.PI * circles.b.r ** 2;
  const shared = lens(circles.a.r, circles.b.r, Math.abs(circles.b.cx - circles.a.cx));
  const targets = [a,b,intersection,a - intersection,b - intersection];
  const measured = [areaA,areaB,shared,areaA - shared,areaB - shared].map(area => area / areaPerCount);
  const tolerance = n => 1e-6 * Math.max(1,n);
  if (measured.some((n,i) => !Number.isFinite(n) || Math.abs(n - targets[i]) > tolerance(targets[i]))) {
    return unavailable('area-not-verifiable');
  }
  return { ok:true, circles, areaPerCount, relation };
}

// Axes have { key, min, max, reverse? }; series have { key, values:{ [axisKey]: raw } }.
export function radarGeometry(axes, series, { cx = 160, cy = 160, radius = 120 } = {}) {
  if (axes.length < 3 || new Set(axes.map(a => a.key)).size !== axes.length ||
      axes.some(a => typeof a.key !== 'string' || !a.key || !Number.isFinite(a.min) ||
                      !Number.isFinite(a.max) || a.min >= a.max) ||
      ![cx,cy,radius].every(Number.isFinite) || radius <= 0) {
    throw new TypeError('Radar needs at least three distinct axes with finite fixed bounds and positive geometry');
  }
  const at = (i,t) => {
    const angle = 2 * Math.PI * i / axes.length - Math.PI / 2;
    return [cx + Math.cos(angle) * radius * t, cy + Math.sin(angle) * radius * t];
  };
  return {
    axes:axes.map((axis, i) => ({ ...axis, endpoint:at(i,1) })),
    rings:[.25,.5,.75,1].map(t => ({ t, points:axes.map((_,i) => at(i,t)) })),
    series:series.map(row => {
      const points = axes.map((axis, i) => {
        const raw = row.values[axis.key];
        if (raw == null) return { axis:axis.key, raw:null, xy:null };
        if (!Number.isFinite(raw) || raw < axis.min || raw > axis.max) throw new RangeError(row.key + ': out-of-range value for ' + axis.key);
        const fraction = (raw - axis.min) / (axis.max - axis.min);
        const t = axis.reverse ? 1 - fraction : fraction;
        return { axis:axis.key, raw, t, xy:at(i,t) };
      });
      return { key:row.key, complete:points.every(p => p.xy !== null), points };
    }),
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href && process.argv.includes('--self-test')) {
  const data = [
    {id:'x',a:true,b:false,c:true}, {id:'y',a:true,b:true,c:true},
    {id:'z',a:true,b:true,c:false}, {id:'n',a:false,b:false,c:false},
    {id:'u',a:true,b:null,c:true},
  ];
  const rules = ['a','b','c'].map(key => ({key,test:r => r[key]}));
  const m = setMembership(data,rules);
  assert.deepEqual(m.setCounts, {a:3,b:2,c:2});
  assert.equal(m.eligible,4);
  assert.equal(m.union,3);
  assert.equal(m.neither,1);
  assert.equal(m.regions.reduce((sum,r) => sum + r.n, 0) + m.unscored.length,m.total);
  assert.deepEqual(m.regions.find(r => r.mask === '110').ids,['z']);
  assert.deepEqual(m.regions.filter(r => r.included.includes('a') && r.included.includes('b')).flatMap(r => r.ids).sort(),['y','z']);
  assert.deepEqual(m.unscored,[{id:'u',missing:['b']}]);
  assert.throws(() => setMembership([data[0],data[0]],rules));

  const axes = [{key:'stable',min:0,max:100},{key:'errors',min:0,max:10,reverse:true},{key:'coverage',min:0,max:1}];
  const [row] = radarGeometry(axes,[{key:'X',values:{stable:50,errors:2,coverage:null}}]).series;
  assert.deepEqual(row.points[0].xy,[160,100]);
  assert.equal(row.points[1].t,.8);
  assert.equal(row.points[2].xy,null);
  assert.equal(row.complete,false);
  assert.throws(() => radarGeometry(axes,[{key:'X',values:{stable:110}}]));

  function close(left, right, tolerance = 1e-6) {
    assert(Math.abs(left - right) <= tolerance, left + ' differs from ' + right);
  }
  for (const [a,b,overlap,relation] of [
    [100,400,40,'partial'], [400,100,40,'partial'], [32,11,0,'disjoint'],
    [20,100,20,'contained'], [100,20,20,'contained'], [10,10,10,'identical'],
  ]) {
    const g = vennGeometry({a,b,intersection:overlap});
    assert.equal(g.ok,true);
    assert.equal(g.relation,relation);
    const { a:c1,b:c2 } = g.circles;
    close(Math.PI * c1.r ** 2 / g.areaPerCount,a);
    close(Math.PI * c2.r ** 2 / g.areaPerCount,b);
    const d = Math.abs(c1.cx - c2.cx);
    if (relation === 'disjoint') assert(d > c1.r + c2.r);
    if (relation === 'contained' || relation === 'identical') close(d,Math.abs(c1.r - c2.r));
    if (relation === 'partial') {
      // Independent area check by numerical integration of the projected lens.
      const min = Math.max(c1.cx - c1.r,c2.cx - c2.r);
      const max = Math.min(c1.cx + c1.r,c2.cx + c2.r);
      const step = (max - min) / 20000;
      const halfHeight = (c,x) => Math.sqrt(Math.max(0,c.r ** 2 - (x - c.cx) ** 2));
      let shared = 0;
      for (let i = 0; i < 20000; i++) {
        const x = min + step * (i + .5);
        shared += 2 * step * Math.min(halfHeight(c1,x),halfHeight(c2,x));
      }
      close(shared / g.areaPerCount,overlap,1e-3);
    }
  }
  assert.equal(vennGeometry({a:5,b:7,intersection:6}).reason,'invalid-counts');
  assert.equal(vennGeometry({a:0,b:12,intersection:0}).reason,'empty-set');
  assert.equal(vennGeometry({a:1,b:1000000,intersection:0}).reason,'too-small');
  console.log('PASS: set membership, proportional two-set geometry, honest fallback, and radar coordinates.');
}
