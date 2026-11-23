# Presentation Artifact Sessions

For Google Slides, follow the skill’s Google Slides routing; do not use `artifact_session.js`.

Use `artifact_session.js` and the callback's prebound `presentation` for live authoring. The existing writing, design, template, finance, bullet, chart and validation guidance still applies. Read the Reference Map section of `artifact_tool_docs/api/API_DOCS.md` in the installed skill for object APIs; replace standalone construction, import and export with the session calls below.

## Create or open

For a new Spaces presentation, call `create_spaces_artifact`, then pass its returned `page_id` to `connect_spaces_artifact`. Creation returns a Page ID and does not connect a session. For an existing Page, reuse its connected session or call `connect_spaces_artifact` with the same Page ID. For a connected Spaces Page, pass the returned `artifactRef` instead of `artifactType` and `title` in the example below.

Run each cell in `artifact_session.js`. Omit `outputDirectory` and let the session choose its managed output directory. Read the returned paths rather than assuming a workspace location.

```js
var deck = await artifactSession.run(async ({ presentation }) => {
    const slide = presentation.slides.add({ width: 1280, height: 720 });
    const title = slide.shapes.add({
        geometry: "textbox",
        position: { left: 48, top: 56, width: 1100, height: 96 },
        text: { text: "Presentation title" },
    });
    return { titleId: title.toSnapshot().aid };
}, {
    artifactType: "presentation",
    title: "Presentation", // Creation only. Ignored when editing an existing artifact.
});
var titleId = deck.result.titleId;
nodeRepl.write(deck);
```

Finish the first tool call after authoring the cover, then add subsequent batches in separate calls using the same `artifactRef`. Apply the user's design and the skill's cover guidance; the example only shows the session API.

To open a local PPTX, pass `target: "/absolute/path/to/source.pptx"` in the first call's options instead of creating slides. Preserve its dimensions, theme and contents. If the application supplies an existing `artifactRef`, use it directly instead of importing another copy.

## Continue or edit

Reassign `deck` in subsequent calls. Resolve live slide and element objects inside each callback; do not retain them across calls. Pass plain values and reusable configs through `input`. Returned values appear in `deck.result`.

```js
deck = await artifactSession.run(async ({ presentation, input }) => {
    presentation.resolve(input.titleId).text = input.title;
}, {
    artifactRef: deck.artifactRef,
    input: { titleId, title: "Updated presentation title" },
});
nodeRepl.write(deck);
```

Use typed IDs returned by inspection, such as `sl/abc12345` or `sh/def67890`, with `presentation.resolve`. A slide's raw `.id` is not a resolve ID. For a known unchanged slide order, use zero-based `presentation.slides.getItem(index)`.

Optionally, saved `.mjs` files may export a reusable callback: import its absolute path in `artifact_session.js`, then pass that function and explicit `input` to `artifactSession.run`. Execute the callback in the session with its prebound `presentation`; do not run a local deck builder for the live artifact. After editing the file, re-import the same path in a new cell. Plain configs must be redefined after a REPL reset. Follow save-error recovery instructions and retain the recovered `artifactRef`. If a Spaces connection expires, call `connect_spaces_artifact` with the same Page ID and continue using the returned reference.

For bundled helpers such as `makeNativeBulletParagraphs`, load the helper using only the runtime paths in [local implementation](implementation.md), then pass its plain-data result through `input`. This does not require the local builder, draft export, or finalizer workflow. Preserve the requested typography and template fonts. Set the finalizer’s `fontPolicy` only when delivering a local PPTX.

## Inspect and render

For an inline slide preview, declare `let previewBytes` before `artifactSession.run(...)`. After editing the slide inside the callback, capture its PNG with `const preview = await presentation.render({ slide: index })` and `previewBytes = await preview.arrayBuffer()`. When the run returns `status: "succeeded"`, call `await nodeRepl.emitImage(previewBytes)`.

Inside a session callback, inspect content and formatting with JSONPath:

```js
await presentation.inspect({
    select: "$.slides[*].elements[*]",
    include: ["id", "text", "position", "style"],
    fileName: "elements.ndjson",
});
await presentation.render();
```

Read outputs from `deck.files` and `deck.outputDirectory`. Rendering writes `slide-N.png` and matching layout JSON. Open the PNGs and review every slide; use `presentation.render({ slide: [0, 2] })` for changed slides or `{ montage: true }` for an overview. Omit `fileName` for all-slide or array selections; it is supported for a single numeric slide or montage. Use targeted `presentation.help(...)` when a specific API question remains unanswered.

Use local image paths with `slide.images.add({ path: "/absolute/path/to/image.png", ... })` or `image.replace({ path: "/absolute/path/to/image.png" })`.

## Validate and deliver

For a live presentation, apply the task requirements and review checks in [validation and delivery](finalization.md) through the session's rendering and inspection tools. Do not export a validation PPTX or run the local finalizer solely to validate a live deck.

Render and review every slide. Check content coverage, the requested slide count and design, text fit, template fidelity, editable tables and charts, and source data. Apply content or layout repairs to the saved presentation through the same `artifactRef`, then render and inspect the affected slides again. A repair to an exported copy does not repair the live artifact.

Return the saved Spaces deck. If the user asks for a PowerPoint download, tell them they can export the deck as a `.pptx` in Spaces.

### Export for SharePoint or a PPTX fallback

For SharePoint delivery or a permitted PPTX fallback, export the reviewed deck from its existing live session.

```js
deck = await artifactSession.run(async ({ presentation }) => {
    await presentation.export({ format: "pptx", fileName: "deck.pptx" });
}, { artifactRef: deck.artifactRef });
nodeRepl.write(deck);
```

In Artifact Sessions, `fileName` names the exported file; the saved artifact keeps its existing name.

For the exported file, follow the local PPTX checks in [validation and delivery](finalization.md). Copy the session-exported PPTX into the task’s private build directory and use it as `candidatePath` in the existing finalizer, skipping the local export step.

If file validation identifies content or layout problems, apply repairs to the live deck, then render and export a new draft for validation. Review the live slide renders as well as the exported result; do not imply that file checks verify untested viewer behavior.

Deliver the validated export using the final-response instructions in [SKILL.md](../SKILL.md).
