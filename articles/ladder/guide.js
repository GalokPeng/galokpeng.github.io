'use strict';
const D = JSON.parse(document.getElementById('report-data').textContent),
  EXPS = D.experiments,
  RUNGS = D.rungs,
  COLORS = ['var(--c0)', 'var(--c1)', 'var(--c2)'];
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)],
  esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[c],
    ),
  f = (n, d = 3) => Number(n).toFixed(d),
  signed = (n) => (n >= 0 ? '+' : '') + f(n),
  run = (e, r) => D.runs.find((x) => x.id === e + '.' + r),
  score = (e, r) => run(e, r).final.icl.score;
function table(headers, rows, caption = '') {
  return `<table>${caption ? `<caption>${esc(caption)}</caption>` : ''}<thead><tr>${headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
function put(id, html) {
  document.getElementById(id).innerHTML = html;
}
function save(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch {}
}
function load(k) {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
}
function options(id, values, selected) {
  const el = document.getElementById(id);
  el.innerHTML = values
    .map((v) => `<option value="${esc(v)}">${esc(v)}</option>`)
    .join('');
  el.value = selected;
}

const drawer = $('#data-drawer');
function showDrawer(title, content, trigger) {
  $('#drawer-title').textContent = title;
  $('#drawer-content').innerHTML = content;
  trigger?.focus({ preventScroll: true });
  drawer.showModal();
  $('#drawer-close').focus();
}
$('#drawer-close').addEventListener('click', () => drawer.close());

function pointButton(r, p, label) {
  return `<button class="btn" type="button" data-run="${esc(r.id)}" data-ev="${p.point_id}">${esc(label)}</button>`;
}

function pointDrawer(id, ev, trigger) {
  const r = D.runs.find((item) => item.id === id);
  const p = r?.points.find((item) => item.point_id === Number(ev));
  if (!p) return;
  const rows = [
    ['配方与档位', esc(r.id)],
    ['模拟点编号', p.point_id],
    ['训练进度', `${f(p.fraction * 100, 1)}% / step ${p.step}`],
    ['训练消耗', `${f(p.token_b, 4)}B token`],
    ['评测类型', p.kind.toUpperCase()],
    ['评测阶段', p.is_final ? '最终点' : '中途点'],
  ];
  if (p.kind === 'icl') rows.push(['ICL 综合分', `${f(p.score, 6)} / 100`]);
  const metrics =
    p.kind === 'icl'
      ? table(
          ['能力类', '模拟分数'],
          Object.entries(p.categories).map(([name, value]) => [
            esc(name),
            f(value, 5),
          ]),
        )
      : table(
          ['验证集合', 'BPC', 'BPB', 'val_loss'],
          Object.values(p.ood).map((v) => [
            esc(v.name),
            f(v.bpc, 4),
            f(v.bpb, 4),
            f(v.val_loss, 4),
          ]),
        );
  showDrawer(
    `${r.id} · ${p.kind.toUpperCase()}`,
    table(['字段', '模拟值'], rows) + metrics,
    trigger,
  );
}
function lineChart(host, series, settings = {}) {
  const el = document.getElementById(host),
    W = Math.max(300, el.clientWidth || 520),
    H = 300,
    m = { l: 49, r: 20, t: 28, b: 49 };
  const ps = series
    .flatMap((s) => s.points)
    .filter((p) => Number.isFinite(p.y));
  if (!ps.length) {
    el.innerHTML = '<p class="loading">本范围没有可用数据。</p>';
    return;
  }
  let xmin = settings.xmin ?? Math.min(...ps.map((p) => p.x)),
    xmax = settings.xmax ?? Math.max(...ps.map((p) => p.x));
  let ymin = settings.zero
      ? Math.min(0, ...ps.map((p) => p.y))
      : Math.min(...ps.map((p) => p.y)),
    ymax = Math.max(settings.zero ? 0 : -Infinity, ...ps.map((p) => p.y));
  let span = Math.max(ymax - ymin, settings.minSpan || 0.1);
  if (settings.symmetric) {
    span = Math.max(Math.abs(ymin), Math.abs(ymax), 0.1) * 2;
    ymin = -span / 2;
    ymax = span / 2;
  } else if (settings.zero) {
    ymax += span * 0.15;
    ymin = ymin < 0 ? ymin - span * 0.1 : 0;
  } else {
    ymin -= span * 0.16;
    ymax += span * 0.16;
  }
  if (xmax === xmin) xmax = xmin + 1;
  const X = (x) => m.l + ((x - xmin) / (xmax - xmin)) * (W - m.l - m.r),
    Y = (y) => H - m.b - ((y - ymin) / (ymax - ymin)) * (H - m.t - m.b);
  let svg = `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(settings.title || '折线图')}，精确值见下方表格"><title>${esc(settings.title || '折线图')}</title><desc>三套配方在相同档位或进度的比较。点可用键盘聚焦并打开精确数据。此图无置信区间。</desc>`;
  for (let i = 0; i < 5; i++) {
    const v = ymin + ((ymax - ymin) * i) / 4,
      y = Y(v);
    svg += `<line class="gridline" x1="${m.l}" x2="${W - m.r}" y1="${y}" y2="${y}"/><text x="${m.l - 8}" y="${y + 4}" text-anchor="end">${f(v, settings.digits ?? 1)}</text>`;
  }
  if (ymin < 0 && ymax > 0)
    svg += `<line class="zero" x1="${m.l}" x2="${W - m.r}" y1="${Y(0)}" y2="${Y(0)}"/>`;
  const xticks =
    settings.xticks ||
    [0, 0.25, 0.5, 0.75, 1].map((q) => ({
      v: xmin + (xmax - xmin) * q,
      label: f(xmin + (xmax - xmin) * q, 0),
    }));
  for (const t of xticks)
    svg += `<text x="${X(t.v)}" y="${H - m.b + 20}" text-anchor="middle">${esc(t.label)}</text>`;
  svg += `<text x="${m.l}" y="14">${esc(settings.ylabel || '分数')}</text><text x="${W / 2}" y="${H - 6}" text-anchor="middle">${esc(settings.xlabel || '模型档位')}</text>`;
  series.forEach((s, idx) => {
    const points = s.points.filter((p) => Number.isFinite(p.y));
    let segments = [[]];
    for (const p of points) {
      const seg = segments.at(-1);
      if (settings.maxGap && seg.length && p.x - seg.at(-1).x > settings.maxGap)
        segments.push([]);
      segments.at(-1).push(p);
    }
    for (const seg of segments)
      svg += `<polyline fill="none" stroke="${COLORS[idx]}" stroke-width="2.5" ${idx === 0 ? 'stroke-dasharray="6 4"' : idx === 2 ? 'stroke-dasharray="3 4"' : ''} points="${seg.map((p) => X(p.x) + ',' + Y(p.y)).join(' ')}"/>`;
    for (const p of points) {
      const attrs = p.ev
        ? `data-run="${esc(p.run)}" data-ev="${p.ev}" role="button" tabindex="0" aria-label="${esc(s.name + ' ' + (p.label || '') + ' ' + f(p.y, 4))}，查看数据"`
        : '';
      svg += `<circle class="mark" cx="${X(p.x)}" cy="${Y(p.y)}" r="${p.final ? 5 : 3.7}" fill="${COLORS[idx]}" ${attrs}><title>${esc(s.name + ' · ' + (p.label || '') + ' · ' + f(p.y, 5))}</title></circle>`;
    }
  });
  el.innerHTML = svg + '</svg>';
}
function horizontalBars(host, labels, values, opts = {}) {
  const el = document.getElementById(host),
    W = Math.max(300, el.clientWidth || 500),
    left = Math.min(113, W * 0.3),
    right = 48,
    H = labels.length * 42 + 45;
  const min = Math.min(0, ...values),
    max = Math.max(0, ...values),
    pad = Math.max(max - min, 0.1) * 0.18,
    lo = min < 0 ? min - pad : 0,
    hi = max + pad,
    X = (v) => left + ((v - lo) / (hi - lo)) * (W - left - right);
  let s = `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(opts.title || '贡献分解')}，各项精确数值直接标在图中"><title>${esc(opts.title || '贡献分解')}</title><line class="zero" x1="${X(0)}" x2="${X(0)}" y1="10" y2="${H - 30}"/>`;
  labels.forEach((l, i) => {
    const y = i * 42 + 20,
      v = values[i];
    s += `<text x="${left - 9}" y="${y + 5}" text-anchor="end">${esc(l)}</text><rect x="${Math.min(X(0), X(v))}" y="${y - 7}" width="${Math.max(1, Math.abs(X(v) - X(0)))}" height="18" rx="3" fill="${v >= 0 ? 'var(--c1)' : 'var(--red)'}"/><text class="val" x="${W < 500 ? W - 2 : X(v) + (v >= 0 ? 6 : -6)}" y="${y + 6}" text-anchor="${W < 500 ? 'end' : v >= 0 ? 'start' : 'end'}">${signed(v)}</text>`;
  });
  s += `<text x="${left}" y="${H - 7}">${esc(opts.xlabel || '综合分贡献 / 分')}</text></svg>`;
  el.innerHTML = s;
}

