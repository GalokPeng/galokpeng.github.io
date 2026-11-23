# Presentation Quick Start (TypeScript)

## API Docs

API docs: `api/API_DOCS.md`

`Presentation` is the API object for a deck. A deck can be edited in a live
Artifact Session or saved as a presentation file; a slide is one page in the deck.

Geometry and numeric `fontSize` use CSS pixels at 96 DPI. For PowerPoint point
sizes, include the unit: `fontSize: "42pt"` is 42 pt, while `fontSize: 42` is
31.5 pt. Keep geometry in pixels and preserve a supplied template's sizes.

## Imports

```ts
import fs from "node:fs/promises";
import { FileBlob, Presentation, PresentationFile } from "@oai/artifact-tool";
```

## Local PPTX: create, render, export

For local PPTX authoring, this script creates an editable deck, renders each
slide PNG, and exports PPTX.

```ts
import fs from "node:fs/promises";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

async function writeBlob(path: string, blob: Blob): Promise<void> {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

async function main(): Promise<void> {
  await fs.mkdir("output", { recursive: true });

  const presentation = Presentation.create({
    slideSize: { width: 1280, height: 720 },
  });

  const slide = presentation.slides.add();
  slide.background.fill = "slate-50";

  const page = { left: 72, top: 64, width: 1136, height: 592 };
  const gutter = 28;
  const leftCol = 430;
  const rightCol = page.width - leftCol - gutter;

  const eyebrow = slide.shapes.add({
    geometry: "textbox",
    position: { left: page.left, top: page.top, width: 280, height: 28 },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  eyebrow.text = "EDITABLE PRESENTATION";
  eyebrow.text.style = { fontSize: "12pt", bold: true, color: "slate-500" };

  const title = slide.shapes.add({
    geometry: "textbox",
    position: {
      left: page.left,
      top: page.top + 92,
      width: leftCol,
      height: 240,
    },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  title.text = "Build decks with editable objects";
  title.text.style = { fontSize: "42pt", bold: true, color: "slate-950" };

  const subtitle = slide.shapes.add({
    geometry: "textbox",
    position: {
      left: page.left,
      top: page.top + 348,
      width: leftCol,
      height: 128,
    },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  subtitle.text =
    "Rows, columns, grids, charts, tables, images, and text remain editable.";
  subtitle.text.style = { fontSize: "20pt", color: "slate-600" };

  const chartFrame = slide.shapes.add({
    geometry: "roundRect",
    name: "chart-frame",
    position: {
      left: page.left + leftCol + gutter,
      top: page.top + 92,
      width: rightCol,
      height: 388,
    },
    fill: "white",
    line: { style: "solid", fill: "slate-200", width: 1 },
    borderRadius: "rounded-2xl",
    shadow: "shadow-sm",
  });

  slide.charts.add("bar", {
    position: {
      left: chartFrame.position.left + 36,
      top: chartFrame.position.top + 52,
      width: chartFrame.position.width - 72,
      height: 280,
    },
    categories: ["Rows", "Grid", "Tokens"],
    series: [{ name: "Coverage", values: [3, 4, 5], fill: "accent1" }],
    hasLegend: false,
    dataLabels: { showValue: true, position: "outEnd" },
    yAxis: {
      majorGridlines: { style: "solid", fill: "slate-200", width: 1 },
    },
  });

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    const png = await presentation.export({ slide, format: "png", scale: 1 });
    await writeBlob(`output/${stem}.png`, png);
  }

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save("output/deck.pptx");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Inspect every final slide at full size before delivery. After repairs, refresh
the affected slide previews, including slides affected by inherited changes.
Add the [optional inspection exports](#optional-inspection-exports) when needed.

## JSX Compose Equivalent

Use JSX when the slide is naturally rows, columns, grids, or overlays.

```tsx
/** @jsxRuntime automatic */
/** @jsxImportSource @oai/artifact-tool/presentation-jsx */

const frame = { left: 72, top: 64, width: 1136, height: 592 };

