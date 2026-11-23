"""Run the bundled desktop through its public entry points using Python Playwright."""
import argparse
import base64
import functools
import threading
from contextlib import contextmanager
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from playwright.sync_api import expect, sync_playwright

SITE = Path(__file__).resolve().parents[1] / "assets" / "starter"
CREAM = [255, 242, 214, 255]
MINT = [199, 233, 220, 255]
INK = [41, 62, 85, 255]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass


@contextmanager
def website():
    handler = functools.partial(QuietHandler, directory=str(SITE))
    with ThreadingHTTPServer(("127.0.0.1", 0), handler) as server:
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            yield f"http://127.0.0.1:{server.server_port}/"
        finally:
            server.shutdown()
            thread.join()


def sample(board, x, y):
    return board.evaluate("(c,p)=>Array.from(c.getContext('2d').getImageData(...p,1,1).data)", [x, y])


def stroke(page, board, start, end):
    board.scroll_into_view_if_needed()
    rect = board.bounding_box()

    def move(point, steps=1):
        x = rect["x"] + point[0] * rect["width"] / 640
        y = rect["y"] + point[1] * rect["height"] / 360
        page.mouse.move(x, y, steps=steps)

    move(start)
    page.mouse.down()
    move(end, steps=8)
    page.mouse.up()


def check_recording(page, frame):
    start = frame.locator("#record")
    if start.is_disabled():
        print("Recording unavailable here; recorder output was not tested.")
        return
    start.click()
    page.wait_for_timeout(650)  # Ensure both distinct inputs span multiple capture intervals.
    frame.locator("#color").select_option("#cbd9f2")
    frame.locator("#apply").click()
    page.wait_for_timeout(650)
    frame.locator("#stop").click()
    video = frame.locator("#playback")
    expect(video).to_be_visible()
    # Observe decoded frames; WebM media streams need not initially report a finite duration.
    frames = video.evaluate("""async video => {
      const surface = document.createElement('canvas');
      surface.width = 1; surface.height = 1;
      const ctx = surface.getContext('2d', {willReadFrequently:true});
      const seen = new Set();
      const sample = () => {
        if (video.readyState < 2) return;
        ctx.drawImage(video, 8,8,1,1,0,0,1,1);
        const [,g,b] = ctx.getImageData(0,0,1,1).data;
        if (g>b+4) seen.add('mint');
        if (b>g+10) seen.add('blue');
      };
      const timer = setInterval(sample, 25);
      try {
        await video.play();
        const end = performance.now()+5000;
        while (seen.size<2 && performance.now()<end && !video.ended)
          await new Promise(resolve=>setTimeout(resolve,30));
        return [video.videoWidth,video.videoHeight,[...seen].sort()];
      } finally {clearInterval(timer);video.pause();}
    }""")
    assert frames == [640, 360, ["blue", "mint"]], frames
    with page.expect_download() as event:
        frame.locator("#download-clip").click()
    recording = event.value
    with open(recording.path(), "rb") as file:
        head = file.read(12)
    if recording.suggested_filename.endswith(".mp4"):
        assert head[4:8] == b"ftyp", head
    else:
        assert recording.suggested_filename.endswith(".webm") and head[:4].hex() == "1a45dfa3", head
    print("Recording decoded at 640 x 360 with both scene colours; container signature verified.")