function renderOverview() {
  lineChart(
    'overview-chart',
    EXPS.map((experiment) => ({
      name: experiment,
      points: RUNGS.map((rung, index) => {
        const r = run(experiment, rung);
        return {
          x: index,
          y: r.final.icl.score,
          run: r.id,
          ev: r.final.icl.point_id,
          label: rung,
          final: true,
        };
      }),
    })),
    {
      zero: true,
      title: '五档模拟 ICL 综合分',
      ylabel: 'ICL 综合分 / 100',
      xlabel: '模型档位（各档训练预算不同）',
      xticks: RUNGS.map((rung, index) => ({ v: index, label: rung })),
    },
  );
  const rows = RUNGS.map((rung) => {
    const delta = score('exp1', rung) - score('exp0', rung);
    const cells = EXPS.map((experiment) => {
      const r = run(experiment, rung);
      return pointButton(r, r.final.icl, f(r.final.icl.score));
    });
    return [
      esc(rung),
      ...cells,
      `<strong class="${delta >= 0 ? 'pos' : 'neg'}">${signed(delta)}</strong>`,
    ];
  });
  put(
    'final-score-table',
    table(
      [
        '模型档位',
        'exp0 / 基准',
        'exp1 / 替换',
        'exp2 / 移除 C',
        'exp1 − exp0',
      ],
      rows,
      '各配方使用相同的六类 ICL 能力评分规则。',
    ),
  );
  const deltas = RUNGS.map((rung) => ({
    rung,
    value: score('exp1', rung) - score('exp0', rung),
  }));
  const lowest = deltas.reduce((a, b) => (a.value < b.value ? a : b));
  const gains = deltas.filter((item) => item.value > 0).length;
  put(
    'overview-observation',
    `<strong>先看一个反例。</strong> 在模拟数据中，替换配方在 ${gains} 档上升，${esc(lowest.rung)} 档却下降 ${f(-lowest.value, 2)} 分。汇报时应同时说明上涨和下降的档位。`,
  );
}
const {
  experimental_share: experimentalShare,
  buffer,
  removed_source: removedSource,
  checkpoints_per_run: checkpointsPerRun,
} = D.design;
const percent = (ratio, digits = 0) => f(ratio * 100, digits) + '%';
function renderMixture() {
  $('#fixed-experimental-share').textContent = percent(experimentalShare);
  const background = percent(1 - experimentalShare);
  put(
    'language-stacks',
    EXPS.map((experiment) => {
      const { en, zh } = run(experiment, RUNGS[0]).language;
      return `<div class="mix-row"><strong>${esc(experiment)}</strong>
      <div class="stack" role="img" aria-label="背景${background}，英文语料${percent(en, 2)}，中文语料${percent(zh, 2)}">
        <i style="width:${background};background:var(--line)"></i>
        <i style="width:${percent(en, 6)};background:var(--c1)"></i>
        <i style="width:${percent(zh, 6)};background:var(--c2)"></i>
      </div><span class="mix-label">英文 ${percent(en, 2)}<br>中文 ${percent(zh, 2)}</span></div>`;
    }).join(''),
  );
  const weights = run('exp1', RUNGS[0]).experimental_weights;
  const remaining = run('exp2', RUNGS[0]).experimental_weights;
  const rows = weights.map(({ source, weight }) => [
    esc(D.sources[source].name),
    D.sources[source].pool_tokens_b,
    percent(weight, 3),
    percent(weight / experimentalShare, 2),
    source === removedSource
      ? '移除'
      : percent(remaining.find((item) => item.source === source).weight, 3),
  ]);
  put(
    'source-weight-table',
    table(
      [
        '模拟来源',
        '模拟池 / B token',
        '占全部训练 token',
        '占实验语料',
        'exp2 中占全部训练',
      ],
      rows,
    ),
  );
  renderBudget();
}
function renderBudget() {
  const r = run('exp1', $('#budget-rung').value);
  const ratio = Number($('#experimental-range').value) / 100;
  const total = r.params.tokens_b * ratio;
  $('#experimental-output').textContent = percent(ratio);
  const rows = r.experimental_weights.map(({ source, weight }) => [
    esc(D.sources[source].name),
    f((total * weight) / experimentalShare, 4),
  ]);
  put(
    'budget-result',
    `<div class="callout-number">${f(total, 3)}B token</div>
    <p class="small">${f(r.params.tokens_b, 3)}B × ${percent(ratio)} 实验语料。计入 ${buffer} 倍备数余量后，约需准备 <strong>${f(total * buffer, 3)}B token</strong>。</p>` +
      table(['模拟来源', '预计消费 / B token'], rows),
  );
}
function renderDeltas() {
  const deltas = RUNGS.map((rung) => score('exp1', rung) - score('exp0', rung));
  horizontalBars('delta-chart', RUNGS, deltas, {
    title: '替换配方相对基准的模拟 ICL 分差',
    xlabel: 'exp1 − exp0 / 综合分',
  });
  const rows = RUNGS.map((rung, index) => [
    esc(rung),
    signed(deltas[index]),
    signed(score('exp2', rung) - score('exp1', rung)),
    deltas[index] > 0 ? '替换后上升' : '替换后下降',
  ]);
  put(
    'delta-table',
    table(['档位', 'exp1 − exp0', 'exp2 − exp1', '模拟观察'], rows),
  );
}
function renderDetails() {
  const rung = $('#detail-rung').value;
  const base = run('exp0', rung);
  const { tokens_b, lr, seed } = base.params;
  const categories = D.design.icl_categories;
  $('#rung-caption').textContent =
    `模拟配置 · ${f(tokens_b, 2)}B token · lr ${lr} · seed ${seed}`;
  put(
    'capability-table',
    table(
      ['能力类', ...EXPS],
      categories.map((category) => [
        esc(category),
        ...EXPS.map((experiment) =>
          f(run(experiment, rung).final.icl.categories[category]),
        ),
      ]),
    ),
  );
  const contributions = categories.map(
    (category) =>
      (run('exp1', rung).final.icl.categories[category] -
        base.final.icl.categories[category]) /
      categories.length,
  );
  horizontalBars('contribution-chart', categories, contributions, {
    title: rung + ' 各能力类对模拟分差的贡献',
  });
  put(
    'rung-observation',
    `<strong>${esc(rung)} 模拟分差。</strong> 全配方替换 ${signed(score('exp1', rung) - score('exp0', rung))} 分，移除来源 C 并重配权重 ${signed(score('exp2', rung) - score('exp1', rung))} 分。`,
  );
  const metric = $('#ood-metric').value;
  const domains = D.design.ood_domains;
  lineChart(
    'ood-chart',
    EXPS.map((experiment) => {
      const r = run(experiment, rung);
      const p = r.final.ood;
      return {
        name: experiment,
        points: domains.map((domain, index) => ({
          x: index,
          y: p.ood[domain][metric],
          run: r.id,
          ev: p.point_id,
          label: p.ood[domain].name,
          final: true,
        })),
      };
    }),
    {
      zero: true,
      title: rung + ' 模拟 OOD ' + metric,
      ylabel: metric + ' / 越低越好',
      xlabel: '相同验证集合（分类轴）',
      digits: 2,
      xticks: domains.map((domain, index) => ({
        v: index,
        label: base.final.ood.ood[domain].short,
      })),
    },
  );
  put(
    'ood-table',
    table(
      ['验证集合', ...EXPS],
      domains.map((domain) => [
        esc(base.final.ood.ood[domain].name),
        ...EXPS.map((experiment) =>
          f(run(experiment, rung).final.ood.ood[domain][metric], 4),
        ),
      ]),
    ),
  );
}
function renderHistory() {
  const rung = $('#history-rung').value;
  const deltaMode = $('#history-mode').value === 'delta';
  const domain = $('#history-domain').value;
  const runs = EXPS.map((experiment) => run(experiment, rung));
  const base = runs[0];
  const total = base.params.tokens_b;
  const baseByStep = new Map(
    base.points.filter((p) => p.kind === 'icl').map((p) => [p.step, p.score]),
  );
  const chartPoint = (r, p, value) => ({
    x: p.token_b,
    y: value,
    run: r.id,
    ev: p.point_id,
    final: p.is_final,
    label: 'step ' + p.step,
  });
  lineChart(
    'history-icl-chart',
    runs.map((r) => ({
      name: r.experiment,
      points: r.points
        .filter((p) => p.kind === 'icl')
        .map((p) =>
          chartPoint(
            r,
            p,
            deltaMode ? p.score - baseByStep.get(p.step) : p.score,
          ),
        ),
    })),
    {
      zero: !deltaMode,
      symmetric: deltaMode,
      title: rung + ' 模拟 ICL ' + (deltaMode ? '分差' : '综合分'),
      ylabel: deltaMode ? '相对 exp0 / 分' : 'ICL 综合分 / 100',
      xlabel: '消费训练 token / 十亿',
      xmin: 0,
      xmax: total,
      digits: deltaMode ? 2 : 1,
    },
  );
  lineChart(
    'history-ood-chart',
    runs.map((r) => ({
      name: r.experiment,
      points: r.points
        .filter((p) => p.kind === 'ood')
        .map((p) => chartPoint(r, p, p.ood[domain].bpc)),
    })),
    {
      title: rung + ' 模拟 OOD BPC',
      ylabel: 'BPC / 越低越好',
      xlabel: '消费训练 token / 十亿',
      xmin: 0,
      xmax: total,
      digits: 3,
      maxGap: (total / checkpointsPerRun) * 1.5,
    },
  );
  const missing = runs
    .filter(
      (r) =>
        r.points.filter((p) => p.kind === 'ood').length < checkpointsPerRun,
    )
    .map((r) => r.experiment);
  const gapNote = missing.length
    ? esc(missing.join('、')) + ' 的 OOD 曲线包含预设的缺失点。'
    : '';
  put(
    'history-notes',
    `<strong>同档同进度比较。</strong> 三个条件使用相同的训练步数和 token 口径。${gapNote}<br><span class="small">同次训练中的 checkpoint 彼此相关。估计训练方差需要独立训练种子。</span>`,
  );
  const rows = runs.flatMap((r) =>
    r.points.map((p) => [
      esc(r.experiment),
      p.kind.toUpperCase(),
      p.step,
      f(p.token_b, 3),
      p.kind === 'icl' && deltaMode
        ? signed(p.score - baseByStep.get(p.step))
        : f(p.kind === 'icl' ? p.score : p.ood[domain].bpc, 4),
      pointButton(r, p, '查看 ' + p.point_id),
    ]),
  );
  put(
    'history-data-table',
    table(
      [
        '配方',
        '类型',
        'step',
        '消费 / B token',
        deltaMode ? 'ICL 分差 / BPC' : 'ICL 分数 / BPC',
        '详情',
      ],
      rows,
    ),
  );
}

