# Report UI and record drill-down

## Design the evidence path before styling

For each important signal, write a short evidence specification. Example: “Recovered (126 / 900 eligible) → Web pass AND forum fail → 126 unique IDs → detail defaults to that filter → click record to inspect text and the two scores.” Determine scopes, exact predicates, unavailable/sampled cases, sort, and return path. Use one function or one evidence registry for aggregates and row membership; if totals and detail come from separate sources, reconcile them and label any differences explicitly.

- Opening a result puts its heading and the start of its evidence in view, with its scope (e.g. “Forum rejected → Web retained”, run/version, date or cohort), active filters, matching count, and clear/back actions. For sampling show “N total; M available in this file” and how M was selected. Do not silently replace selection with all data, or inject sample rows into a population count.
- For large result sets, land on the filtered list or page, then open an individual detail. One obvious click for a single-case finding, at most one extra click from aggregate to chosen row. Keep search, sort/page and scroll position when closing a record. For a cross-tab drill-down, move focus to the new heading and provide a “return to result” action. If the original trigger disappears, focus a predictable replacement, such as the current list heading.
- Put key actions where eyes land: the actual number, row title, or labeled button such as “查看 24 条 →”. Match underline/button styling, cursor, and hover, focus, active states. Never make a generic card look clickable when it isn't. For an interactive SVG graph, provide the same action in a visible HTML legend/adjacent exact-value table; shape-only or hover-only paths are insufficient. Use accessible names that include the specific cohort and count. Provide touch targets around 44px where practical and visible focus.
- Empty results, missing evidence, calculation-only evidence and filtered-out rows are different states. Make zero explicit; when rows cannot be opened, show the scope/limitations and only the controls that work.

## Pick a detail surface by content and task

| Task | Prefer | Starting layout, then measure |
|---|---|---|
| Read a definition or one-line formula | Inline disclosure or hover/focus tooltip with a touch path | No drawer; critical conditions stay visible. |
| Inspect short aggregates or one record | Short side panel or inline expansion | Approximately 440–600px if readable; never apply that cap to long evidence. |
| Read full text and multi-field evidence | Wide drawer or detail page | At desktop, start around 60–75vw, cap around 1040–1200px; test with actual longest strings and field combinations. |
| Compare two verbose versions or edit while reading | Wide working drawer (roughly 75–85vw), true split workspace, or dedicated full-width detail | Favor a detail page/split workspace for repeated work. Stack below the content breakpoint or use labeled comparison tabs; do not compress two long columns into slivers. |
| Mobile or highly zoomed window | Stacked, full-width drawer/page | Use dynamic viewport height, safe spacing, and a persistent close/back action. Prevent body-width overflow; large grids can have a clearly labeled local horizontal scroll. |

Use content-driven widths, not an invariant breakpoint or a one-size panel. Set `min-width: 0` on shrinking grid children; wrap unbroken IDs/URLs/code safely or scope overflow to the relevant widget. Long text can wrap while preserving whitespace; no line clamp or arbitrary height cap in full evidence. Avoid nested vertical scroll for competing areas; keep the heading, close, and frequently used action controls sticky as needed. Use comfortable line lengths even when the drawer is wide.

Choose semantics as deliberately as dimensions:

- **Overlay:** real modal dialog (e.g. `dialog.showModal()`), named by its title, with background inert, close button, Escape, keyboard focus inside, and focus restoration. On open, focus the title for long content or the primary useful control for short details; do not force a distant action. Restore body scroll and invoking focus on close.
- **Outside dismissal for overlay drawers:** click or tap the exposed main-page backdrop to close, without sending the same activation to the underlying controls. Only treat a short pointer gesture that starts and ends outside the dialog as dismissal; inside clicks, text-selection drags, scrollbar drags, and touches that turn into scrolls should not close it. Route all close methods through the same filter, scroll, focus and autosave/draft-preservation logic. For a full-screen drawer with no visible backdrop, keep an obvious close button.
- **Split workspace:** nonmodal, no background-blocking backdrop or focus trap; keyboard users can reach both list and detail. Closing removes all hidden controls from tab order; report/filter actions remain usable.
- **Dedicated detail page/panel:** appropriate when reading is the primary job or the drawer would nearly fill the screen anyway. Keep selected item and active view obvious and support returning to the same list state.

Outside dismissal is a convenience, not the only way to close. Avoid stacking drawers/dialogs; use a new record in the same surface and previous/next as appropriate. Tooltips are descriptions, not confirmations; put essential content in a focusable/inline path. See [W3C APG modal dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) and [tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

## Visual system and performance

- Use visible hierarchy (conclusion → supporting figure/table → details/method), consistent type, spacing, and semantic colors. Fit chart labels, decimal numbers and localized long names in both themes; keep color-independent labels and meaningful legends. Use one compact table before several redundant figures, and keep numeric alignment consistent.
- Single document by default. Use tabs only for real sections; do not hide the primary conclusion behind a tab. A top toolbar + evidence rail may suit review; a narrative brief doesn't need it. Use system font and native CSS/SVG for offline artifacts. Don't start a local server for a purely offline request.
- Keep the pre-JS HTML useful: heading, takeaway, scope, and at least a small key result, plus a clear fallback when interactions cannot initialize. Catch module errors with actionable language; report external assets/storage errors without dropping already rendered evidence.
- Inline JSON with safe escaping (especially literal < in script data, U+2028 and U+2029); construct DOM using textContent for untrusted strings. No network fetches, scripts, or remote fonts are needed by the starter. Keep raw fields as data; safely render references, not raw HTML from sources.
- Store the text once per stable ID. For large datasets render only one evidence page/window and the opened raw body. Give matching, shown, and available counts separately when not all are visible; if the report cannot carry full data, declare the method and link the authorized export.