def desktop(browser, base):
    context = browser.new_context(viewport={"width": 1120, "height": 820}, device_scale_factor=1.5)
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda exc: errors.append(str(exc)))
    page.goto(base)
    frame = page.frame_locator("iframe")
    board = frame.locator("#board")
    expect(board).to_be_visible()
    assert sample(board, 8, 8) == CREAM
    frame.locator("#color").select_option("#c7e9dc")
    assert sample(board, 8, 8) == CREAM
    expect(frame.locator("#swatch")).to_have_css("background-color", "rgb(199, 233, 220)")
    frame.locator("#minimize").click()
    expect(frame.locator("#window")).to_be_hidden()
    frame.locator("#shortcut").dblclick()
    expect(frame.locator("#handle")).to_be_focused()
    expect(frame.locator("#color")).to_have_value("#c7e9dc")
    frame.locator("#apply").click()
    assert sample(board, 8, 8) == MINT

    handle = frame.locator("#handle")
    before = frame.locator("#window").bounding_box()
    handle.press("ArrowRight")
    assert abs(frame.locator("#window").bounding_box()["x"] - before["x"] - 8) < 1
    drag = handle.bounding_box()
    x, y = drag["x"] + 30, drag["y"] + 12
    page.mouse.move(x, y)
    page.mouse.down()
    page.mouse.move(x+45, y-12, steps=6)
    page.mouse.up()
    after = frame.locator("#window").bounding_box()
    page.mouse.move(x+90, y+45)
    assert abs(after["x"]-before["x"]-53)<1 and abs(after["y"]-before["y"]+12)<1
    assert frame.locator("#window").bounding_box() == after

    stroke(page, board, (100,100), (320,100))
    stroke(page, board, (100,200), (320,200))
    frame.locator("#eraser").click()
    stroke(page, board, (195,86), (195,115))
    assert sample(board, 195,100) == MINT and sample(board, 195,200) == INK
    frame.locator("#undo").click()
    assert sample(board, 195,100) == INK
    frame.locator("#redo").click()
    assert sample(board, 195,100) == MINT
    with page.expect_download() as event:
        frame.locator("#save").click()
    png = Path(event.value.path()).read_bytes()
    assert event.value.suggested_filename == "artboard.png" and png[:8].hex() == "89504e470d0a1a0a"
    decoded = page.evaluate("""async encoded => {
        const img = new Image(); img.src = 'data:image/png;base64,' + encoded; await img.decode();
        const c=document.createElement('canvas');c.width=img.width;c.height=img.height;
        const ctx=c.getContext('2d');ctx.drawImage(img,0,0);
        return [img.width,img.height,...[[195,100],[195,200],[130,100]].map(([x,y])=>Array.from(ctx.getImageData(x,y,1,1).data))];
    }""", base64.b64encode(png).decode("ascii"))
    assert decoded == [640, 360, MINT, INK, INK], decoded
    print("Window gestures, staged colour, local erasure, undo/redo and decoded PNG pixels verified.")
    check_recording(page, frame)
    assert not errors, errors
    context.close()


def compact(browser, base):
    page = browser.new_page(viewport={"width": 360, "height": 650}, has_touch=True, is_mobile=True)
    page.add_init_script("Object.defineProperty(window,'MediaRecorder',{configurable:true,value:undefined})")
    page.goto(base)
    frame = page.frame_locator("iframe")
    expect(frame.locator("#record")).to_be_disabled()
    expect(frame.locator("#save")).to_be_enabled()
    frame.locator("#minimize").tap()
    frame.locator("#shortcut").tap()
    expect(frame.locator("#window")).to_be_visible()
    expect(frame.locator("#handle")).to_be_focused()
    frame.locator("#pen").tap()
    frame.locator("#board").press("ArrowRight")
    frame.locator("#board").press("Space")
    assert sample(frame.locator("#board"),328,180) == INK
    assert frame.locator("#desktop").evaluate("e=>e.scrollWidth<=e.clientWidth")
    print("Touch reopening at 360px, keyboard drawing and unavailable-recorder fallback verified.")
    page.close()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--channel", help="An installed Playwright Chromium channel, e.g. chrome or msedge")
    args = parser.parse_args()
    with website() as base, sync_playwright() as playwright:
        browser = playwright.chromium.launch(channel=args.channel)
        try:
            desktop(browser, base)
            compact(browser, base)
        finally:
            browser.close()


if __name__ == "__main__":
    main()