const pointCounts = D.runs
  .flatMap((r) => r.points)
  .reduce(
    (counts, point) => {
      counts[point.kind] += 1;
      return counts;
    },
    { icl: 0, ood: 0 },
  );
const pointCount = pointCounts.icl + pointCounts.ood;

function renderSources() {
  $('#run-count').textContent = D.runs.length + ' 个';
  $('#point-count').textContent = pointCount + ' 个';
  $('#coverage-count').textContent =
    D.design.icl_categories.length + ' + ' + D.design.ood_domains.length;
  $('#source-summary').textContent =
    `示例包含 ${D.runs.length} 个模拟训练单元和 ${pointCount} 个模拟评测点。下载文件包含图表和预算计算所用的数据。`;
  put(
    'source-run-table',
    table(
      [
        '档位 / 配方',
        '序列长度',
        'global batch',
        '训练量',
        '最终 ICL',
        '最终 OOD',
      ],
      D.runs.map((r) => [
        esc(r.id),
        r.params.seq_len,
        r.params.batch,
        f(r.params.tokens_b, 3) + 'B',
        pointButton(r, r.final.icl, '查看分数'),
        pointButton(r, r.final.ood, '查看指标'),
      ]),
    ),
  );
}
function audit(kind, trigger) {
  const texts = {
    runs: [
      '模拟训练如何分组',
      `<p>五档模型各比较三套配方。同档固定模型、训练参数、训练预算和评测口径。</p>` +
        table(
          ['模拟档位', '训练 token / B', '训练步数'],
          RUNGS.map((rung) => {
            const p = run('exp0', rung).params;
            return [esc(rung), f(p.tokens_b, 4), p.iters];
          }),
        ),
    ],
    points: [
      '模拟评测点怎样计数',
      `<p>每次模拟训练最多包含 ${checkpointsPerRun} 个 checkpoint，每个 checkpoint 最多有一条 ICL 和一条 OOD 记录。</p><p>共 ${pointCounts.icl} 个 ICL 点和 ${pointCounts.ood} 个 OOD 点。同一模拟训练里的多个点属于同一条轨迹。</p>`,
    ],
    coverage: [
      '共同评测及计算口径',
      `<p>ICL 综合分是 ${D.design.icl_categories.length} 类模拟分数的算术平均值。所有点统一加权。</p><p>OOD 按 ${D.design.ood_domains.length} 类验证文本分别展示。曲线在预设缺失点断开。</p>`,
    ],
    limits: [
      '从单种子示例能学到什么',
      '<p>单个训练种子能用于演示匹配比较。估计训练重复性需要多个独立种子，估计逐题测量不确定性需要逐题数据。</p><p>移除来源后，语言比例也变化了。要识别单个来源的贡献，需要额外的固定语言比例对照。</p>',
    ],
  };
  const [title, content] = texts[kind];
  showDrawer(title, content, trigger);
}
document.addEventListener('click', (e) => {
  const point = e.target.closest('[data-run][data-ev]');
  if (point) return pointDrawer(point.dataset.run, point.dataset.ev, point);
  const a = e.target.closest('[data-audit]');
  if (a) return audit(a.dataset.audit, a);
  const summary = e.target.closest('details[data-stage] > summary');
  if (summary) {
    e.preventDefault();
    const stage = summary.parentElement;
    const title = summary.querySelector('strong').textContent;
    const label = summary.querySelector('span').textContent.split(' / ')[1];
    const body = [...stage.children]
      .filter((el) => el !== summary)
      .map((el) => el.outerHTML)
      .join('');
    showDrawer(
      title,
      '<span class="badge">' + esc(label) + '</span>' + body,
      summary,
    );
  }
});
document.addEventListener('keydown', (e) => {
  if (
    (e.key === 'Enter' || e.key === ' ') &&
    e.target.matches('svg [data-run]')
  ) {
    e.preventDefault();
    e.target.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  }
});

