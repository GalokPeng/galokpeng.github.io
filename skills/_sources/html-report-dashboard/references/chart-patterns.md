# Worked report-design cases

Use these as decision examples, not tab maps. The same headline or data source can lead to a different design if the reader's decision changes.

## Parallel screening rules

Question: “Which forum-quality rejects can the webpage rule recover?”

1. Show the eligibility and retention rate of each rule separately, keeping the denominator and threshold visible. Show score histograms only if inspecting distribution or threshold effects matters.
2. For two rules use an exact 2×2 table, or an area-proportional Venn plus that table if overlap is the story. If the actual geometry cannot be verified (common for three-set circles), drop the circles and use the exact intersection table. For many rules or combinations, use an UpSet matrix. Never infer agreement from two retention rates.
3. “Recovered” is the intersection of *forum rejected* and *web retained*, within the common scored population. If the task is to examine the recovered pool profile, add one radar with the five pool categories as axes and separate curves for relevant cohorts. Give counts/shares with detail links; not scored/unknown is separate.
4. When evidence exists, make “Recovered · View N records” open details prefiltered to these exact IDs. Preserve rule inputs, scores and full record text.

## Model changes

Question: “Did the new version fix mistakes or just move them?”

Use matched-row paired counters for repair and regression. Show source→target counts in a transition matrix; use a flow diagram when the few dominant directions are the story rather than every small cell. Use a radar only if the question is a profile across normalized comparable dimensions. On a selected transition show prior/new labels, reference and exact matching IDs; separate missing labels and out-of-scope rows. If reading long rationales side by side, reserve a wide drawer or dedicated details section; review tools only if requested.

## Trends, score profiles, and tiny reports

- “Where did throughput deteriorate?” One line on the ordered time axis with comparable periods and missing dates shown. A clicked anomaly opens its date/segment slice if event-level evidence exists. If it doesn't, show aggregation and source rather than a record viewer.
- “Do cohorts differ across five bounded quality dimensions?” Use a shared-scale radar with exact table and denominator. If two axes have mixed units or large gaps in coverage, use aligned small multiples instead of making up normalization.
- “Summarize these five aggregate values.” A short conclusion plus a table, source, and caveat is usually enough. Without raw records or separate sections, no dead click targets, empty drawers or unnecessary tabs.