slide.compose(
  <column name="content-frame" width="fill" height="fill" gap={28}>
    <row width="fill" height={72} align="center" justify="between">
      <paragraph name="eyebrow" className="text-slate-500 font-bold" style={{ fontSize: "12pt" }}>
        EDITABLE PRESENTATION
      </paragraph>
      <paragraph className="text-slate-400" style={{ fontSize: "12pt" }}>Q2 planning</paragraph>
    </row>
    <row width="fill" height="fill" gap={28} align="stretch">
      <column width={430} height="fill" gap={18}>
        <paragraph
          name="primary-heading"
          className="text-slate-950 font-bold leading-tight"
          style={{ fontSize: "42pt" }}
        >
          Build decks with editable objects
        </paragraph>
        <paragraph className="text-slate-600 leading-relaxed" style={{ fontSize: "20pt" }}>
          Rows, columns, grids, charts, tables, images, and text remain
          editable.
        </paragraph>
      </column>
      <box
        name="chart-frame"
        width="fill"
        height="fill"
        className="bg-white rounded-2xl shadow-sm"
        line={{ style: "solid", fill: "slate-200", width: 1 }}
      >
        <chart
          name="coverage-chart"
          chartType="bar"
          categories={["Rows", "Grid", "Tokens"]}
          series={[{ name: "Coverage", values: [3, 4, 5], fill: "accent1" }]}
          hasLegend={false}
          width="fill"
          height="fill"
        />
      </box>
    </row>
  </column>,
  { frame, baseUnit: 8 },
);
```

## Local PPTX: import and edit

For a local file, load the PPTX, inspect for stable ids, render the affected slide
before and after a focused edit, re-inspect, and export the edited PPTX. For an
existing live deck, inspect and edit the connected presentation instead of
loading a separate copy.

```ts
const presentation = await PresentationFile.importPptx(
  await FileBlob.load("input.pptx"),
);

const before = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart,notes,thread,layout",
  search: "Revenue",
  maxChars: 8000,
});
console.log(before.ndjson);

const slide = presentation.resolve(slideIdFromInspect);
await writeBlob(
  "output/before-slide.png",
  await presentation.export({ slide, format: "png", scale: 1 }),
);

const target = presentation.resolve(anchorIdFromInspect);
target.text.replace("Revenue", "Updated revenue outlook");

await writeBlob(
  "output/after-slide.png",
  await presentation.export({ slide, format: "png", scale: 1 }),
);

const after = await presentation.inspect({
  target: { id: anchorIdFromInspect, beforeLines: 2, afterLines: 2 },
  kind: "textbox,shape,image,table,chart",
  maxChars: 3000,
});
console.log(after.ndjson);

const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save("output/edited-deck.pptx");
```

## Optional Inspection Exports

When investigating placement, export layout evidence for the affected slide
in the local authoring process. Capture it before and after a change when
comparison is useful. In Artifact Sessions, use the session's inspection and
render outputs, including the companion layout JSON; separate file writes are
not needed.

```ts
const layout = await slide.export({ format: "layout" });
await fs.writeFile("output/slide.layout.json", await layout.text());
```

For deck flow or changes affecting multiple slides, add an overview montage.
Continue to inspect individual slide PNGs at full size.

```ts
const montage = await presentation.export({
  format: "webp",
  montage: true,
});
await writeBlob("output/deck-montage.webp", montage);
```

## Local Image Bytes

Use byte-backed images for embedded PPTX assets.

```ts
async function readImageBlob(imagePath: string): Promise<ArrayBuffer> {
  const bytes = await fs.readFile(imagePath);
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength,
  );
}

const imageBytes = await readImageBlob("assets/product.png");
slide.images.add({
  blob: imageBytes,
  contentType: "image/png",
  alt: "Product screenshot",
  fit: "cover",
  position: { left: 720, top: 96, width: 420, height: 280 },
  geometry: "roundRect",
  borderRadius: "rounded-xl",
});
```

# Connect

In `artifact_session.js`, the callback receives the live `presentation`. For
a connected deck with at least one slide, use the connected `artifactRef`

```js
await artifactSession.run(async ({ presentation }) => {
  presentation.slides.getItem(0).speakerNotes.text = "Draft for review.";
}, { artifactRef: "<connected artifactRef>" });
```

For a slide preview, await `presentation.render({ slide: 0 })` after the edits
inside the callback. Never pass its returned Blob to `nodeRepl.emitImage`.
Use the inline preview after the edit commits. If you need to display a saved
PNG separately, read its ready `publishedOutputs` entry’s `value.path` once.
Emit those bytes only if their SHA-256 matches that entry’s `projection.digest`.