options('budget-rung', RUNGS, RUNGS.at(-1));
options('detail-rung', RUNGS, RUNGS[2]);
options('history-rung', RUNGS, RUNGS[1]);
$('#experimental-range').value = experimentalShare * 100;
const domainSamples = run('exp0', RUNGS[0]).final.ood.ood;
$('#history-domain').innerHTML = D.design.ood_domains
  .map(
    (domain) =>
      `<option value="${esc(domain)}">${esc(domainSamples[domain].name)}</option>`,
  )
  .join('');
$('#budget-rung').addEventListener('change', renderBudget);
$('#experimental-range').addEventListener('input', renderBudget);
$('#detail-rung').addEventListener('change', renderDetails);
$('#ood-metric').addEventListener('change', renderDetails);
for (const id of ['history-rung', 'history-mode', 'history-domain'])
  document.getElementById(id).addEventListener('change', renderHistory);
for (const input of $$('[data-check]'))
  input.checked =
    load('ladder-guide-simulation-check-' + input.dataset.check) === '1';
$$('[data-check]').forEach((input) =>
  input.addEventListener('change', () =>
    save(
      'ladder-guide-simulation-check-' + input.dataset.check,
      input.checked ? '1' : '0',
    ),
  ),
);
$('#reset-checklist').addEventListener('click', () => {
  $$('[data-check]').forEach((input) => {
    input.checked = false;
    save('ladder-guide-simulation-check-' + input.dataset.check, '0');
  });
});
$$('[data-quiz]').forEach((button) =>
  button.addEventListener('click', () => {
    const { quiz, answer } = button.dataset;
    const correct = answer === 'no';
    const feedback = $('#quiz-' + quiz);
    const reason =
      quiz === 'causal'
        ? '方案同时改变了来源和语言配比，需要等量替换来隔离来源效应。'
        : '同一次训练的多个 checkpoint 共享参数更新轨迹，估计重复性需要独立训练。';
    feedback.textContent = (correct ? '判断成立。' : '再想一步。') + reason;
    feedback.className = 'feedback ' + (correct ? 'pos' : 'neg');
  }),
);

