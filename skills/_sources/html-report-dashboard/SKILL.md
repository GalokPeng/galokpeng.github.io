---
name: html-report-dashboard
description: Design, build, or repair standalone HTML reports from data or evidence. Use for HTML报告、数据仪表盘、可视化分析、模型对比、样本下钻、标注复核、Prompt diff, and requests to fix charts, detail drawers, filters, or other report interactions. Do not use for marketing sites or for a text-only analysis with no report deliverable.
---

# HTML Report Dashboard

Design the report around the questions its reader needs to answer. Choose charts and interaction after inspecting the evidence. Deliver offline HTML by default; do not deploy or start a server unless requested.

## Decide before building

1. **Inspect.** Identify the intended decision, reader, unit of analysis, sources, available detail, time span, and comparison groups. Check keys, grain, coverage, duplicates, invalid values, and denominators before aggregation; never silently join by row position or equate missing with zero.
2. **Map questions to evidence.** For each primary question, decide the answer or artifact, why that view fits the data, what exact value or caveat it needs, and whether a reader should drill into records. Use [chart selection](references/chart-catalog.md) when charts are warranted. Standard questions are comparison, trend, composition, distribution, overlap, transition, and relationship; two questions with the same inputs often need different views. Honor requested visuals when the data supports them; explain unsupported geometry or scale and offer a truthful alternative. Do not force charts, dashboards, drawers, or tabs onto a short report.
3. **Choose the path.** Put the conclusion and scope first, then supporting evidence and definitions. For an actionable number, label its click target and decide what it opens before implementing it. If only aggregates exist, show their calculation or source, not fabricated rows. Read [interaction and layout](references/design-and-drilldown.md) before building any drill-down, interactive chart, or record detail.
4. **Build for the data, not for the template.** Use the supplied starter as a working example or adapt an existing report. Change hierarchy, layout and controls to fit the task; do not ship illustrative content. Keep required data local and preserve original text, IDs, and values. Distinguish measured, derived, estimated and unavailable values. Explain the numerator/denominator, population, and uncertainty when they change interpretation.
5. **Prove the result.** Read [acceptance tests](references/acceptance.md), run the static validator, and exercise the actual report in a browser when available. Trace a meaningful number all the way to the expected sample IDs; visual polish or successful script parsing does not prove the data is right. Report limits honestly.

## Additional decision routes

- **Business, operations, data QA, distribution or set analysis:** use the chart selector and, if needed, its [worked cases](references/chart-patterns.md). Choose views per question, not per report category.
- **Model/experiment comparison, annotation, Prompt diff:** read only the relevant sections of the [comparison and review playbook](references/review-report-playbook.md). Keep accuracy, coverage, agreement and tolerance distinct. Add editing, autosave and import/export only in a review workflow. Preserve user data and saved review state during a repair.
- **Existing HTML repair:** reproduce the failure, inspect the selector/data chain and current styling, fix the affected layer, keep unrelated UI and state, and rerun the checks for the changed path.

## Non-negotiable interactions and delivery

- Actionable elements look actionable before hover (label, control styling or link treatment); mouse, keyboard and touch have a path. Definitions work on hover/focus; critical context must be visible without hovering. Do not use native alert/confirm for ordinary navigation or edits.
- Aggregate → evidence is one contract: source scope + filter predicate + matching IDs + count. The chart, exact-value table and drill-down share it. Display active filters, matched count and sampled/unavailable evidence status, and give users a way back to their context.
- If using a Venn diagram to show quantity, scale the filled circle areas and every represented intersection to the same count/weight unit. Verify the geometry; when it cannot represent the data faithfully, use an exact intersection table or UpSet instead. Never substitute equal-size or approximate circles for a quantitative Venn.
- Match the detail surface to the reading task. A narrow panel is for short facts only. Long text or side-by-side comparisons need a wide rail, split view or full-page detail; small screens need a stacked/full-width alternative. Keep a visible close action, sane scroll, focus handling and no clipped evidence.
- An overlay detail drawer closes on a click/tap outside its panel as well as via its close button or Escape. Dismissal preserves filters, drafts, and focus and must not activate the page behind the overlay or misread text selection as a click. This does not apply to an inline/split workspace.
- Use native semantics, responsive layout, and light/dark or the requested design system. Core conclusions and method must survive failed JavaScript. Keep charts legible without color alone; supply exact text or table equivalents.
- Serialize embedded JSON safely, render untrusted content as text, and do not depend on a network connection for a standalone report. Paginate large lists and do not silently truncate raw detail or export.

## Resources

- [Runnable starter: overview → filtered evidence → record](assets/report-template.html)
- [Static HTML validator](references/validate_report.mjs)
- [Optional Playwright regression for the bundled starter](scripts/smoke_starter.mjs)
