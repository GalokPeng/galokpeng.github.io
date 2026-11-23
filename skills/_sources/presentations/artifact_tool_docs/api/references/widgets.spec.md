# HTML widget cookbook

Use these examples in `artifact_session.js` with a connected presentation's
`artifactRef`.

When the user requests an HTML visualization, game, or simulation inside a
presentation, save it in that presentation. For Generate on an existing slide
block, fill that block and preserve its frame; deliver a standalone HTML file
or inline visualization only when requested.

Use the available Visualize skill's HTML authoring guidance and fit the content
to the widget's frame. Inside the widget, SVG, canvas, WebGL, and JavaScript
libraries are supported; native slide artwork and chart rules still apply to
the surrounding content.

## Add an interactive counter

```js
const html = `<!doctype html><meta charset="utf-8">
<style>
  html,body{margin:0;height:100%}
  body{display:grid;place-items:center;font:24px system-ui}
  button{font:inherit;padding:16px 24px}
</style>
<button id="count">Count: 0</button>
<script>
  let count = 0;
  document.querySelector('button').onclick = e => {
    e.currentTarget.textContent = 'Count: ' + ++count;
  };
</script>`;

const result = await artifactSession.run(async ({ presentation, input }) => {
  const slide = presentation.slides.items[0];
  const widget = slide.widgets.add({
    name: "counter",
    html: input.html,
    position: { left: 0, top: 0, ...slide.size },
  });
  return { widgetId: widget.id };
}, { artifactRef: "<connected artifactRef>", input: { html } });
nodeRepl.write(result);
```

HTML saves with the slide. Include its styles and scripts, size it to the
widget viewport, and keep each HTML document under 5 MiB.

## Replace or move a widget

Use the returned widget ID. For existing widgets, read each `widget.id` from
`slide.widgets.items` inside a callback.

```js
await artifactSession.run(async ({ presentation }) => {
  const widget = presentation.slides.items[0].widgets.getById("<widgetId>");
  widget.html = '<!doctype html><button onclick="this.textContent=Date.now()">Show time</button>';
  widget.position = { left: 80, top: 80, width: 800, height: 500 };
  // To remove it instead: widget.delete();
}, { artifactRef: "<connected artifactRef>" });
```

## Read saved HTML

```js
const result = await artifactSession.run(async ({ presentation, loadHtml }) => {
  const widget = presentation.slides.items[0].widgets.getById("<widgetId>");
  await loadHtml(widget.assetId);
  return { position: widget.position, html: widget.html.slice(0, 500) };
}, { artifactRef: "<connected artifactRef>" });
nodeRepl.write(result);
```

Static slide renders do not run HTML. Use the presentation viewer to check
appearance and interaction.