renderSources();

function showDesign() {
  const goal = $('[name="guide-goal"]:checked').value;
  for (const section of $$('[data-design]'))
    section.hidden = section.dataset.design !== goal;
  const matrix = $('#guide-diagonal').checked ? 'diagonal' : 'cross';
  for (const section of $$('[data-matrix]'))
    section.hidden = section.dataset.matrix !== matrix;
}
for (const radio of $$('[name="guide-goal"], #guide-diagonal'))
  radio.addEventListener('change', showDesign);
showDesign();
// The document already contains the default figures and tables. Upgrade each
// experiment section when the reader approaches it, including via a deep link.
const renderSections = new Map([
  [$('#panel-overview'), renderOverview],
  [$('#panel-mixture'), renderMixture],
  [$('#panel-results'), () => { renderDeltas(); renderDetails(); }],
  [$('#panel-progress'), renderHistory],
]);
const nearby = new Set();
const renderedWidths = new Map();
function fitSection(section) {
  const width = section.clientWidth;
  if (width === renderedWidths.get(section)) return;
  renderedWidths.set(section, width);
  renderSections.get(section)();
}
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      nearby.add(entry.target);
      fitSection(entry.target);
    } else {
      nearby.delete(entry.target);
    }
  }
}, {rootMargin: '200px 0px'});
for (const section of renderSections.keys()) observer.observe(section);

new ResizeObserver(() => {
  for (const section of nearby) fitSection(section);
}).observe($('.prose'));
